import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const CryptoSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!sphereRef.current) return;
    sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <meshPhongMaterial
        color="#4F46E5"
        wireframe
        side={THREE.DoubleSide}
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
};