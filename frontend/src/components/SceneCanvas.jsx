import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import DamagedHelmet from "./DamagedHelmet";
import CanvasLoader from "./CanvasLoader";
import { Suspense, useRef } from "react";
import gsap from "gsap";

const SceneCanvas = () => {
  const modelRef = useRef();

  const handleMouseMove = (e) => {
    // Define Xval and Yval using let or const
    const Xval = (e.clientX / window.innerWidth - 0.5) * Math.PI;
    const Yval = (e.clientY / window.innerHeight - 0.5) * Math.PI;

    // Animate the model's rotation using gsap
    gsap.to(modelRef.current.rotation, {
      x: Yval*0.2,
      y: Xval*0.4,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      className="w-full h-full absolute inset-0"
      onMouseMove={handleMouseMove}
    >
      <Canvas shadows>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          {/* Ensure DamagedHelmet can receive the ref */}
          <DamagedHelmet ref={modelRef} scale={13} position={[0, 2, 0]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/moonless_golf_4k.hdr"
            background={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
