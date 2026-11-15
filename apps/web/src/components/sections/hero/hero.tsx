import { contact, hero } from '@/content/portfolio';

import Container from '@/components/ui/container';
import PillLink from '@/components/ui/pillLink';

export default function Hero() {
  return (
    <section className="pt-14 pb-12 max-md:pt-10">
      <Container>
        <p className="inline-flex items-center gap-2 h-7 px-3 mb-7 rounded-full border border-border text-[12.5px] text-text-muted">
          <span className="relative flex size-1.5">
            <span className="motion-safe:animate-[pulse-dot_2s_ease-in-out_infinite] absolute inset-0 rounded-full bg-accent" />
            <span className="relative size-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-accent">{hero.status}</span>
          <span aria-hidden>·</span>
          {hero.availability}
        </p>

        <h1 className="text-[22px] font-medium text-text-primary leading-tight tracking-normal">
          {hero.name}
        </h1>
        <p className="text-[14.5px] text-text-muted mb-5">{hero.tagline}</p>

        <p className="text-[clamp(22px,3.2vw,28px)] font-semibold text-text-primary leading-[1.35] tracking-tight text-balance max-w-[720px] mb-5">
          {hero.headline}
        </p>

        <p className="text-[14.5px] text-text-body leading-body max-w-[640px] text-pretty mb-8">
          {hero.bio}
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <PillLink href={`mailto:${contact.email}`} variant="solid">
            Email me
          </PillLink>
          {contact.links.map((link) => (
            <PillLink key={link.label} href={link.href}>
              {link.label}
            </PillLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
