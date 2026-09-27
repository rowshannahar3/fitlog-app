export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-4">
      <span className="loading loading-spinner loading-lg text-accent"></span>
      <p className="text-gray-400">Loading workouts…</p>
    </div>
  );
}
