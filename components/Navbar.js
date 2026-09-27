"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const linkClass = (href) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
      pathname === href ? "bg-accent text-black" : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="border-b border-white/10 bg-base-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg tracking-wide">
          <Dumbbell className="text-accent" size={22} />
          FITLOG
        </Link>

        <nav className="flex items-center gap-2 order-3 sm:order-2 w-full sm:w-auto justify-center">
          <Link href="/" className={linkClass("/")}>
            Workouts
          </Link>
          <Link href="/my-plan" className={linkClass("/my-plan")}>
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-4 text-sm order-2 sm:order-3">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-gray-300">Plan</span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-black text-xs font-bold">
              {plan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-gray-300">Saved</span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/30 text-white text-xs font-bold">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
