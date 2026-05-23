"use client";

import { menuActions, useMenu } from "@/lib/useMenu";
import { ABOUT, PROJECTS } from "@/content/projects";

const microClass =
  "font-mono text-micro tracking-micro uppercase text-brand-muted font-medium";

const rowBase =
  "grid grid-cols-[38px_1fr_auto] items-baseline gap-4 py-3.5 cursor-pointer border-b border-brand-rule text-brand-ink transition-[color,opacity,transform] duration-300 ease-(--ease-paper)";

export default function IndexList() {
  const { open, active } = useMenu();

  const rowState = (id: string) => {
    if (!open) return "opacity-0 -translate-x-3";
    if (active === id) return "opacity-100 translate-x-0";
    if (active && active !== id) return "opacity-[0.38] translate-x-0";
    return "opacity-100 translate-x-0";
  };

  const titleClass =
    "font-serif text-brand-ink leading-[1.02] tracking-snug text-[clamp(34px,4.6vw,64px)] transition-transform duration-[380ms] ease-(--ease-stage) origin-left";

  return (
    <div
      data-open={open}
      className="relative grid grid-rows-[auto_1fr] px-10 pl-14 pt-10 pb-8 bg-brand-bg border-r border-brand-rule overflow-hidden transition-[transform,opacity] duration-[640ms] ease-(--ease-stage) -translate-x-[12%] opacity-0 data-[open=true]:translate-x-0 data-[open=true]:opacity-100 max-md:px-6 max-md:pl-6 max-md:border-r-0"
    >
      <div className="flex justify-between items-center pb-7 border-b border-brand-rule">
        <span className={microClass}>Selected work</span>
        <span className={microClass}>
          {String(PROJECTS.length).padStart(2, "0")} entries
        </span>
      </div>

      <ol className="m-0 pt-[18px] pb-2 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {PROJECTS.map((p, i) => {
          const isActive = active === p.id;
          return (
            <li
              key={p.id}
              onMouseEnter={() => menuActions.setActive(p.id)}
              onClick={() => menuActions.openMobile(p.id)}
              style={{
                transitionDelay: open ? `${220 + i * 36}ms` : "0ms",
              }}
              className={`${rowBase} ${rowState(p.id)} group/row`}
            >
              <span className="font-mono text-[11px] tracking-caps-sm text-brand-muted font-medium pt-4">
                {p.n}
              </span>
              <span
                className={`${titleClass} group-hover/row:translate-x-2 ${isActive ? "translate-x-2" : ""}`}
              >
                {p.title}
                <em className="not-italic font-serif text-brand-muted text-[0.32em] tracking-body align-[0.45em] whitespace-nowrap italic">
                  {" "}
                  &nbsp;— {p.category}
                </em>
              </span>
              <span className="font-mono text-[11px] tracking-caps-sm text-brand-muted pt-[22px] whitespace-nowrap">
                {p.year}
              </span>
            </li>
          );
        })}

        <li aria-hidden className="h-7 list-none" />

        <li
          onMouseEnter={() => menuActions.setActive(ABOUT.id)}
          onClick={() => menuActions.openMobile(ABOUT.id)}
          style={{
            transitionDelay: open
              ? `${220 + (PROJECTS.length + 1) * 36}ms`
              : "0ms",
          }}
          className={`${rowBase} border-b-0 ${rowState(ABOUT.id)} group/row`}
        >
          <span className="font-mono text-[11px] tracking-caps-sm text-brand-muted font-medium pt-4">
            {ABOUT.n}
          </span>
          <span
            className={`${titleClass} italic group-hover/row:translate-x-2 ${active === ABOUT.id ? "translate-x-2" : ""}`}
          >
            {ABOUT.title}
            <em className="not-italic font-serif text-brand-muted text-[0.32em] tracking-body align-[0.45em] whitespace-nowrap italic">
              {" "}
              &nbsp;— contact &amp; details
            </em>
          </span>
          <span className="font-mono text-[11px] tracking-caps-sm text-brand-muted pt-[22px] whitespace-nowrap">
            {ABOUT.year}
          </span>
        </li>
      </ol>
    </div>
  );
}
