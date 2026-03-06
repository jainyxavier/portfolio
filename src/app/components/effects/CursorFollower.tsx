"use client"

import { useEffect, useState } from "react";
import type { ThemeValue } from "@/app/types/theme";

interface CursorFollowerProps {
  selectedTheme: ThemeValue;
}

export default function CursorFollower({ selectedTheme }: CursorFollowerProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!position) return null;

  const gradient =
    selectedTheme === "dark"
      ? "radial-gradient(500px, rgba(36, 77, 187, 0.15), transparent 70%)"
      : "radial-gradient(500px, rgba(255, 255, 255, 0.15), transparent 70%)";

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[999] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute w-[785px] h-[785px] rounded-full pointer-events-none"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: "translate(-50%, -50%)",
          background: gradient,
          opacity: 1,
        }}
      />
    </div>
  );
}
