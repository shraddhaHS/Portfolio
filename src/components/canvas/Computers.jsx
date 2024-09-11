import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import canvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf') 
  return (
    <mesh>
      <hemisphereLight intensity={2.25} groundColor="black"/>
      <pointLight position={[-0.6,-0.7,-0.5]} intensity={2} />
      <spotLight
        position={[10, 15, 10]}  // Move the light closer
        angle={0.3}  // Widen the angle
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={ isMobile? 0.7 : 0.75}
        position={isMobile? [0,-2.5,-2.2] :[0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />

    </mesh>
  )
}
const ComputersCanvas = () => {

  const [isMobile,setIsMobile] = useState(false);

  useEffect(()=>{

    const mediaQuery = window.matchMedia('(max-width:500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return ()=> {
mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  })
  return(
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov: 25}}
    gl = {{preserveDrawingBuffer:true}}>
     
     <Suspense>
      <OrbitControls 
      enableZoom={false}
      maxPolarAngle={Math.PI / 2} 
      minPolarAngle={Math.PI / 2} 
      />
      <Computers isMobile = {isMobile} />
     </Suspense>
     <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas