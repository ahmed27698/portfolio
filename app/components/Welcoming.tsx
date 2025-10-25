"use client";

import { motion } from "motion/react";

export default function Welcoming() {
    return (
        <div className="lg:px-24 md:px-16 px-4 mt-15 flex justify-center">
            <motion.div
                whileHover={{
                    transition: {
                        stiffness: 500,
                        type: "spring",
                        damping: 10,
                    },
                    scale: 1.3,
                }}
                className="rounded-full mt-15 p-25 bg-sky-600 relative flex justify-center items-center group"
            >
                <motion.img
                    src="/profile.png"
                    alt="profile image"
                    className="absolute group-hover:brightness-90"
                    initial={{  y: -17 , x: -3 }}
                />
            </motion.div>
        </div>
    );
}
