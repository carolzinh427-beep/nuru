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
      meshRef.current.rotation.x += delta * 0.06;

      // Mouse reaction (smooth lerp)
      const targetMouseX = mouse.x * 0.4;
      const targetMouseY = mouse.y * 0.4;
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetMouseX,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetMouseY + (scrollProgress * 0.8), // Scroll reaction: displacement upwards
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
  const radius = isMobile ? 1.4 : 1.9;

  return (
    <>
      <ambientLight intensity={0.9} color="#F7F5F0" />
      <directionalLight position={[5, 6, 5]} intensity={1.4} color="#F7F5F0" />
      <directionalLight position={[-5, -4, -3]} intensity={0.6} color="#486581" />
      <pointLight position={[0, -2, 2]} intensity={0.4} color="#C7B79A" />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[radius, detail]} />
        <MeshDistortMaterial
          color="#C7B79A"
          roughness={0.72}
          metalness={0.12}
          distort={prefersReducedMotion ? 0.05 : 0.32}
          speed={prefersReducedMotion ? 0 : 1.1}
          wireframe={false}
        />
      </mesh>
    </>
  );
}

export default HeroScene;

