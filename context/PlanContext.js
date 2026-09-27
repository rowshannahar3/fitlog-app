"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);
const PLAN_CAP = 5;
const STORAGE_KEY = "fitlog-plan-data";

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load saved state from localStorage once, on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setPlan(Array.isArray(parsed.plan) ? parsed.plan : []);
        setSaved(Array.isArray(parsed.saved) ? parsed.saved : []);
      }
    } catch (err) {
      console.error("Failed to read FitLog data from localStorage", err);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist whenever plan/saved change (after the initial load).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ plan, saved }));
    } catch (err) {
      console.error("Failed to write FitLog data to localStorage", err);
    }
  }, [plan, saved, hydrated]);

  const isInPlan = (id) => plan.some((w) => w.id === id);
  const isInSaved = (id) => saved.some((w) => w.id === id);
  const isPlanFull = () => plan.length >= PLAN_CAP;

  const addToPlan = (workout) => {
    if (isInPlan(workout.id) || isPlanFull()) return false;
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    return true;
  };

  const addToSaved = (workout) => {
    if (isInSaved(workout.id)) return false;
    setSaved((prev) => [...prev, workout]);
    return true;
  };

  const removeFromPlan = (id) => setPlan((prev) => prev.filter((w) => w.id !== id));
  const removeFromSaved = (id) => setSaved((prev) => prev.filter((w) => w.id !== id));

  const toggleDone = (id) => {
    setPlan((prev) => prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w)));
  };

  const metrics = {
    exercises: plan.length,
    minutes: plan.reduce((sum, w) => sum + (Number(w.duration) || 0), 0),
    calories: plan.reduce((sum, w) => sum + (Number(w.caloriesBurned) || 0), 0),
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        hydrated,
        metrics,
        isInPlan,
        isInSaved,
        isPlanFull,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
        PLAN_CAP,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within a PlanProvider");
  return ctx;
}
