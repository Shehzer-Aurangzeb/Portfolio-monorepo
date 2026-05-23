import type { Contact } from '@/sanity/types';

export type HeroFootProps = {
  contact: Contact | null;
};

const microClass = 'font-mono text-micro tracking-micro uppercase text-brand-muted font-medium';

const linkClass =
  'inline-flex flex-col gap-1.5 max-sm:gap-0.5 transition-opacity duration-200 hover:opacity-60';

const valueClass = 'text-[14px] text-brand-ink tracking-body';

export default function HeroFoot({ contact }: HeroFootProps) {
  if (!contact) return null;

  return (
    <div className="flex justify-between items-end pt-6 border-t border-brand-rule max-md:flex-col max-md:items-start max-md:gap-[18px]">
      <div className="pb-1">
        <span className="inline-flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-block size-[7px] rounded-full bg-brand-dot animate-pulse-dot"
          />
          <span className={microClass}>{contact.availability}</span>
        </span>
      </div>

      <nav className="flex gap-14 max-md:gap-7 max-sm:gap-[18px] max-md:flex-wrap">
        <a className={linkClass} href={`mailto:${contact.email}`}>
          <span className={microClass}>Email</span>
          <span className={valueClass}>{contact.email}</span>
        </a>
        {contact.github ? (
          <a className={linkClass} href={contact.github} target="_blank" rel="noreferrer">
            <span className={microClass}>GitHub</span>
            <span className={valueClass}>↗ {contact.githubHandle}</span>
          </a>
        ) : null}
        {contact.linkedin ? (
          <a className={linkClass} href={contact.linkedin} target="_blank" rel="noreferrer">
            <span className={microClass}>LinkedIn</span>
            <span className={valueClass}>↗ {contact.linkedinHandle}</span>
          </a>
        ) : null}
      </nav>
    </div>
  );
}
