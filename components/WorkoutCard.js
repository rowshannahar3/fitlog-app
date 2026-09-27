import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block bg-base-200 border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
    >
      <div className="h-48 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={workout.image} alt={workout.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {workout.muscleGroups?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-accent text-black text-xs font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg uppercase tracking-wide">{workout.name}</h3>
        <p className="text-sm text-gray-400 mt-1">{workout.equipment}</p>
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10 text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-accent" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
