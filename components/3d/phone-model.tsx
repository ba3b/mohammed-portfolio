'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { RoundedBox, Html, Text, MeshReflectorMaterial } from '@react-three/drei'
import { Group, Vector3 } from 'three'
import { motion } from 'framer-motion'

interface ScrollPhoneModelProps {
  scrollY?: number
  scrollDirection?: 'up' | 'down'
  isScrolling?: boolean
}

const portfolioApps = [
  {
    title: 'Portfolio Site',
    subtitle: 'Next.js & TypeScript',
    color: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    icon: '🚀',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Mobile Development',
    subtitle: 'React Native & Flutter',
    color: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
    icon: '�',
    tech: ['React Native', 'Flutter', 'Expo', 'Firebase'],
  },
  {
    title: 'Web Applications',
    subtitle: 'Full Stack Solutions',
    color: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    icon: '💻',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: '3D & Animation',
    subtitle: 'Three.js & WebGL',
    color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    icon: '🎨',
    tech: ['Three.js', 'Framer Motion', 'WebGL', 'Blender'],
  },
]

export function PhoneModel({
  scrollY = 0,
  scrollDirection = 'down',
  isScrolling = false,
}: ScrollPhoneModelProps) {
  const groupRef = useRef<Group>(null)
  const phoneRef = useRef<Group>(null)
  const [currentScreen, setCurrentScreen] = useState(0)
  const { viewport } = useThree()

  useFrame(state => {
    if (groupRef.current && phoneRef.current) {
      const t = state.clock.elapsedTime

      // Scroll-based transformations
      const scrollProgress = Math.min(scrollY / 1000, 1)
      const rotationY = scrollProgress * Math.PI * 0.4
      const positionX = scrollProgress * 1.5

      // Enhanced scroll direction response
      const directionMultiplier = scrollDirection === 'down' ? 1 : -0.3
      const scrollIntensity = isScrolling ? 1.2 : 1

      // Apply scroll-based rotation and movement with easing
      groupRef.current.rotation.y +=
        (rotationY - groupRef.current.rotation.y) * 0.05 * scrollIntensity
      groupRef.current.position.x +=
        (positionX - groupRef.current.position.x) * 0.05 * scrollIntensity

      // Enhanced floating animation that responds to scroll state
      const floatIntensity = (1 - scrollProgress * 0.6) * (isScrolling ? 0.5 : 1)
      phoneRef.current.position.y = Math.sin(t * 0.6) * 0.06 * floatIntensity

      // Dynamic tilt and lean based on scroll direction and speed
      const targetRotationX = Math.sin(scrollProgress * Math.PI) * 0.08 * directionMultiplier
      const targetRotationZ = scrollProgress * 0.04 * directionMultiplier

      phoneRef.current.rotation.x += (targetRotationX - phoneRef.current.rotation.x) * 0.08
      phoneRef.current.rotation.z += (targetRotationZ - phoneRef.current.rotation.z) * 0.08

      // Subtle scale animation when scrolling
      const targetScale = isScrolling ? 1.02 : 1
      phoneRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1)
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % portfolioApps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const currentApp = portfolioApps[currentScreen]
  const scrollProgress = Math.min(scrollY / 1000, 1)

  return (
    <group ref={groupRef} scale={[1, 1, 1]} position={[0, 0, 0]}>
      {/* Reflective ground plane */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#151515"
          metalness={0.5}
        />
      </mesh>

      <group ref={phoneRef}>
        {/* Phone Body - Premium iPhone-like design */}
        <RoundedBox args={[1.8, 3.8, 0.12]} radius={0.18} smoothness={12} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.95}
            roughness={0.05}
            envMapIntensity={2}
          />
        </RoundedBox>

        {/* Screen Bezel */}
        <RoundedBox
          args={[1.68, 3.68, 0.01]}
          radius={0.14}
          smoothness={12}
          position={[0, 0, 0.065]}
        >
          <meshStandardMaterial color="#000" />
        </RoundedBox>

        {/* Dynamic Screen Content */}
        <Html
          transform
          occlude="blending"
          position={[0, 0, 0.07]}
          style={{
            width: '200px',
            height: '420px',
            background: currentApp.color,
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
            padding: '24px 16px',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Status Bar */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '10px',
              opacity: 0.8,
              marginBottom: '20px',
            }}
          >
            <span>9:41</span>
            <span>100%</span>
          </div>

          {/* App Icon */}
          <div
            style={{
              fontSize: '42px',
              marginBottom: '16px',
              transform: `scale(${1 + scrollProgress * 0.2})`,
              transition: 'transform 0.3s ease',
            }}
          >
            {currentApp.icon}
          </div>

          {/* App Title */}
          <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px' }}>
            {currentApp.title}
          </div>
          <div style={{ fontSize: '11px', opacity: 0.8, marginBottom: '20px' }}>
            {currentApp.subtitle}
          </div>

          {/* Tech Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            {currentApp.tech.map((tech, index) => (
              <div
                key={tech}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '10px',
                  backdropFilter: 'blur(10px)',
                  transform: `translateY(${scrollProgress * (index + 1) * 5}px)`,
                  transition: 'transform 0.3s ease',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* App indicators */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '16px' }}>
            {portfolioApps.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: index === currentScreen ? 'white' : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.4s ease',
                  transform: `scale(${index === currentScreen ? 1.2 : 1})`,
                }}
              />
            ))}
          </div>
        </Html>

        {/* Dynamic Island */}
        <RoundedBox args={[0.28, 0.065, 0.02]} radius={0.032} position={[0, 1.65, 0.07]}>
          <meshStandardMaterial color="#000" />
        </RoundedBox>

        {/* Home indicator */}
        <RoundedBox args={[0.5, 0.06, 0.008]} radius={0.03} position={[0, -1.65, 0.07]}>
          <meshStandardMaterial color="#666" opacity={0.7} transparent />
        </RoundedBox>

        {/* Premium side frame details */}
        <RoundedBox args={[0.03, 0.25, 0.08]} radius={0.015} position={[-0.91, 0.4, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <RoundedBox args={[0.03, 0.12, 0.08]} radius={0.015} position={[-0.91, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <RoundedBox args={[0.03, 0.12, 0.08]} radius={0.015} position={[-0.91, -0.25, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </RoundedBox>
      </group>

      {/* Floating skill labels that respond to scroll */}
      <Text
        position={[2.5 + scrollProgress * 0.5, 1.2, 0]}
        fontSize={0.18}
        color="#22c55e"
        anchorX="left"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        React & Next.js
      </Text>
      <Text
        position={[2.5 + scrollProgress * 0.3, 0.7, 0]}
        fontSize={0.16}
        color="#3b82f6"
        anchorX="left"
        anchorY="middle"
      >
        TypeScript Expert
      </Text>
      <Text
        position={[2.5 + scrollProgress * 0.4, 0.2, 0]}
        fontSize={0.16}
        color="#8b5cf6"
        anchorX="left"
        anchorY="middle"
      >
        Mobile Development
      </Text>
      <Text
        position={[2.5 + scrollProgress * 0.6, -0.3, 0]}
        fontSize={0.16}
        color="#f59e0b"
        anchorX="left"
        anchorY="middle"
      >
        3D & WebGL
      </Text>
      <Text
        position={[2.5 + scrollProgress * 0.2, -0.8, 0]}
        fontSize={0.16}
        color="#ef4444"
        anchorX="left"
        anchorY="middle"
      >
        Full Stack
      </Text>
    </group>
  )
}
