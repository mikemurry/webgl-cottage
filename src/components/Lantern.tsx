import React from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

interface LanternProps {
  model: any;
}

export default function Lantern({ model }: LanternProps) {
  const { nodes, materials } = model;

  const mesh = React.useRef<Group>();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.05;
    }
  });

  return (
    <group dispose={null}>
      <group position={[-0.54, 2.25, 2.76]} ref={mesh}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Latern.geometry}
          material={materials.Iron}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Latern_1.geometry}
          material={materials.Indoor}
        />
      </group>
    </group>
  );
}
