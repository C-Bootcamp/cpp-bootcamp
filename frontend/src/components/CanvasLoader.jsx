import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader">
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
