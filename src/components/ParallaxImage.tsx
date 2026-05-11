"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div
      ref={ref}
      className="overflow-hidden"
    >
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}