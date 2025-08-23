"use client";

import { useEffect, useMemo, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, Math.round((y / max) * 100)) : 0;
      setProgress(pct);
      setVisible(y > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ringStyle = useMemo(
    () => ({
      background: `conic-gradient(#059669 ${progress}%, #e5e7eb ${progress}%)`,
    }),
    [progress]
  );

  if (!visible) return null;

  return (
    <button
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-5 right-5 z-[60]
        h-11 w-11 md:h-12 md:w-12
        rounded-full shadow-lg border
        border-emerald-400
        bg-white/90 backdrop-blur
        flex items-center justify-center
        hover:scale-110 active:scale-95
        transition-all duration-300
      "
    >
      {/* Progress ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full p-[3px]"
        style={ringStyle}
      >
        <span className="block h-full w-full rounded-full bg-white" />
      </span>

      {/* Icon panah ke atas */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-5 w-5 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
