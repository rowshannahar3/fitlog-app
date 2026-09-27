"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, X, ChevronDown, Search } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

const SORT_OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export default function MyPlanPage() {
  const { plan, saved, metrics, hydrated, removeFromPlan, removeFromSaved, toggleDone } =
    usePlan();
  const { showToast } = useToast();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");
  const [search, setSearch] = useState("");

  // (e.g. clicking the Plan/Saved badges in the navbar).
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "saved") setActiveTab("saved");
    else if (tab === "plan" || tab === "today") setActiveTab("today");
  }, [searchParams]);

  const list = activeTab === "today" ? plan : saved;

  // Duration/Calories sort low -> high, Rating sorts high -> low.
  const sortedList = useMemo(() => {
    const copy = [...list];
    copy.sort((a, b) => {
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return (a[sortBy] || 0) - (b[sortBy] || 0);
    });
    return copy;
  }, [list, sortBy]);

  const filteredList = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return sortedList;
    return sortedList.filter(
      (w) =>
        w.name.toLowerCase().includes(term) ||
        w.muscleGroups?.some((tag) => tag.toLowerCase().includes(term))
    );
  }, [sortedList, search]);

  const handleRemove = (id) => {
    if (activeTab === "today") {
      removeFromPlan(id);
      showToast("Removed from today's plan", "remove");
    } else {
      removeFromSaved(id);
      showToast("Removed from saved", "remove");
    }
  };

  const handleMarkDone = (id) => {
    toggleDone(id);
    removeFromPlan(id);
    showToast("Marked as done", "success");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-display text-3xl uppercase font-bold mb-1">My Plan</h1>
      <p className="text-gray-400 mb-8">Cap of five lifts for today. Finish them, then load more.</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          ["Exercises", metrics.exercises],
          ["Minutes", metrics.minutes],
          ["Calories", metrics.calories],
        ].map(([label, value]) => (
          <div
            key={label}
            className="bg-base-200 border border-white/10 rounded-xl px-4 py-4 text-center sm:text-left"
          >
            <p className="text-xs uppercase text-gray-400">{label}</p>
            <p className="font-display text-2xl font-bold text-accent">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="inline-flex bg-base-200 border border-white/10 rounded-full p-1">
          {[
            ["today", "Today's Plan"],
            ["saved", "Saved"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTab === value ? "bg-white text-black" : "text-gray-400"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative w-full sm:w-56">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full bg-base-200 border border-white/10 rounded-full pl-8 pr-4 py-1.5 text-sm focus:outline-none focus:border-accent/50"
            />
          </div>

          <div className="inline-flex items-center gap-2 text-sm">
            <span className="text-gray-400">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-base-200 border border-white/10 rounded-full pl-4 pr-8 py-1.5 text-sm focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {!hydrated ? (
        <div className="text-center text-gray-400 py-20">Loading workouts…</div>
      ) : sortedList.length === 0 ? (
        <div className="text-center border border-white/10 rounded-xl py-20 px-4">
          <p className="font-display uppercase font-bold mb-2">Nothing Here Yet</p>
          <p className="text-gray-400 mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-flex bg-accent text-black font-bold text-sm px-6 py-2.5 rounded-full"
          >
            Go to workouts
          </Link>
        </div>
      ) : filteredList.length === 0 ? (
        <p className="text-gray-400 text-center py-16">No matches for &quot;{search}&quot;.</p>
      ) : (
        <div className="space-y-3">
          {filteredList.map((workout) => (
            <div
              key={workout.id}
              className="flex flex-col sm:flex-row items-center gap-4 bg-base-200 border border-white/10 rounded-xl p-4 text-center sm:text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={workout.image}
                alt={workout.name}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start">
                <p
                  className={`font-display uppercase font-bold ${workout.done ? "line-through text-gray-500" : ""
                    }`}
                >
                  {workout.name}
                </p>
                <p className="text-sm text-gray-400">{workout.equipment}</p>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-1 text-xs text-gray-400">
                  <span>{workout.duration} min</span>
                  <span>{workout.caloriesBurned} kcal</span>
                  <span>★ {workout.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Link
                  href={`/workouts/${workout.id}`}
                  className="text-sm border border-white/20 px-4 py-1.5 rounded-full hover:border-white"
                >
                  View Details
                </Link>
                {activeTab === "today" && (
                  <button
                    onClick={() => handleMarkDone(workout.id)}
                    className="inline-flex items-center gap-1 text-sm bg-accent text-black font-bold px-4 py-1.5 rounded-full"
                  >
                    <Check size={14} />
                    Mark as Done
                  </button>
                )}
                <button
                  onClick={() => handleRemove(workout.id)}
                  className="text-gray-400 hover:text-white p-1.5"
                  aria-label="Remove"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}