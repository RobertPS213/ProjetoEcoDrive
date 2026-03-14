"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Começa invisível e um pouco abaixo
      animate={{ opacity: 1, y: 0 }}   // Sobe e aparece
      exit={{ opacity: 0, y: -10 }}    // Sai sumindo e subindo
      transition={{ ease: "easeInOut", duration: 0.5 }} // Velocidade da transição
    >
      {children}
    </motion.div>
  );
}