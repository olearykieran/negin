"use client";

import React, { useRef, useEffect } from "react";

interface FilmGrainProps {
  alpha?: number;
  scaleX?: number;
  scaleY?: number;
  refreshInterval?: number;
  patternSize?: number;
}

export default function FilmGrain({
  alpha = 25,
  scaleX = 3,
  scaleY = 1,
  refreshInterval = 4,
  patternSize = 64,
}: FilmGrainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animId: number;

    const pixelDataLength = patternSize * patternSize * 4;
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const patternCtx = patternCanvas.getContext("2d")!;
    const patternData = patternCtx.createImageData(patternSize, patternSize);

    function resize() {
      canvas!.width = canvas!.clientWidth;
      canvas!.height = canvas!.clientHeight;
      ctx!.scale(scaleX, scaleY);
    }

    function update() {
      for (let i = 0; i < pixelDataLength; i += 4) {
        const value = (Math.random() * 255) | 0;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = alpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = ctx!.createPattern(patternCanvas, "repeat")!;
      ctx!.fillRect(0, 0, w, h);
    }

    function loop() {
      if (++frame % refreshInterval === 0) {
        update();
        draw();
      }
      animId = requestAnimationFrame(loop);
    }

    resize();
    loop();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [alpha, scaleX, scaleY, refreshInterval, patternSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
