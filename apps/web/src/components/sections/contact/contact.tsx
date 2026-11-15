import { contact, lookingFor } from '@/content/portfolio';

import Container from '@/components/ui/container';
import PillLink from '@/components/ui/pillLink';
import SectionHeading from '@/components/ui/sectionHeading';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-16">
      <Container>
        <SectionHeading id="contact-heading" title="What I'm looking for" />

        <dl className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-5 mb-14">
          {lookingFor.map((item) => (
            <div key={item.title}>
              <dt className="text-[14.5px] font-medium text-text-primary mb-1">{item.title}</dt>
              <dd className="text-[14px] text-text-muted leading-relaxed">{item.description}</dd>
            </div>
          ))}
        </dl>

        <div className="reveal rounded-card border border-border bg-surface px-8 py-10 max-md:px-6 max-md:py-8">
          <p className="text-[clamp(22px,3vw,28px)] font-semibold text-text-primary tracking-tight leading-tight mb-2">
            Let&apos;s build something.
          </p>
          <p className="text-[14.5px] text-text-muted mb-6 break-all">{contact.email}</p>
          <div className="flex flex-wrap gap-2.5">
            <PillLink href={`mailto:${contact.email}`} variant="solid">
              Email me
            </PillLink>
            {contact.links.map((link) => (
              <PillLink key={link.label} href={link.href}>
                {link.label}
              </PillLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
