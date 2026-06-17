"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ShimmerParticle {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  blur: number;
  sway: number[];
}

export default function DustParticles() {
  const [list, setList] = useState<ShimmerParticle[]>([]);

  useEffect(() => {
    const tones = [
      "rgba(212, 175, 55, 0.55)",  // Gold Shimmer
      "rgba(226, 232, 240, 0.45)", // Platinum Silver Spark
      "rgba(209, 108, 61, 0.50)",  // Warm Copper Spark
    ];
    
    const particles = Array.from({ length: 45 }).map((_, i) => {
      const size = Math.random() * 3.5 + 1.5;
      const swayDirection = Math.random() > 0.5 ? 1 : -1;
      
      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100 + 10,
        size: parseFloat(size.toFixed(1)),
        color: tones[Math.floor(Math.random() * tones.length)],
        duration: Math.random() * 9 + 7,
        delay: Math.random() * -12, // Negative delay prevents sync bursts on mount
        blur: size > 3.5 ? 1 : 0,
        sway: [0, (Math.random() * 40 + 20) * swayDirection, (Math.random() * 20 - 10)],
      };
    });
    const frameId = requestAnimationFrame(() => {
      setList(particles);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {list.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: p.color,
            filter: p.blur > 0 ? `blur(${p.blur}px)` : "none",
            boxShadow: p.size > 3.5 ? `0 0 8px ${p.color}` : "none",
          }}
          animate={{
            y: [0, -320],
            x: p.sway,
            opacity: [0, 0.7, 0.4, 0],
            scale: [0.6, 1.2, 0.9, 0.4],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}