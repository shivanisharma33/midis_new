import { useEffect, useRef } from "react";

export const CurlyCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Disable on mobile / touch devices
    if ("ontouchstart" in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    /* ===============================
       CURSOR PARAMETERS
    =============================== */
    const params = {
      pointsNumber: 40,
      spring: 0.4,
      friction: 0.5,
      lineWidth: 2,
    };

    const pointer = {
      x: width / 2,
      y: height / 2,
    };

    const trail: {
      x: number;
      y: number;
      dx: number;
      dy: number;
    }[] = [];

    for (let i = 0; i < params.pointsNumber; i++) {
      trail.push({
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      });
    }

    /* ===============================
       ANIMATION LOOP
    =============================== */
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      let prev = pointer;

      trail.forEach((point, index) => {
        const spring = index === 0 ? params.spring * 0.45 : params.spring;

        point.dx += (prev.x - point.x) * spring;
        point.dy += (prev.y - point.y) * spring;

        point.dx *= params.friction;
        point.dy *= params.friction;

        point.x += point.dx;
        point.y += point.dy;

        prev = point;
      });

      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
      }

      ctx.strokeStyle = "rgba(255,255,255,0.85)";
      ctx.lineWidth = params.lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    /* ===============================
       EVENTS
    =============================== */
    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};
