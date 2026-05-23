"use client";

import { menuActions, useMenu } from "@/lib/useMenu";

export type MenuToggleProps = {
  count: number;
};

export default function MenuToggle({ count }: MenuToggleProps) {
  const { open } = useMenu();

  return (
    <button
      type="button"
      onClick={menuActions.toggle}
      aria-label={open ? "Close index" : "Open index"}
      aria-expanded={open}
      className="justify-self-start inline-flex items-center gap-[14px] h-9 px-1 text-brand-ink transition-opacity duration-200 hover:opacity-65"
    >
      <span aria-hidden className="relative inline-block w-[18px] h-3">
        <span
          className={`absolute left-0 w-full h-[1.25px] bg-current origin-center transition-transform duration-[360ms] ${
            open
              ? "top-[3px] translate-y-[2.5px] rotate-45"
              : "top-[3px]"
          }`}
        />
        <span
          className={`absolute left-0 w-full h-[1.25px] bg-current origin-center transition-transform duration-[360ms] ${
            open
              ? "top-2 -translate-y-[2.5px] -rotate-45"
              : "top-2"
          }`}
        />
      </span>
      <span className="font-mono text-micro tracking-micro uppercase font-medium text-brand-ink">
        {open ? "Close" : "Index"}
      </span>
      <span className="font-mono text-micro tracking-micro uppercase font-medium text-brand-muted -ml-1">
        {open ? "" : `(${count})`}
      </span>
    </button>
  );
}
