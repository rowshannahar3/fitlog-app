"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

export default function WorkoutActions({ workout }) {
  const { addToPlan, addToSaved, isInPlan, isInSaved, isPlanFull } = usePlan();
  const { showToast } = useToast();

  const inPlan = isInPlan(workout.id);
  const inSaved = isInSaved(workout.id);
  const planFull = isPlanFull();

  const handleAddToPlan = () => {
    if (inPlan) return;
    const added = addToPlan(workout);
    showToast(added ? "Added to today's plan" : "Today's plan is full (5 lifts max)");
  };

  const handleSave = () => {
    if (inSaved) return;
    addToSaved(workout);
    showToast("Saved for later");
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        disabled={inPlan || planFull}
        className="inline-flex items-center gap-2 bg-accent text-black font-bold text-sm px-5 py-2.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-95 transition"
      >
        <CalendarPlus size={16} />
        {inPlan ? "In Today's Plan" : "Add to today's plan"}
      </button>
      <button
        onClick={handleSave}
        disabled={inSaved}
        className="inline-flex items-center gap-2 border border-white/30 text-white font-bold text-sm px-5 py-2.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:border-white transition"
      >
        <Bookmark size={16} />
        {inSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
