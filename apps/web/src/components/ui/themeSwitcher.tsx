"use client";

import { HEADER_CONTENT } from "@/content/header";
import { useTheme } from "@/lib/useTheme";

export default function ThemeSwitcher() {
  const { pref, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="justify-self-end inline-flex items-center gap-0.5 rounded-full border border-brand-rule p-[3px] bg-transparent"
    >
      {HEADER_CONTENT.themeOptions.map((opt) => {
        const isActive = pref === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={opt.label}
            onClick={() => setTheme(opt.id)}
            className={`font-mono text-micro tracking-micro uppercase font-medium inline-flex items-center gap-1.5 h-[26px] px-[11px] rounded-full transition-colors duration-200 ${
              isActive
                ? "bg-brand-ink text-brand-bg"
                : "text-brand-muted hover:text-brand-ink-soft"
            }`}
          >
            <span aria-hidden className="text-[12px] leading-none tracking-normal">
              {opt.glyph}
            </span>
            <span className="max-md:hidden">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
