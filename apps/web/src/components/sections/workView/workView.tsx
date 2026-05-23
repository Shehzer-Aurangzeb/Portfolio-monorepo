"use client";

import { useEffect } from "react";

import { menuActions, useMenu } from "@/lib/useMenu";
import { PROJECTS } from "@/content/projects";

import IndexList from "@/components/sections/workView/indexList";
import DetailPane from "@/components/sections/workView/detailPane";
import MobileDetail from "@/components/sections/workView/mobileDetail";

export default function WorkView() {
  const { open, mobileOpen } = useMenu();

  // Reset active to first project + close mobile overlay when the menu closes.
  useEffect(() => {
    if (!open) {
      const first = PROJECTS[0];
      menuActions.setActive(first ? first.id : null);
      menuActions.closeMobile();
    }
  }, [open]);

  // Global shortcuts: Escape closes; "i" toggles when not typing.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileOpen) {
          menuActions.closeMobile();
          return;
        }
        if (open) menuActions.close();
        return;
      }
      if (e.key === "i" && !e.metaKey && !e.ctrlKey) {
        const tag = document.activeElement?.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA") menuActions.toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mobileOpen]);

  return (
    <section
      aria-hidden={!open}
      data-open={open}
      className="absolute inset-0 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] opacity-0 pointer-events-none transition-opacity duration-[480ms] ease-(--ease-paper) data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto max-md:grid-cols-1"
    >
      <IndexList />
      <DetailPane />
      <MobileDetail />
    </section>
  );
}
