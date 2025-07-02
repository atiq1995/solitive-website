'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Torus, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, geometry, color }: { position: [number, number, number], geometry: string, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color,
    metalness: 0.8,
    roughness: 0.2,
    emissive: color,
    emissiveIntensity: 0.1,
  }), [color])

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[1, 32, 32]} material={material} />
      case 'box':
        return <Box ref={meshRef} args={[1.5, 1.5, 1.5]} material={material} />
      case 'torus':
        return <Torus ref={meshRef} args={[1, 0.4, 16, 32]} material={material} />
      case 'octahedron':
        return <Octahedron ref={meshRef} args={[1.2]} material={material} />
      default:
        return <Sphere ref={meshRef} args={[1, 32, 32]} material={material} />
    }
  }

  return (
    <Float
      position={position}
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
    >
      {renderGeometry()}
    </Float>
  )
}

function Scene() {
  const shapes = [
    { position: [-4, 2, -2], geometry: 'sphere', color: '#00D4FF' },
    { position: [4, -1, -1], geometry: 'box', color: '#39FF14' },
    { position: [-2, -2, 1], geometry: 'torus', color: '#BF00FF' },
    { position: [3, 3, 0], geometry: 'octahedron', color: '#FF1493' },
    { position: [0, 1, -3], geometry: 'sphere', color: '#00FFFF' },
    { position: [-3, -1, 2], geometry: 'box', color: '#39FF14' },
  ] as const

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#39FF14" />
      <spotLight position={[0, 20, 0]} angle={0.3} intensity={0.8} color="#BF00FF" />
      
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          geometry={shape.geometry}
          color={shape.color}
        />
      ))}
    </>
  )
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
} 