import bannerImg from "@/assets/banner.png";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid md:grid-cols-2 gap-10 items-center bg-base-200 border border-white/10 rounded-2xl px-8 sm:px-12 py-10 sm:py-14">
                <div>
                    <p className="text-accent text-sm tracking-widest uppercase mb-3">
                        Workout Library
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl uppercase font-bold leading-tight mb-4">
                        Train With Intent. Log Every Set.
                    </h1>
                    <p className="text-gray-400 text-md mb-6 max-w-xl">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
                        today's plan, and watch the week's work add up.
                    </p>

                    <a href="#library"
                        className="inline-flex items-center gap-2 bg-accent text-black font-bold uppercase text-sm px-6 py-3 rounded-lg hover:brightness-95 transition">
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
