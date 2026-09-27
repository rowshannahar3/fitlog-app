"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const ToastContext = createContext(null);

const ICONS = {
  success: { Icon: CheckCircle2, color: "text-accent" },
  remove: { Icon: XCircle, color: "text-red-400" },
  warning: { Icon: AlertTriangle, color: "text-amber-400" },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const counterRef = useRef(0);

  const showToast = useCallback((message, type = "success") => {
    counterRef.current += 1;
    const id = counterRef.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 items-end">
        {toasts.map((t) => {
          const { Icon, color } = ICONS[t.type] || ICONS.success;
          return (
            <div
              key={t.id}
              className="flex items-center gap-2 bg-neutral text-white border border-white/10 shadow-lg rounded-lg px-4 py-3 text-sm"
            >
              <Icon size={16} className={color} />
              {t.message}
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}