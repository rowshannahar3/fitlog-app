import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import { PlanProvider } from "@/context/PlanContext";
import { ToastProvider } from "@/context/ToastContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense gym companion to plan and log your workouts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="fitlog">
      <body
        className={`${oswald.variable} ${inter.variable} font-body bg-base-100 text-white min-h-screen flex flex-col`}
      >
        <PlanProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </PlanProvider>
      </body>
    </html>
  );
}
