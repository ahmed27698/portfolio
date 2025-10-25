"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Skills() {
    type ImageUrl = { imageUrl: string; imageHref: string };
    const images: ImageUrl[] = [
        {
            imageUrl: "https://en.wikipedia.org/wiki/HTML5",
            imageHref: "html.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/CSS",
            imageHref: "css.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/JavaScript",
            imageHref: "javascript.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/TypeScript",
            imageHref: "typescript.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/Markdown",
            imageHref: "markdown.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/React_(software)",
            imageHref: "react.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/Next.js",
            imageHref: "next.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/Vite_(software)",
            imageHref: "vite.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/Tailwind_CSS",
            imageHref: "tailwind.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/Git",
            imageHref: "github.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/GitHub",
            imageHref: "git.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/MongoDB",
            imageHref: "mongo.svg",
        },
        {
            imageUrl: "https://en.wikipedia.org/wiki/Figma",
            imageHref: "figma.svg",
        },
        {
            imageUrl:
                "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
            imageHref: "bootstrap.svg",
        },
    ];
    return (
        <section className="flex justify-center items-center flex-col mt-25">
            <h2 className="text-3xl hover:scale-110 hover:text-sky-600 duration-800">
                Technologies
            </h2>
            <Marquee speed={100}>
                <div className="flex gap-6 my-10">
                    {images.map((image, index) => (
                        <Link
                            className="bg-white shadow p-3 rounded-full hover:bg-gray-400 hover:animate-spin"
                            href={image.imageUrl}
                            target="_blank"
                            key={index}
                        >
                            <Image
                                className="rounded-full h-15 w-15"
                                height={200}
                                width={200}
                                src={image.imageHref}
                                alt={`image ${index}`}
                            />
                        </Link>
                    ))}
                </div>
            </Marquee>
            
        </section>
    );
}
