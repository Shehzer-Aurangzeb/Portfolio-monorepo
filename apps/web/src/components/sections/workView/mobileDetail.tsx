"use client";

import { findItem, isAbout } from "@/content/projects";
import { menuActions, useMenu } from "@/lib/useMenu";

import AboutDetail from "@/components/sections/workView/aboutDetail";
import ProjectDetail from "@/components/sections/workView/projectDetail";

const microClass =
  "font-mono text-micro tracking-micro uppercase text-brand-muted font-medium";

export default function MobileDetail() {
  const { mobileOpen } = useMenu();
  const item = findItem(mobileOpen);
  const open = item !== null;

  return (
    <div
      aria-hidden={!open}
      data-open={open}
      className="hidden max-md:flex fixed inset-0 z-50 bg-brand-bg flex-col translate-x-full pointer-events-none transition-transform duration-[460ms] ease-(--ease-stage) data-[open=true]:translate-x-0 data-[open=true]:pointer-events-auto"
    >
      <div className="flex-none h-16 flex items-center justify-between px-6 border-b border-brand-rule">
        <button
          type="button"
          onClick={menuActions.closeMobile}
          aria-label="Back to index"
          className="inline-flex items-center gap-2.5 text-brand-ink transition-opacity duration-200 hover:opacity-65"
        >
          <span aria-hidden="true" className="font-mono text-[16px] leading-none">
            ←
          </span>
          <span className={microClass + " text-brand-ink"}>Back</span>
        </button>
        <span className={microClass}>{item ? item.n : ""}</span>
      </div>

      <div
        key={item ? item.id : "none"}
        className="flex-1 overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch] px-6 pt-7 pb-14 animate-detail-reveal"
      >
        {item &&
          (isAbout(item) ? <AboutDetail /> : <ProjectDetail p={item} />)}
      </div>
    </div>
  );
}
