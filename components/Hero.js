import { Dumbbell } from "lucide-react";
import bannerImg from "@/assets/banner.png";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid md:grid-cols-3 gap-10 items-center bg-base-200 border border-white/10 rounded-2xl px-8 sm:px-12 py-10 sm:py-14">
                <div className="md:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
                    <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">
                        Workout Library
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl uppercase font-bold leading-tight mb-4">
                        Train With Intent. Log Every Set.
                    </h1>
                    <p className="text-sm text-gray-400 mb-6 max-w-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
                        today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <a href="#library"
                        className="inline-flex items-center gap-2 bg-accent text-black font-bold uppercase text-sm px-6 py-3 rounded-lg hover:brightness-95 transition"
                    >
                        Browse Workouts
                    </a>
                </div>

                <div className="flex justify-center md:justify-end items-end h-full">
                    <img
                        src={bannerImg.src}
                        alt="FitLog hero"
                        className="max-h-64 sm:max-h-80 w-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}