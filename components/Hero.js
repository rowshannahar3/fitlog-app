import { Dumbbell } from "lucide-react";
import bannerImg from "../assets/banner.png";
export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">
                    Workout Library
                </p>
                <h1 className="font-display text-4xl sm:text-5xl uppercase font-bold leading-tight mb-4">
                    Train With Intent. Log Every Set.
                </h1>
                <p className="text-gray-400 mb-6 max-w-md">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
                    today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <a
                    href="#library"
                    className="inline-flex items-center gap-2 bg-accent text-black font-bold uppercase text-sm px-6 py-3 rounded-full hover:brightness-95 transition"
                >
                    <Dumbbell size={18} />
                    Browse Workouts
                </a>
            </div>
            <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                

                <img
                    src={bannerImg.src}
                    alt="FitLog hero"
                    className="rounded-2xl max-h-80 w-full object-cover"
                />
            </div>
        </section>
    );
}
