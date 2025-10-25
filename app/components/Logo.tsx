"use client";
import { motion, useAnimation } from "motion/react";

export default function Logo() {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start({
      pathLength: 0,
      stroke: "#fff",
      transition: { duration: 0.5,  ease: "easeInOut" },
    });
    await controls.start({
      pathLength: 1,
      stroke: "#000",
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = async () => {
    await controls.start({
      pathLength: 0,
      stroke: "#000",
      transition: { duration: 0, ease: "easeInOut" },
    });
    await controls.start({
      pathLength: 1,
      stroke: "#fff",
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  return (
    <div
      className="p-3 bg-sky-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-red-600 hover:scale-110 transition-all transition-500"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.svg
        width="45"
        height="45"
        viewBox="0 0 123 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 42.7 75 L 54.1 5 L 69 5 L 80.4 75 L 69.4 75 L 67.4 61.1 L 67.4 61.3 L 54.9 61.3 L 52.9 75 L 42.7 75 Z M 100.1 80 L 100.1 71 L 101.7 71 Q 104.4 71 105.7 69.45 Q 107 67.9 107 63.9 L 107 48.9 Q 107 41.9 113.1 40.1 L 113.1 39.9 Q 107 38.1 107 31.1 L 107 16.1 Q 107 12.1 105.7 10.55 Q 104.4 9 101.7 9 L 100.1 9 L 100.1 0 L 105.7 0 Q 110.6 0 113.7 2.8 Q 116.8 5.6 116.8 11.1 L 116.8 29.5 Q 116.8 33 118.1 34.25 Q 119.4 35.5 123.1 35.5 L 123.1 44.5 Q 119.4 44.5 118.1 45.75 Q 116.8 47 116.8 50.5 L 116.8 68.9 Q 116.8 74.4 113.7 77.2 Q 110.6 80 105.7 80 L 100.1 80 Z M 6.3 68.9 L 6.3 50.5 Q 6.3 47 5 45.75 Q 3.7 44.5 0 44.5 L 0 35.5 Q 3.7 35.5 5 34.25 Q 6.3 33 6.3 29.5 L 6.3 11.1 Q 6.3 5.6 9.4 2.8 Q 12.5 0 17.4 0 L 23 0 L 23 9 L 21.4 9 Q 18.7 9 17.4 10.55 Q 16.1 12.1 16.1 16.1 L 16.1 31.1 Q 16.1 38.1 10 39.9 L 10 40.1 Q 16.1 41.9 16.1 48.9 L 16.1 63.9 Q 16.1 67.9 17.4 69.45 Q 18.7 71 21.4 71 L 23 71 L 23 80 L 17.4 80 Q 12.5 80 9.4 77.2 Q 6.3 74.4 6.3 68.9 Z M 56.2 51.8 L 66.1 51.8 L 61.2 17.2 L 61 17.2 L 56.2 51.8 Z"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 1, stroke: "#fff" }} 
          animate={controls}
          strokeWidth={2}
          fill="transparent"
        />
      </motion.svg>
    </div>
  );
}
