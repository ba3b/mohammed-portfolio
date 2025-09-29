'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import { PhoneModel } from './phone-model'
import { useScroll } from '@/hooks/use-scroll'

export function PhoneMockup3D() {
  const { scrollY, scrollDirection, isScrolling } = useScroll()

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{
          background: 'transparent',
          pointerEvents: 'none', // Allow scroll events to pass through
        }}
      >
        <Suspense fallback={null}>
          {/* Enhanced Environment */}
          <Environment preset="city" background={false} />

          {/* Professional Lighting Setup */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 8]}
            intensity={2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            shadow-bias={-0.0001}
          />

          {/* Accent lights for visual appeal */}
          <pointLight position={[-8, -8, -3]} intensity={0.8} color="#3b82f6" />
          <pointLight position={[8, 8, 3]} intensity={0.6} color="#22c55e" />
          <spotLight
            position={[0, 12, 8]}
            intensity={1.2}
            angle={0.6}
            penumbra={1}
            castShadow
            color="#ffffff"
            distance={25}
          />

          {/* Enhanced Phone Model with scroll props */}
          <PhoneModel
            scrollY={scrollY}
            scrollDirection={scrollDirection}
            isScrolling={isScrolling}
          />

          {/* Professional Contact Shadows */}
          <ContactShadows
            position={[0, -2.8, 0]}
            opacity={0.6}
            scale={12}
            blur={3}
            far={6}
            resolution={512}
          />

          {/* Subtle fog for depth and atmosphere */}
          <fog attach="fog" args={['#0a0a0a', 15, 25]} />
        </Suspense>
      </Canvas>

      {/* Scroll progress indicator */}
      <div className="absolute top-4 right-4 flex flex-col items-end gap-2 text-xs text-muted-foreground/60 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <span>Scroll Progress</span>
          <div className="w-16 h-1 bg-muted/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${Math.min((scrollY / 1000) * 100, 100)}%` }}
            />
          </div>
        </div>
        {isScrolling && (
          <div className="flex items-center gap-1 text-green-400/80">
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px]">Interactive</span>
          </div>
        )}
      </div>
    </div>
  )
}
