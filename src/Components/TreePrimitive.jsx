import { useCallback, useEffect } from "react";

//currently this function runs  twice for each node every 5 seconds ~20 times
//TODO fix the fact it runs multiple times rather than just once
//////////////////////// Bubble Mesh Creator ////////////////////////
function Bubble({register, lookAtBubbleName, position, radius = 0.18, color = "red", metalness = 0.4, roughness = 0.2, name, onBubbleClick, scale = 1, bubbleRefs}) {
    //console.log("Bubble Function");
    return (
    <mesh 
    position={position} 
    name={name} 
    scale={scale}
    lookAtBubbleName={lookAtBubbleName}
    ref={register(name)}          
    onClick={onBubbleClick ? (e) => onBubbleClick(e.object, bubbleRefs.current[lookAtBubbleName]) : undefined}
    >
      <sphereGeometry args={[radius, 24, 24]} />
      <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
    </mesh>
  );
}

//////////////////////// Look At Bubbles Declaration Function ////////////////////////
function CreateLookAtBubbles (BubbleRefs, Register) {
  const bubbleLookAtMap=([
      { name: "bubble-base-look-at", position: [-0.1, -1,-18], color: "white", scale: 0.1, bubbleLookAt: null},
      { name: "bubble-left-look-at", position: [5.5, 8, -3.2], color: "red", scale: 0.2, bubbleLookAt: null},
      { name: "bubble-right-look-at", position: [-2.5,  9.5, 2], color: "blue", scale: 0.1, bubbleLookAt: null},
      { name: "bubble-top-look-at", position: [1.5, 9, 2], color: "green", scale: 0.1, bubbleLookAt: null},
      { name: "bubble-front-look-at", position: [-2, 6.0, -0.8], color: "pink", scale: 0.1, bubbleLookAt: null},
  ]);

  const bubbleFinalLookMap=[];

  for (let i = 0; i < bubbleLookAtMap.length; i++) {
        bubbleFinalLookMap.push(
        <Bubble key={bubbleLookAtMap[i].name} lookAtBubbleName={null} {...bubbleLookAtMap[i]} register={Register} bubbleRefs={BubbleRefs}/>);
      }
  return bubbleFinalLookMap;
}

//////////////////////// Skill Panel Mesh Creator ////////////////////////
function SkillPanel({registerPanel, name, scale, position, color, onPanelClick}) {
  return ( 
  <mesh
  name={name}
  scale={scale}
  position={position}
  ref={registerPanel(name)}
  onClick={onPanelClick ? () => onPanelClick() : undefined}
  >
    <boxGeometry args={[1,8,8]} />
    <meshBasicMaterial color={color} metalness={0.4} roughness={0.5} />
  </mesh>
  );
}

//////////////////////// Skill Panel Declaration Function ////////////////////////
function CreateSkillPanel(registerSkillPanel, OnPanelClick) {
  const panelMap=([
        { name: "bubble-left-look-at-panel", position: [5.5, 8, -3.2], color: "red", scale: 0.1},
        { name: "bubble-right-look-at-panel", position: [-2.5,  9.5, 2], color: "blue", scale: 0.1},
        { name: "bubble-top-look-at-panel", position: [1.5, 9, 2], color: "green", scale: 0.1},
        { name: "bubble-front-look-at-panel", position: [-2, 6.0, -0.8], color: "pink", scale: 0.1},
  ]);

  const finalPanelMap=[];

  for (let i = 0; i < panelMap.length; i++) {
        finalPanelMap.push(
        <SkillPanel key={panelMap[i].name} {...panelMap[i]} registerPanel={registerSkillPanel} onPanelClick={OnPanelClick}/>);
      }
  return finalPanelMap;
}

///clickable areas on the *panels* will show info about the item
///To be decided if ill actually use this or if ill just have panel TBD
function createInfoBubbles (BubbleRefs, Register) {
const bubbleInfoMap=([
  // { name: "bubble-base-look-at", position: [-0.1, -1,-18], color: "white", scale: 0.1, bubbleLookAt: null},

    /* Red Skill bubble Clickables Name: {bubble-left-look-at} Posistion of skill panel {[5.5, 8, -3.2]} */
    { name: "bubble-left-look-at", position: [5.5, 8, -3.2], color: "red", scale: 0.2, bubbleLookAt: null},

    /* Blue Skill bubble Clickables */
    { name: "bubble-right-look-at", position: [-2.5,  9.5, 2], color: "blue", scale: 0.1, bubbleLookAt: null},

    /* Green Skill bubble Clickables Name: {bubble-top-look-at} */
    { name: "bubble-top-look-at", position: [1.5, 9, 2], color: "green", scale: 0.1, bubbleLookAt: null},

    /* Pink Skill bubble Clickables */
    { name: "bubble-front-look-at", position: [-2, 6.0, -0.8], color: "pink", scale: 0.1, bubbleLookAt: null},

  ]);

  const bubbleInfoFinalMap=[];

  for (let i = 0; i < bubbleInfoMap.length; i++) {
        bubbleInfoFinalMap.push(
        <Bubble key={bubbleInfoMap[i].name} lookAtBubbleName={null} {...bubbleInfoMap[i]} register={Register} bubbleRefs={BubbleRefs}/>);
      }
  return bubbleInfoFinalMap;
}

//currently this function runs  6 times on startup and then around 2 times every 5 seconds
//TODO fix the fact it runs multiple times rather than just once
export function TreePrimitive({onBubbleClick, setDefaultBubble, bubbleRefs, skillPanelRef, onPanelClick}) {
  const bubbles =([
      //move to points
      { name: "bubble-base", position: [0,-1,-20], color: "white", bubbleLookAt: null},
      { name: "bubble-left", position: [6, 8, -3.5], color: "red", bubbleLookAt: null},
      { name: "bubble-right", position: [-3,  9.5, 2], color: "blue", bubbleLookAt: null},
      { name: "bubble-top", position: [2, 9, 2], color: "green", bubbleLookAt: null},
      { name: "bubble-front", position: [-2.4, 5.8, -0.8], color: "pink", bubbleLookAt: null},
    ]
  );

  //////////////// Register Section 1/2 ////////////////
  /// This section is inteded to link the actual react mesh/object in bubbleRefs[]: 
  /// IE: if mesh exist then in refs the key [bubble-left] = mesh;
  const register = useCallback(
    (name) => (mesh) => {
      if (mesh) bubbleRefs.current[name] = mesh;
    },
    []
  );

  //////////////// Register Section 2/2 ////////////////
  /// This section is inteded to link the actual react mesh/object in skillPanelRef[]:
  /// IE: if mesh exist then in refs the key [bubble-left-at-panel] = mesh;
  const registerPanel = useCallback(
  (name) => (mesh) => {
    if (mesh) skillPanelRef.current[name] = mesh;
    },
  []
  );

  //////////////// Create Main LookAt bubbbles////////////////
  const LookAtBubbleMap=CreateLookAtBubbles(bubbleRefs, register);

  //////////////// Create Main Travel point bubbles ////////////////
  /// This section Creates the actual bubbles the user clicks to move around
  /// The lookatbubbles are essentialy small bubbles inside the skill panel, will probably removed and replaced with the skill panels since they can serve the same purpose.
  const elements = [];
  for (let i = 0; i < bubbles.length; i++) {
        elements.push(
            <Bubble key={bubbles[i].name} lookAtBubbleName={LookAtBubbleMap[i].props?.name} {...bubbles[i]} onBubbleClick={onBubbleClick} register={register} bubbleRefs={bubbleRefs}/>
        );
  }

  /* Create skillPanel map */
  const panelMap=CreateSkillPanel(registerPanel, onPanelClick);


  //////////////// Runs once TreePrim() complete ////////////////
  /// This currently just makes each Traverse bubble Look at their coorosponding LookAt bubble
  /// This makes it so we dont have to value guess a rotation for where the camera should be per bubble 
  useEffect( () => {
    const base = bubbleRefs.current["bubble-base"];
    if (base) setDefaultBubble(base);

    for (let i = 0; i < elements.length; i++) {
      const name = elements[i].props.name;
      const obj = bubbleRefs.current[name];
      const target = bubbleRefs.current[name + "-look-at"];

      if (obj && target) {
        obj.lookAt(target.position ?? target);
      }
    }
  }, [])

  // entire group gets offset by -1
  return (
    <group position={[0, 0, 0]} name="tree-root">
        {/* Skill bubbles */}
        {LookAtBubbleMap}
        {elements}
        {panelMap}
    </group>
  );
}
