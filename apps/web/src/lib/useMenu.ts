"use client";

import { useSyncExternalStore } from "react";

export type MenuState = {
  open: boolean;
  active: string | null;
  mobileOpen: string | null;
};

const initialState: MenuState = {
  open: false,
  active: null,
  mobileOpen: null,
};

let state: MenuState = initialState;
const listeners = new Set<() => void>();

function notify() {
  for (const l of listeners) l();
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return initialState;
}

export function useMenu() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const menuActions = {
  toggle() {
    state = { ...state, open: !state.open };
    notify();
  },
  open() {
    state = { ...state, open: true };
    notify();
  },
  close() {
    state = { ...state, open: false, mobileOpen: null };
    notify();
  },
  setActive(id: string | null) {
    state = { ...state, active: id };
    notify();
  },
  openMobile(id: string) {
    state = { ...state, mobileOpen: id };
    notify();
  },
  closeMobile() {
    state = { ...state, mobileOpen: null };
    notify();
  },
};
