"use client";

import { motion } from "motion/react";

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  const letters = children.split("");


  return (
    <motion.button className="flex items-center justify-center cursor-pointer">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
          transition={{ type: "spring", stiffness: 300 ,damping: 10 }}
          className="inline-block text-xl font-medium p-1"
        >
          {letter}
        </motion.span>
      ))}
    </motion.button>
  );
}
