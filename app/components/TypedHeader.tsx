"use client";

import {motion} from "motion/react";

export default function TypedText() {
    const mainText =`Blending motion & code to make ideas real.`

    return (
        <h1 className="flex items-center justify-center font-bold flex-wrap text-5xl">
            {mainText.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 , y: -50 }}
                    animate={{ opacity: 1 , y: 0 }}
                    transition={{ delay: index * 0.4  , ease: "easeInOut" }}
                    whileHover={{ scale:1.13,  transition:{stiffness:500 , damping:10 , type:"spring"}}}
                    className="ml-4 hover:text-red-600"
                >
                    {word}
                </motion.span>
            ))}
        </h1>
    );
}
