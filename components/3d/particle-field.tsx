"use client"

import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function Particles() {
  const ref = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3)

    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3b82f6" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
    </Points>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  )
}
