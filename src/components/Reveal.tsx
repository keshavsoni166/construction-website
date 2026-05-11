"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}