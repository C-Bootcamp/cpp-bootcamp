import React, { useRef } from "react";
import SceneCanvas from "../components/SceneCanvas";
import Navbar from "../components/Navbar";

const FirstPage = () => {
  const modelRef = useRef();

  const handleMouseMove = (e) => {
    const Xval = (e.clientX / window.innerWidth - 0.5) * Math.PI;
    const Yval = (e.clientY / window.innerHeight - 0.5) * Math.PI;

    // Animate the model's rotation using gsap
    gsap.to(modelRef.current.rotation, {
      x: Yval * 0.2,
      y: Xval * 0.4,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  return (
    <div className="w-full h-screen relative">
      <Navbar />
      <SceneCanvas />
      <img
        src="https://i.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=1920&format=png&auto=webp&s=f42dbd8f5c04aedb9ba9291c1ba4d679029cc1f3"
        alt=""
        className="absolute w-full h-screen top-1/2 left-1/2 z-[11]  -translate-x-1/2 -translate-y-1/2 mix-blend-screen scale-x-80 filter saturate-150 contrast-125"
      />
    </div>
  );
};

export default FirstPage;
