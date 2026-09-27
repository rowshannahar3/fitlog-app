import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base-100 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 py-6 text-sm text-gray-400">
        <Link href="/" className="flex items-center gap-2 font-display text-white">
          <Image src={logoImg} alt="FitLog logo" width={24} height={24} className="w-6 h-6" />
          FITLOG
        </Link>
        <p className="text-xs text-gray-500">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}
