"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stage, Environment } from "@react-three/drei"
import * as THREE from "three"

function Propeller({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 20 // Spin speed
        }
    })

    return (
        <group position={position}>
            <mesh position={[0, 0.1, 0]} ref={meshRef}>
                <boxGeometry args={[1.2, 0.05, 0.1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0, 0.1, 0]} ref={meshRef} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[1.2, 0.05, 0.1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.2]} />
                <meshStandardMaterial color="#666" metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    )
}

function Drone() {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle hovering motion
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            {/* Central Body */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 0.3, 1.5]} />
                <meshStandardMaterial color="#0066cc" metalness={0.6} roughness={0.4} />
            </mesh>

            {/* Arms */}
            <mesh position={[0.8, 0, 0.8]} rotation={[0, Math.PI / 4, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                <meshStandardMaterial color="#888" />
            </mesh>
            <mesh position={[-0.8, 0, 0.8]} rotation={[0, -Math.PI / 4, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                <meshStandardMaterial color="#888" />
            </mesh>
            <mesh position={[0.8, 0, -0.8]} rotation={[0, -Math.PI / 4, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                <meshStandardMaterial color="#888" />
            </mesh>
            <mesh position={[-0.8, 0, -0.8]} rotation={[0, Math.PI / 4, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                <meshStandardMaterial color="#888" />
            </mesh>

            {/* Propellers */}
            <Propeller position={[1.2, 0.1, 1.2]} />
            <Propeller position={[-1.2, 0.1, 1.2]} />
            <Propeller position={[1.2, 0.1, -1.2]} />
            <Propeller position={[-1.2, 0.1, -1.2]} />
        </group>
    )
}

export function DroneModel() {
    return (
        <div className="h-[500px] w-full md:h-[600px]">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 5], fov: 50 }}>
                <Stage environment="city" intensity={0.6}>
                    <Drone />
                </Stage>
                <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
            </Canvas>
        </div>
    )
}
