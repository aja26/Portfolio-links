// React Three Fiber Imports
import { Canvas, useFrame } from '@react-three/fiber';

export default function Home(){
    return <>

    <h1>Home</h1>

    {/* three.js canvas */}
            <div style={{ width: '100vw', height: '100vh' }}>
                <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                    <Box />
                    <Box2 />
                    <Box3 />
                    <Sphere />
                </Canvas>
            </div>
     
      
    </>


function Box() {

  return (
    <mesh rotation={[0.75, 0.5, 1]}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

function Box2() {

  return (
    <mesh position={[1, 1.65, -1]} rotation={[0.4, 0.65, 0]}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

function Box3() {

  return (
    <mesh position={[-2.5, 2.4, -3.5]} rotation={[-0.4, -0.15, 1.4]}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

function Sphere() {

  return (
    <mesh position={[0, 5, -5.7]} rotation={[-2.4, -1.5, 1.4]}>
      <sphereGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}
}