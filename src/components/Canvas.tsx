import React from "react";
import { Canvas as ThreeCanvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Island from "./Island";
import Lantern from "./Lantern";
import Clouds from "./Clouds";
import Fox from "./Fox";

export default function Canvas() {
  const model = useGLTF("./cottage.gltf") as any;

  return (
    <ThreeCanvas
      shadows
      camera={{
        position: [16.727, 6, 17.939],
        fov: 25,
      }}
    >
      <OrbitControls
        makeDefault
        enableZoom={false}
        minAzimuthAngle={Math.PI / 8}
        maxAzimuthAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <ambientLight color="0x404040" intensity={0.6} />
      <directionalLight
        position={[9.44, 3.66, 2.21]}
        intensity={0.7}
        castShadow={true}
      />
      <Island model={model} />
      <Lantern model={model} />
      <Clouds model={model} />
      <Fox model={model} />
    </ThreeCanvas>
  );
}
