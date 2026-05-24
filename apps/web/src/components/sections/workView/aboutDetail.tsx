import type { About, Contact } from '@/sanity/types';

export type AboutDetailProps = {
  about: About;
  contact: Contact | null;
};

const microClass = 'font-mono text-micro tracking-micro uppercase text-brand-muted font-medium';

type ContactRowProps = {
  label: string;
  value: string;
  href?: string;
};

function ContactRow({ label, value, href }: ContactRowProps) {
  const baseRow =
    'grid grid-cols-[72px_1fr_auto] items-center gap-4 py-3 border-b border-brand-rule transition-[padding-left] duration-[280ms] ease-(--ease-paper)';

  if (!href) {
    return (
      <div className={`${baseRow} cursor-default`}>
        <span className={microClass}>{label}</span>
        <span className="text-[13.5px] text-brand-ink tracking-body font-mono">{value}</span>
        <span aria-hidden />
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`${baseRow} hover:pl-2`}
    >
      <span className={microClass}>{label}</span>
      <span className="text-[13.5px] text-brand-ink tracking-body font-mono">{value}</span>
      <span className="text-[13px] text-brand-muted font-mono">↗</span>
    </a>
  );
}

export default function AboutDetail({ about, contact }: AboutDetailProps) {
  return (
    <article className="w-full grid min-h-full">
      <div className="grid gap-3.5 max-w-[600px]">
        <div className="flex justify-between items-center">
          <span className={microClass}>Colophon</span>
          <span className="font-mono text-mono-sm text-brand-ink-soft tracking-[0.04em]">
            — · {about.year}
          </span>
        </div>

        <h2 className="font-serif text-brand-ink leading-[0.96] tracking-snug text-[clamp(40px,11vw,64px)] md:text-[clamp(40px,4.4vw,72px)] -mt-[2px]">
          {about.title}.
        </h2>

        <p className="font-sans text-brand-ink-soft leading-[1.6] max-w-[64ch] text-pretty text-[14px] md:text-[14.5px] tracking-[-0.003em]">
          {about.body}
        </p>
        <p className="font-sans text-brand-ink-soft leading-[1.6] max-w-[64ch] text-pretty text-[14px] md:text-[14.5px] tracking-[-0.003em]">
          {about.body2}
        </p>

        <div className="grid grid-cols-[60px_1fr] gap-4 items-start pt-2.5 border-t border-brand-rule">
          <span className={microClass + ' pt-1'}>Tech</span>
          <ul className="flex flex-wrap gap-x-2 gap-y-1.5 p-0 m-0 list-none">
            {about.stack.map((s) => (
              <li
                key={s}
                className="font-mono text-[11px] py-1 px-2.5 border border-brand-rule rounded-full text-brand-ink-soft tracking-[0.02em] bg-transparent"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-[60px_1fr] gap-4 items-start pt-2.5 border-t border-brand-rule">
          <span className={microClass + ' pt-1'}>Tooling</span>
          <ul className="flex flex-wrap gap-x-2 gap-y-1.5 p-0 m-0 list-none">
            {about.tooling.map((t) => (
              <li
                key={t}
                className="font-mono text-[11px] py-1 px-2.5 border border-brand-rule rounded-full text-brand-ink-soft tracking-[0.02em] bg-transparent"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {contact ? (
          <div className="grid gap-0 pt-2.5 border-t border-brand-rule">
            <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            {/* {contact.phone ? (
              <ContactRow
                label="Phone"
                value={contact.phone}
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
              />
            ) : null} */}
            {contact.github && contact.githubLabel ? (
              <ContactRow label="GitHub" value={contact.githubLabel} href={contact.github} />
            ) : null}
            {contact.linkedin && contact.linkedinLabel ? (
              <ContactRow label="LinkedIn" value={contact.linkedinLabel} href={contact.linkedin} />
            ) : null}
            {contact.location ? <ContactRow label="Based" value={contact.location} /> : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
