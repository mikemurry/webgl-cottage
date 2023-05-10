import React from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

interface FoxProps {
  model: any;
}

export default function Fox({ model }: FoxProps) {
  const { nodes, materials } = model;

  const mesh = React.useRef<Group>();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.05;
    }
  });

  return (
    <group dispose={null}>
      <group position={[2, -2.98, 1.39]} ref={mesh}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FoxTail_1.geometry}
          material={materials.Fox}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FoxTail_2.geometry}
          material={materials.FoxTip}
        />
      </group>
    </group>
  );
}
