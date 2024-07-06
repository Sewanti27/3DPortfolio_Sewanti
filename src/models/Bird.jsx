import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";
const Bird=()=>{
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //Updating the y position to have a bird-like motion using a sine wave by increasing the time
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    //Checking if the bird have reached the end point relative to camera
    if (birdRef.current.position.x > camera.position.x + 10) {
        //then change the direction of the bird backward by rotating it 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
        //change the direction to forward and reset the rotation of the bird.
      birdRef.current.rotation.y = 0;
    }
    //Updating the x and z position based on the direction
    if (birdRef.current.rotation.y === 0) {
        //The bird will be moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
        //The bird will be moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}
export default Bird;