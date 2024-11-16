import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const DamagedHelmet = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models/damaged_helmet.glb");

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material_MR}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/models/damaged_helmet.glb");

export default DamagedHelmet;
