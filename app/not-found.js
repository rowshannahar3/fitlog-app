import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center gap-4">
      <h1 className="font-display text-6xl font-bold text-accent">404</h1>
      <h2 className="font-display text-2xl uppercase">Page Not Found</h2>
      <p className="text-gray-400 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 bg-accent text-black font-bold uppercase text-sm px-6 py-3 rounded-full hover:brightness-95 transition"
      >
        Go to workouts
      </Link>
    </div>
  );
}
