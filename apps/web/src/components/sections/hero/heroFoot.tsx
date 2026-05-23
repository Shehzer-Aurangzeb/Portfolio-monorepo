import { CONTACT } from "@/content/contact";

const microClass =
  "font-mono text-micro tracking-micro uppercase text-brand-muted font-medium";

const linkClass =
  "inline-flex flex-col gap-1.5 max-sm:gap-0.5 transition-opacity duration-200 hover:opacity-60";

const valueClass = "text-[14px] text-brand-ink tracking-body";

export default function HeroFoot() {
  return (
    <div className="flex justify-between items-end pt-6 border-t border-brand-rule max-md:flex-col max-md:items-start max-md:gap-[18px]">
      <div className="pb-1">
        <span className="inline-flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-block size-[7px] rounded-full bg-brand-dot animate-pulse-dot"
          />
          <span className={microClass}>{CONTACT.availability}</span>
        </span>
      </div>

      <nav className="flex gap-14 max-md:gap-7 max-sm:gap-[18px] max-md:flex-wrap">
        <a className={linkClass} href={`mailto:${CONTACT.email}`}>
          <span className={microClass}>Email</span>
          <span className={valueClass}>{CONTACT.email}</span>
        </a>
        <a
          className={linkClass}
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
        >
          <span className={microClass}>GitHub</span>
          <span className={valueClass}>↗ {CONTACT.githubHandle}</span>
        </a>
        <a
          className={linkClass}
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <span className={microClass}>LinkedIn</span>
          <span className={valueClass}>↗ {CONTACT.linkedinHandle}</span>
        </a>
      </nav>
    </div>
  );
}
