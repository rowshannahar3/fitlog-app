import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetailPage({ params }) {
  let workout = null;

  try {
    workout = await getWorkoutById(params.id);
  } catch (err) {
    workout = null;
  }

  if (!workout || workout.error || !workout.name) {
    notFound();
  }

  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="rounded-2xl overflow-hidden h-72 md:h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={workout.image} alt={workout.name} className="w-full h-full object-cover" />
      </div>

      <div>
        <h1 className="font-display text-3xl uppercase font-bold mb-2">{workout.name}</h1>
        <p className="text-gray-400 mb-4">{workout.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {workout.muscleGroups?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-accent text-black text-xs font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-base-200 border border-white/10 rounded-xl divide-y divide-white/10 mb-6">
          {specs.map(([label, value]) => (
            <div key={label} className="flex justify-between px-4 py-2.5 text-sm">
              <span className="text-gray-400 uppercase tracking-wide">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <h3 className="font-display text-lg uppercase font-bold mb-3">Instructions</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-8">
          {workout.instructions?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <WorkoutActions workout={workout} />
      </div>
    </div>
  );
}
