import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import DamagedHelmet from "./DamagedHelmet";
import CanvasLoader from "./CanvasLoader";
import { Suspense } from "react";

const SceneCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas shadows>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <DamagedHelmet
            scale={10}
            position={[0, 0, 0]}
            rotation={[20.5, 0, 0]}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />

          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/moonless_golf_4k.hdr"
            background={true}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
