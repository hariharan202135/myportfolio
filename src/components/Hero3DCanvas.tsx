import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function PortraitVisual({ isHovered }: { isHovered: boolean }) {
  const portraitGroupRef = useRef<THREE.Group>(null!);
  const ringRef1 = useRef<THREE.Mesh>(null!);
  const ringRef2 = useRef<THREE.Mesh>(null!);
  const innerGlassRingRef = useRef<THREE.Mesh>(null!);

  // Load the clean portrait cutout with transparent background
  const texture = useTexture('/profile_circle_transparent.png');

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    // Subtle parallax reaction to mouse pointer movement (Face stays upright)
    if (portraitGroupRef.current) {
      portraitGroupRef.current.rotation.y = THREE.MathUtils.lerp(portraitGroupRef.current.rotation.y, x * 0.18, 0.04);
      portraitGroupRef.current.rotation.x = THREE.MathUtils.lerp(portraitGroupRef.current.rotation.x, -y * 0.18, 0.04);
    }

    // Elegant background orbital rings rotating BEHIND the portrait
    if (ringRef1.current) {
      ringRef1.current.rotation.z = time * 0.25;
      ringRef1.current.rotation.x = Math.sin(time * 0.3) * 0.15;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z = -time * 0.18;
      ringRef2.current.rotation.y = Math.cos(time * 0.25) * 0.15;
    }

    if (innerGlassRingRef.current) {
      innerGlassRingRef.current.rotation.z = time * 0.15;
    }
  });

  return (
    <group ref={portraitGroupRef}>
      
      {/* ==================== 1. BACKGROUND 3D ACCENTS (BEHIND PORTRAIT) ==================== */}
      
      {/* Soft Cyan & Violet Radial Glow Disc behind Portrait */}
      <mesh position={[0, 0, -0.25]}>
        <circleGeometry args={[1.65, 64]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={isHovered ? 0.35 : 0.22}
        />
      </mesh>

      <mesh position={[0, 0, -0.28]}>
        <circleGeometry args={[1.85, 64]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={isHovered ? 0.25 : 0.14}
        />
      </mesh>

      {/* Primary Thin Orbital Ring (Behind Portrait) */}
      <mesh ref={ringRef1} position={[0, 0, -0.35]}>
        <torusGeometry args={[2.05, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#06b6d4"
          emissiveIntensity={isHovered ? 1.2 : 0.7}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Secondary Subtle Orbit Ring (Behind Portrait) */}
      <mesh ref={ringRef2} position={[0, 0, -0.45]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.35, 0.01, 16, 120]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={isHovered ? 1.0 : 0.5}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* ==================== 2. MAIN PORTRAIT MESH (FRONT & CENTER) ==================== */}
      
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <group scale={isHovered ? 1.04 : 1}>
          
          {/* Main Clean Portrait Circle (Facing User, Unblocked) */}
          <mesh position={[0, 0, 0]}>
            <circleGeometry args={[1.35, 64]} />
            <meshBasicMaterial
              map={texture}
              transparent
              toneMapped={false}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Glass-like Futuristic Thin Circular Frame Border Around Portrait */}
          <mesh ref={innerGlassRingRef} position={[0, 0, 0.02]}>
            <ringGeometry args={[1.34, 1.40, 64]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#06b6d4"
              emissiveIntensity={isHovered ? 1.4 : 0.8}
              roughness={0.1}
              metalness={0.9}
              transparent
              opacity={0.95}
            />
          </mesh>

          {/* Outer Ambient Accent Ring */}
          <mesh position={[0, 0, 0.01]}>
            <ringGeometry args={[1.41, 1.44, 64]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#a855f7"
              emissiveIntensity={isHovered ? 1.0 : 0.5}
              transparent
              opacity={0.6}
            />
          </mesh>

        </group>
      </Float>

    </group>
  );
}

// Background Floating Particles (Positioned safely around/behind)
function BackgroundParticles({ count = 65 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Keep particles in background Z space (-1 to -5) and wide X/Y spread
      positions[i * 3] = (Math.random() - 0.5) * 9.0;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9.0;
      positions[i * 3 + 2] = -0.5 - Math.random() * 4.0;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#38bdf8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Fallback while texture loads
function LoadingFallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <circleGeometry args={[1.35, 32]} />
      <meshBasicMaterial color="#070e20" transparent opacity={0.8} />
    </mesh>
  );
}

export default function Hero3DCanvas() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-[420px] sm:h-[480px] lg:h-[550px] relative flex items-center justify-center"
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Soft Ambient Radial Background Glow */}
      <div className={`absolute inset-0 bg-radial-glow pointer-events-none rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? 'opacity-85' : 'opacity-50'}`} />

      {/* Canvas Scene */}
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={isHovered ? 0.9 : 0.75} />
        <directionalLight position={[10, 10, 5]} intensity={isHovered ? 1.4 : 1.1} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, 0, 3]} intensity={isHovered ? 0.8 : 0.5} color="#06b6d4" />

        <Suspense fallback={<LoadingFallback />}>
          <PortraitVisual isHovered={isHovered} />
        </Suspense>

        <BackgroundParticles count={70} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>

      {/* Subtle Floating HUD Tags Around Portrait (Non-intrusive) */}
      <div className="absolute top-8 left-6 glass-card px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan-300 border border-cyan-500/30 shadow-md pointer-events-none hidden sm:flex items-center space-x-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>AI / ML</span>
      </div>

      <div className="absolute bottom-12 left-4 glass-card px-2.5 py-1 rounded-md text-[10px] font-mono text-purple-300 border border-purple-500/30 shadow-md pointer-events-none hidden sm:flex items-center space-x-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        <span>FULL-STACK</span>
      </div>

      <div className="absolute top-12 right-6 glass-card px-2.5 py-1 rounded-md text-[10px] font-mono text-emerald-300 border border-emerald-500/30 shadow-md pointer-events-none hidden sm:flex items-center space-x-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>PYTHON</span>
      </div>

      {/* Decorative Overlay Tag */}
      <div className="absolute bottom-4 right-4 glass-card px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400/90 border border-cyan-500/20 shadow-lg pointer-events-none hidden sm:flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>Developer Portrait • N. Hariharan</span>
      </div>
    </div>
  );
}
