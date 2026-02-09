import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";

export function CameraMover({target, targetLookAt, speed = 0.005}) {
    const { camera } = useThree()
    const targetVector = useRef(new THREE.Vector3());
    const targetLookAtVector = useRef(new THREE.Vector3());

    useEffect ( () => {
        if (target?.length === 3)  { // only runs once when target bubble is clicked
            console.log("useeffectCalled");
            targetVector.current.set(target[0], target[1], target[2]);
        } 
    }, [target]);

    useEffect ( () => {
        if (targetLookAt?.length === 3) { // only runs once when target bubble is clicked
            targetLookAtVector.current.set(targetLookAt[0], targetLookAt[1], targetLookAt[2])
        }
    }, [targetLookAt])

    useFrame( () => {
        //camera.position.lerp(targetVector.current, 0.0008);
        camera.lookAt(targetLookAtVector.current);
    });
    return null;
}