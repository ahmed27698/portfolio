"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Button from "./ProjectsCardsButton";

interface Project {
    title: string;
    description: string;
    link: string;
    img: string;
}

export default function ProjectsCards() {
    const projects: Project[] = [
        {
            title: "organic food",
            description: `A modern e-commerce platform designed to promote and sell organic food products. Built with Next.js, Tailwind CSS, and shadcn/ui, it provides a smooth and responsive user experience. The project integrates MongoDB for product storage and Prisma for secure user management.
With next-intl, the website supports five languages — Arabic, Spanish, English, French, and Chinese — ensuring accessibility for a global audience.`,
            link: "https://organic-food-swart.vercel.app/en",
            img: "/organicfood.png",
        },
        {
            title: "iLanding",
            description:
                "A clean and responsive landing page built to showcase modern UI design. Features a simple layout, clear typography, and interactive elements to enhance user experience. Fully adaptable to different screen sizes and devices.",
            link: "https://i-landing-gules.vercel.app/",
            img: "/ilanding.png",
        },
        {
            title: "land wind",
            description: `LandWind is a clean and responsive landing page designed for digital products and modern businesses. It features a professional layout with sections for company introduction, tools integration, pricing plans, and FAQs.
Built using Next.js and Tailwind CSS, the website focuses on clarity, performance, and an elegant user interface that adapts perfectly across all devices.`,
            link: "https://land-wind-blond.vercel.app/",
            img: "/landwind.png",
        },
    ];

    return (
        <div className="flex justify-center items-center gap-5 px-4 lg:px-24 md:px-16">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
}

// مكون منفصل لكل كارت
function ProjectCard({ project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useTransform(y, [0, 1], [10, -10]);
    const rotateY = useTransform(x, [0, 1], [-10, 10]);

    const springX = useSpring(rotateX, {
        stiffness: 200,
        damping: 10,
    });
    const springY = useSpring(rotateY, {
        stiffness: 200,
        damping: 10,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const posX = (e.clientX - rect.left) / rect.width;
        const posY = (e.clientY - rect.top) / rect.height;
        x.set(posX);
        y.set(posY);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
            }}
            className="shadow-[0_0_30px] shadow-sky-500 rounded-xl cursor-pointer bg-sky-600 text-white w-64 h-80 flex flex-col justify-between"
        >
            <div className="bg-sky-700 rounded-t-xl relative overflow-hidden w-full h-48">
                <motion.img
                    src={project.img}
                    alt={project.title}
                    className="rounded-lg w-full h-full object-cover"
                    whileHover={{ filter: "brightness(0.1)" }}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute overflow-auto inset-0 flex items-center justify-center flex-wrap text-white p-4 text-center bg-black/100 rounded-lg"
                >
                    {project.description
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                className="hover:text-red-500 ml-2"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        stiffness: 250,
                                        damping: 10,
                                        type: "spring",
                                    },
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                </motion.div>
            </div>

            <div className="flex justify-between items-center p-5">
                <motion.h2
                    whileHover={{
                        transition: {
                            stiffness: 500,
                            damping: 3,
                            type: "spring",
                        },
                        scale: 1.2,
                    }}
                    className="hover:text-red-500"
                >
                    {project.title}
                </motion.h2>
                <Link href={project.link} target="_blank">
                    <Button>Visit</Button>
                </Link>
            </div>
        </motion.div>
    );
}