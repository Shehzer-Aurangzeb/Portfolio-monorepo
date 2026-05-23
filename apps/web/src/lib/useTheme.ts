"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

import type { ThemePref } from "@/content/header";

export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme-pref";

const isValidPref = (v: unknown): v is ThemePref =>
  v === "light" || v === "dark" || v === "system";

function subscribeToPref(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function getPrefSnapshot(): ThemePref {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isValidPref(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function getPrefServerSnapshot(): ThemePref {
  return "system";
}

function subscribeToSystem(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSystemSnapshot(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getSystemServerSnapshot(): ResolvedTheme {
  return "light";
}

export function useTheme() {
  const pref = useSyncExternalStore(
    subscribeToPref,
    getPrefSnapshot,
    getPrefServerSnapshot,
  );
  const systemTheme = useSyncExternalStore(
    subscribeToSystem,
    getSystemSnapshot,
    getSystemServerSnapshot,
  );

  const resolved: ResolvedTheme = pref === "system" ? systemTheme : pref;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolved);
  }, [resolved]);

  const setTheme = useCallback((next: ThemePref) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // best-effort persistence; ignore if storage is blocked
    }
    // storage events don't fire in the originating tab — nudge subscribers manually
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  }, []);

  return { pref, resolved, setTheme };
}
