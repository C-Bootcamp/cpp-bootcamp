import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Canvas = (props) => {
  const { nodes, materials } = useGLTF("/models/damaged_helmet.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material_MR}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/damaged_helmet.glb");

export default Canvas;
