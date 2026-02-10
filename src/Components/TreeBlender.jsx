import { useGLTF } from "@react-three/drei";

export function TreeBlender(props) {
    const { scene } = useGLTF("Tree.glb")
        return <primitive object={scene} {...props} />;
}

useGLTF.preload("Tree.glb");