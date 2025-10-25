"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutMe() {
    const text = `A passionate Front-End Developer who enjoys exploring new
  technologies and transforming ideas into interactive,
  responsive, and creative web experiences. I graduated with a
  Diploma in Front-End Development from New Horizon Institute,
  one of the best institutes in Egypt, where I learned under
  top academic instructors. Since then, I’ve built several
  projects including two landing pages and a full website
  using JavaScript, TypeScript, React, Bootstrap, and Tailwind
  CSS. To enhance my front-end skills, I’ve explored advanced
  tools like shadcn, Framer Motion, and Swiper to create
  modern animations and improve user experience. I also
  expanded my knowledge into the backend by learning Next.js,
  Prisma, and MongoDB, building a complete e-commerce website
  with a connected backend and a portfolio. I’m currently
  self-learning WordPress and Framer, and in the near future,
  I plan to study Flutter to dive into mobile app development.
  I’m always eager to learn new technologies, challenge
  myself, and grow as a developer who can build both beautiful
  and efficient web solutions.`;
    const h1text = `About Me`;
    return (
        <div className=" flex flex-col justify-center items-center">
            <div>
                <Image
                    className="mt-25"
                    src="/section_two.png"
                    alt="profile image"
                    height={570}
                    width={438}
                    priority
                />
            </div>
            <div className="bg-sky-500 py-15 flex flex-col justify-center items-center w-full">
                <h1 className="font-bold text-5xl">
                    {h1text.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.5, color: "red" , textShadow: "skyblue 0px 0px 10px" }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 10,
                            }}
                            style={{
                                display: "inline-block",
                                marginRight: "6px",
                                paddingLeft:"15px"
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
                <h2 className="text-xl px-4 md:px-10 xl:px-15 mt-7 leading-relaxed flex flex-wrap ">
                    {text.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.1, color: "red" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                            }}
                            style={{
                                display: "inline-block",
                                marginRight: "6px",
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h2>
            </div>
        </div>
    );
}
