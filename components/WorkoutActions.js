"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

export default function WorkoutActions({ workout }) {
  const { addToPlan, addToSaved, isInPlan, isInSaved, isPlanFull } = usePlan();
  const { showToast } = useToast();

  const inPlan = isInPlan(workout.id);
  const inSaved = isInSaved(workout.id);

  const handleAddToPlan = () => {
    if (inPlan) {
      showToast("Already added to your plan", "warning");
      return;
    }
    const added = addToPlan(workout);
    showToast(
      added ? "Added to today's plan" : "Today's plan is full (5 lifts max)",
      added ? "success" : "warning"
    );
  };

  const handleSave = () => {
    if (inSaved) {
      showToast("Already saved", "warning");
      return;
    }
    addToSaved(workout);
    showToast("Saved for later", "success");
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        className="inline-flex items-center gap-2 bg-accent text-black font-bold text-sm px-5 py-2.5 rounded-full hover:brightness-95 transition"
      >
        <CalendarPlus size={16} />
        {inPlan ? "In Today's Plan" : "Add to today's plan"}
      </button>
      <button
        onClick={handleSave}
        className="inline-flex items-center gap-2 border border-white/30 text-white font-bold text-sm px-5 py-2.5 rounded-full hover:border-white transition"
      >
        <Bookmark size={16} />
        {inSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}