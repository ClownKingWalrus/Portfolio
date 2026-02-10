/* Background should be some sort of forest theme maybe on fire with lava? could be interesting */
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { TreePrimitive } from "./TreePrimitive";
import { Stars } from "@react-three/drei";
import { TreeBlender } from "./TreeBlender";
import { CameraMover } from "./CameraMover"
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";
import { AboutMe } from "./AboutMe";


export const Background = () => {
    const [fov, setFov] = useState(60)
    const [LookAtBubble, setLookAtBubble] = useState({ name: "bubble-base-look-at", position: [0, -1,-19], color: "white", bubbleLookAt: null});
    const [activeBubble, setActiveBubble] = useState({ name: "bubble-base", position: [0,-1,-20], color: "white", bubbleLookAt: LookAtBubble, rotation: { x: 0, y: 0, z: 0 }});
    const bubbleRefs = useRef({});
    const skillPanelRefs = useRef({});

    const [showProjects, setShowProjects] = useState(false);
    const [skills, setSkills] = useState(false);
    const [workExperience, setWorkExperience] = useState(false);
    const [aboutMe, setAboutMe] = useState(false);

    //this function is meant to rotate the camera to the mouse slightly without letting the user look to far left and right
    function CameraRotater({ activeBubble, LookAtBubble }) {
    const { camera } = useThree();
    const target = useMemo(() => new THREE.Vector3(), []);
    const targetOffSet = useMemo(() => new THREE.Vector3(), []);

    // Move camera once when activeBubble changes
    useEffect(() => {
        if (!LookAtBubble) return;

        if (bubbleRefs.current[LookAtBubble.name]) {
            const bubble = bubbleRefs.current[LookAtBubble.name]
            bubble.getWorldPosition(target);
            camera.lookAt(target)
        }

  }, [camera, activeBubble, LookAtBubble, target]);

  useFrame((state) => {
    const maxOffSet = 0.1;
    const x = state.pointer.x * maxOffSet;
    const y = state.pointer.y * maxOffSet;

    const forward = targetOffSet.copy(target).sub(camera.position).normalize(); // reuse targetOffSet as temp
    const right = new THREE.Vector3().crossVectors(forward, camera.up).normalize();
    const up = new THREE.Vector3().crossVectors(right, forward).normalize();
    const offSet = right.multiplyScalar(x * maxOffSet).add(up.multiplyScalar(y * maxOffSet));

    camera.lookAt(target.clone().add(offSet));
  });

  return null;
}

    function handleSetDefaultBubble(newBubble) {
        setActiveBubble(newBubble);
    }

    /// This function is a bit confusing but currentbubble refers to the new travel bubble making it the new current bubble
    function handleBubbleClick(CurrentBubble, targetBubble) {
        setActiveBubble(CurrentBubble);
        setLookAtBubble(targetBubble);
    }

    function handlePanelClick() {
        console.log("called panel click");
        console.log(activeBubble.name);
        //Apply a gray overlay to essentially dim the background
        if (activeBubble.name == "bubble-left")
            {setShowProjects(true)}
        else if (activeBubble.name == "bubble-right")
            {setSkills(true)}
        else if (activeBubble.name == "bubble-top")
            {setWorkExperience(true)}
        else if (activeBubble.name == "bubble-front")
            {setAboutMe(true)}
        else {
            console.log("Failed panel click active bubble probably a json object not a three jsx object");
        }
    }


    function CreateTravelButtons() {
        return (
            <div className="absolute right-4 top-1/2 z-1 flex flex-col space-y-5">
                <button 
                    onClick={() => handleBubbleClick(bubbleRefs.current["bubble-left"], bubbleRefs.current["bubble-left-look-at"])} 
                    className="px-15 py-4 rounded-xl bg-red-600 text-black shadow-xl">
                        Projects
                </button>

                <button 
                    onClick={() => handleBubbleClick(bubbleRefs.current["bubble-right"], bubbleRefs.current["bubble-right-look-at"])} 
                    className="px-15 py-4 rounded-xl bg-blue-600 text-black shadow-xl">
                        Skills
                </button>

                <button 
                    onClick={() => handleBubbleClick(bubbleRefs.current["bubble-base"], bubbleRefs.current["bubble-base-look-at"])} 
                    className="px-15 py-4 rounded-xl bg-white text-black shadow-xl">
                        Home
                </button>

                <button 
                    onClick={() => handleBubbleClick(bubbleRefs.current["bubble-top"], bubbleRefs.current["bubble-top-look-at"])} 
                    className="px-15 py-4 rounded-xl bg-green-600 text-black shadow-xl">
                        Work Experience
                </button>

                <button 
                    onClick={() => handleBubbleClick(bubbleRefs.current["bubble-front"], bubbleRefs.current["bubble-front-look-at"])} 
                    className="px-15 py-4 rounded-xl bg-pink-400 text-black shadow-xl">
                        About Me
                </button>
            </div>
        )
    }

    return (
    <div style={ {position: "relative", height: "100vh", width: "100vw"}} >
        
        {/* UI OVERLAY */}
        <CreateTravelButtons />

        {/* UI Overlay for Panels */}
        {showProjects && (<Projects onClose={() => setShowProjects(false)} />)}
        {skills && (<Skills onClose={() => setSkills(false)} />)}
        {workExperience && (<WorkExperience onClose={() => setWorkExperience(false)} />)}
        {aboutMe && (<AboutMe onClose={() => setAboutMe(false)} />)}

        {/* Scene */}
        <Canvas style={{ position: "absolute", inset: 0, zIndex: 0}}>

            {/* background color */}
            <color attach="background" args={["black"]} />

            <Stars
            radius={75}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            />

            
            <TreeBlender position={[0, -1, 0]} scale={1} />
            <TreePrimitive onBubbleClick={handleBubbleClick} setDefaultBubble={handleSetDefaultBubble} bubbleRefs={bubbleRefs} skillPanelRef={skillPanelRefs} onPanelClick={handlePanelClick}/>

            {/* Lighting 2*/}
            <directionalLight position={[5, 8, 5]} intensity={5} />
            <ambientLight intensity={1.6} />

            {/* Controls */}

            {/* Camera Controls */}
            <PerspectiveCamera makeDefault fov={fov} position={activeBubble.position}/>
            {/* <CameraMover target={activeBubble.position} targetLookAt={LookAtBubble.position}/> */}
            <CameraRotater activeBubble={activeBubble} LookAtBubble={LookAtBubble}/>

        </Canvas>
    </div>
    );
}