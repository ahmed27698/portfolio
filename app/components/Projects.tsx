import Link from "next/link";
import ProjectsCards from "./ProjectsCards";

export default function Projects() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center my-10">
                <p className="font-bold text-3xl hover:scale-110 hover:text-sky-600 duration-800">
                    My Recent Work
                </p>

                <p className="font-semibold text-xl flex flex-col px-4 sm:flex-row justify-center items-center gap-2">
                    Here are a few past design projects I&apos;ve worked on. Want to
                    see more?
                    <Link
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedsamir7685@gmail.com"
                        target="_blank"
                        className="self-start hover:scale-110 hover:text-sky-600 duration-800"
                    >
                        Email Me.
                    </Link>
                </p>
            </div>
            <ProjectsCards />
        </div>
    );
}
