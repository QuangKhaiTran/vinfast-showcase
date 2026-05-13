import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function StylizedCar() {
  const ref = useRef<Group>(null);
  const wheelRefs = useRef<Mesh[]>([]);
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4;
    wheelRefs.current.forEach((w) => w && (w.rotation.x += delta * 6));
  });

  const wheelPositions: [number, number, number][] = [
    [1.1, -0.45, 0.85],
    [-1.1, -0.45, 0.85],
    [1.1, -0.45, -0.85],
    [-1.1, -0.45, -0.85],
  ];

  return (
    <group ref={ref} position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[3.4, 0.6, 1.6]} />
        <meshStandardMaterial color="#dc2626" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* Cabin */}
      <mesh position={[-0.1, 0.7, 0]} castShadow>
        <boxGeometry args={[2, 0.55, 1.45]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Roof curve */}
      <mesh position={[-0.1, 1.0, 0]} castShadow>
        <boxGeometry args={[1.6, 0.05, 1.4]} />
        <meshStandardMaterial color="#dc2626" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* Headlights */}
      <mesh position={[1.71, 0.2, 0.5]}>
        <boxGeometry args={[0.05, 0.15, 0.4]} />
        <meshStandardMaterial emissive="#60a5fa" emissiveIntensity={2} color="#fff" />
      </mesh>
      <mesh position={[1.71, 0.2, -0.5]}>
        <boxGeometry args={[0.05, 0.15, 0.4]} />
        <meshStandardMaterial emissive="#60a5fa" emissiveIntensity={2} color="#fff" />
      </mesh>
      {/* Taillights */}
      <mesh position={[-1.71, 0.25, 0]}>
        <boxGeometry args={[0.04, 0.1, 1.4]} />
        <meshStandardMaterial emissive="#ef4444" emissiveIntensity={2} color="#fff" />
      </mesh>
      {/* Wheels */}
      {wheelPositions.map((pos, i) => (
        <mesh
          key={i}
          ref={(m) => {
            if (m) wheelRefs.current[i] = m;
          }}
          position={pos}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[0.42, 0.42, 0.25, 24]} />
          <meshStandardMaterial color="#111" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export function Car3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 2.5, 5], fov: 35 }}
      className="!absolute inset-0"
      dpr={[1, 1.8]}
    >
      <ambientLight intensity={0.4} />
      <spotLight position={[8, 10, 5]} angle={0.3} intensity={1.5} castShadow />
      <pointLight position={[-5, 3, -5]} intensity={0.6} color="#3b82f6" />
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
          <StylizedCar />
        </Float>
        <ContactShadows
          position={[0, -0.95, 0]}
          opacity={0.6}
          scale={10}
          blur={2.5}
          far={3}
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}