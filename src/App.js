import React, { useEffect, useState } from "react";
import { createNoise3D } from "simplex-noise";

const CanvasAnimation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [numX, setNumX] = useState(width / 20);
  const [numY, setNumY] = useState(height / 20);
  const [numDots, setNumDots] = useState(numX * numY);
  const canvasRef = React.useRef(null);
  const noise3D = createNoise3D();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const xGap = 20;
    const yGap = 20;
    const halfXGap = xGap / 2;
    const halfYGap = yGap / 2;

    canvas.width = width;
    canvas.height = height;

    const drawDot = (i, t) => {
      const x = i % numX;
      const y = Math.floor(i / numX);
      const noiseX = noise3D(x / 8, y / 10, t);
      const noiseY = noise3D(x / 8, y / 10, t);
      const xPos = halfXGap + x * xGap + noiseX * xGap * 0.5;
      const yPos = halfYGap + y * yGap + noiseY * yGap * 0.5;

      context.moveTo(xPos, yPos);
      context.arc(xPos, yPos, noiseX * 1 + 2, 0, 2 * Math.PI);
    };

    const drawDots = () => {
      context.fillStyle = "#e81cffac";
      const t = new Date().getTime() / 5000;
      context.beginPath();
      for (let i = 0; i < numDots; i++) {
        drawDot(i, t);
      }
      context.fill();
    };

    const render = () => {
      context.fillStyle = "#000";
      context.fillRect(0, 0, width, height);
      drawDots();
      window.requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setNumX(width / 20);
      setNumY(height / 20);
      setNumDots(numX * numY);
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height, numX, numY, numDots, noise3D]);

  return <canvas ref={canvasRef} className="canvas-background" />; // Добавляем класс для стилизации фона
};

export default CanvasAnimation;
