import TypedText from "./TypedHeader";

export default function Hero() {
    return (
        <div className="lg:px-24 md:px-16 px-4 mt-25  flex flex-col justify-center items-center gap-6">
            <TypedText />
            <h2 className="text-lg py-2 hover:scale-105 hover:text-gray-300 duration-800">
                I design and code beautifully simple things, and I love what I
                do.
            </h2>
        </div>
    );
}
