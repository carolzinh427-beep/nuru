import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function HeroScene({ scrollProgress = 0, mouse = { x: 0, y: 0 }, isMobile = false, prefersReducedMotion = false }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (!prefersReducedMotion) {
      // Continuous slow subtle rotation
      meshRef.current.rotation.y += delta * 0.12;
      meshRef.current.rotation.x += delta * 0.05;

      // Mouse reaction (smooth lerp)
      const targetMouseX = mouse.x * 0.35;
      const targetMouseY = mouse.y * 0.35;
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetMouseX,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetMouseY + (scrollProgress * 0.75), // Scroll reaction: displacement upwards
        0.05
      );

      // Scroll scale reaction
      const targetScale = Math.max(0.65, 1 - scrollProgress * 0.35);
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.05
      );
    } else {
      // Minimal static position for reduced motion
      meshRef.current.position.set(0, 0, 0);
      meshRef.current.scale.set(1, 1, 1);
    }
  });

  const detail = isMobile ? 2 : 4;
  const radius = isMobile ? 1.4 : 1.85;

  return (
    <>
      <ambientLight intensity={0.4} color="#161412" />
      <directionalLight position={[6, 6, 5]} intensity={1.6} color="#E8C878" />
      <directionalLight position={[-6, -5, -4]} intensity={0.6} color="#C9A24B" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#C9A24B" />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[radius, detail]} />
        <MeshDistortMaterial
          color="#C9A24B"
          roughness={0.42}
          metalness={0.75}
          distort={prefersReducedMotion ? 0.04 : 0.3}
          speed={prefersReducedMotion ? 0 : 1.0}
          wireframe={false}
        />
      </mesh>
    </>
  );
}

export default HeroScene;
