import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import DamagedHelmet from "./DamagedHelmet";
import CanvasLoader from "./CanvasLoader";
import { Suspense, forwardRef, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const SceneCanvas = forwardRef((props, ref) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="w-full h-full absolute inset-0 z-[2]">
      <Canvas shadows>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <DamagedHelmet
            ref={ref}
            scale={isMobile ? 10 : 13}
            position={[0, 2, 0]}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/moonless_golf_4k.hdr"
            background={false}
          />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
});

export default SceneCanvas;
