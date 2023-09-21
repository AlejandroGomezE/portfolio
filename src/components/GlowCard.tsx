'use client';
import clsx from 'clsx';
import { motion, useMotionTemplate, useMotionValue, useTransform, type MotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Glow({ mouseX, mouseY, height, className }: { mouseX: MotionValue<number>; mouseY: MotionValue<number>; height: MotionValue<number>; className: string }) {
  let maskImage = useMotionTemplate`radial-gradient(${height.get() * 2}px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div className={clsx('absolute inset-0 bg-gradient-to-r blur-lg opacity-0 transition duration-700 group-hover:opacity-20', className)} style={style} />
    </div>
  );
}

export default function GlowCard({ children, className }: { children: React.ReactNode; className: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const width = useMotionValue(600);
  const height = useMotionValue(200);
  const rotateX = useTransform(mouseY, [0, height.get()], [-1, 1]);
  const rotateY = useTransform(mouseX, [0, width.get()], [1.5, -1.5]);

  const containerRef = useRef<null | HTMLDivElement>(null);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    if (!containerRef.current) return;
    width.set(containerRef.current.clientWidth);
    height.set(containerRef.current.clientHeight);
  }, [width, height]);

  const transform = useMotionTemplate`perspective(200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const style = {
    transform,
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={onMouseMove}
      style={style}
      className="group overflow-hidden relative rounded-2xl border border-gray-500/20 bg-gray-500/10 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 select-none"
    >
      <Glow mouseX={mouseX} mouseY={mouseY} height={height} className={className} />
      <div className="p-12 relative z-10">{children}</div>
    </motion.div>
  );
}
