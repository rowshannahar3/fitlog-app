import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base-100 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 py-6 text-sm text-gray-400">
        <Link href="/" className="flex items-center gap-2 font-display text-white">
          <Dumbbell className="text-accent" size={18} />
          FITLOG
        </Link>
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}
