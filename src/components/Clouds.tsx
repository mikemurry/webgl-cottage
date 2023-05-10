import React from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

interface CloudsProps {
  model: any;
}

const cloudDuration = 10;
const cloudRotation = 0.1;
const basePosition = { x: -0.91, y: 2.3, z: -1.8 };

function updateCloud(mesh: Mesh, elapsed: number, offset: number) {
  const base = (elapsed + offset) % cloudDuration;
  const ratio = base / cloudDuration;

  const radius = 0.5 * ratio;

  /* Clouds will make a horizontal circle with an increasing radius over time. */
  mesh.position.x = basePosition.x + radius * Math.cos(ratio * Math.PI * 2);
  mesh.position.z = basePosition.z + radius * Math.sin(ratio * Math.PI * 2);

  /* Clouds will move up over time. */
  mesh.position.y = basePosition.y + (4.8 - basePosition.y) * ratio;

  /* Clouds will scale up over time. */
  const scale = 2 * ratio;
  mesh.scale.x = scale;
  mesh.scale.y = scale;
  mesh.scale.z = scale;

  /* Clouds will rotate over time. */
  const rotation = elapsed * cloudRotation + offset;
  mesh.rotation.x = rotation;
  mesh.rotation.y = rotation;
  mesh.rotation.z = rotation;
}

export default function Clouds({ model }: CloudsProps) {
  const { nodes, materials } = model;

  const cloud1 = React.useRef<Mesh>();
  const cloud2 = React.useRef<Mesh>();
  const cloud3 = React.useRef<Mesh>();

  useFrame(({ clock }) => {
    if (cloud1.current) {
      updateCloud(cloud1.current, clock.getElapsedTime(), 0);
    }

    if (cloud2.current) {
      updateCloud(cloud2.current, clock.getElapsedTime(), cloudDuration / 3);
    }

    if (cloud3.current) {
      updateCloud(
        cloud3.current,
        clock.getElapsedTime(),
        (cloudDuration / 3) * 2
      );
    }
  });

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud1.geometry}
        material={materials.Cloud}
        position={[-0.42, 2.76, -1.42]}
        ref={cloud1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud1.geometry}
        material={materials.Cloud}
        position={[-0.65, 3.49, -1.58]}
        ref={cloud2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud1.geometry}
        material={materials.Cloud}
        position={[-0.53, 4.74, -0.9]}
        ref={cloud3}
      />
    </group>
  );
}
