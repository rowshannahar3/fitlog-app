import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import { getAllWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getAllWorkouts();

  return (
    <>
      <Hero />
      <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 scroll-mt-20">
        <h2 className="font-display text-3xl uppercase font-bold mb-2">The Library</h2>
        <p className="text-gray-400 mb-8">Twelve lifts covering every major muscle group.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </>
  );
}
