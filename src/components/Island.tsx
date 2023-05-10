import React from "react";

interface IslandProps {
  model: any;
}

export default function Island({ model }: IslandProps) {
  const { nodes, materials } = model;

  return (
    <group dispose={null}>
      <group position={[-1.48, 0, 0.16]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cottage_1.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cottage_2.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cottage_3.geometry}
          material={materials.Indoor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cottage_4.geometry}
          material={materials.Door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cottage_5.geometry}
          material={materials.Iron}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cottage_6.geometry}
          material={materials.Thatch}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PondGrass.geometry}
        material={materials.PondGrass}
        position={[0.39, -0.9, 0.25]}
      />
      <group position={[-0.34, -0.93, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_1.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_2.geometry}
          material={materials.DirtA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_3.geometry}
          material={materials.DirtB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_4.geometry}
          material={materials.DirtC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_5.geometry}
          material={materials.Water}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_6.geometry}
          material={materials.Rock}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_7.geometry}
          material={materials.CobbleB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Island_8.geometry}
          material={materials.Lilies}
        />
      </group>
      <group position={[-1.54, 1.82, 0.18]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Loft_1.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Loft_2.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Loft_3.geometry}
          material={materials.Thatch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Loft_4.geometry}
          material={materials.Indoor}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant.geometry}
        material={materials.Plant}
        position={[0.95, -0.72, -0.88]}
      />
      <group position={[0.71, -1.46, -3.18]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TreeGreen_1.geometry}
          material={materials.LeavesGreen1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TreeGreen_2.geometry}
          material={materials.LeavesGreen2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TreeGreen_3.geometry}
          material={materials.Door}
        />
      </group>
      <group position={[0.5, -0.79, -1.98]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TreePink_1.geometry}
          material={materials.LeavesPink}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TreePink_2.geometry}
          material={materials.Wood}
        />
      </group>
    </group>
  );
}
