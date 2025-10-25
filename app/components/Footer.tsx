import Link from "next/link";
import Logo from "./Logo";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
    return (
        <div className="flex justify-center flex-col py-15 items-center">
            <Logo />
            <p className="text-center py-3 hover:scale-105 hover:text-gray-300 duration-800">©Created in 2025.</p>
            <div>
                <div className="flex gap-3">
                    <div className="p-2 bg-sky-600 rounded-full flex justify-center items-center hover:scale-110 transition-all transition-500 hover:bg-red-600">
                        <Link target="_blank" href="https://www.linkedin.com/in/ahmed-samir-ab5566223/">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className="p-2 bg-sky-600 rounded-full flex justify-center items-center hover:scale-110 transition-all transition-500 hover:bg-red-600">
                        <Link target="_blank" href="https://github.com/ahmed27698">
                            <FaGithub />
                        </Link>
                    </div>
                    <div className="p-2 bg-sky-600 rounded-full flex justify-center items-center hover:scale-110 transition-all transition-500 hover:bg-red-600">
                        <Link target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedsamir7685@gmail.com">
                            <MdOutlineMailOutline />
                        </Link>
                    </div>
                    <div className="p-2 bg-sky-600 rounded-full flex justify-center items-center hover:scale-110 transition-all transition-500 hover:bg-red-600">
                        <Link target="_blank" href="https://github.com/ahmed27698">
                            <FaUpwork />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
