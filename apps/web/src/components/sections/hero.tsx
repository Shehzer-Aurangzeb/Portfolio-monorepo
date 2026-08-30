import { hero } from '@/content/portfolio';

export default function Hero() {
  return (
    <section className="pt-14 pb-8">
      <div className="mx-auto max-w-(--max-width) px-(--gutter) max-md:px-(--gutter-mobile)">
        <div className="mb-6">
          <h1 className="text-[22px] font-medium text-text-primary leading-[1.3] tracking-[-0.01em] mb-1">
            {hero.name}
          </h1>
          <p className="text-[14.5px] text-text-muted">{hero.tagline}</p>
        </div>

        <p className="text-[27px] font-semibold text-text-primary leading-[1.4] tracking-[-0.015em] mb-8 max-w-[720px]">
          {hero.headline}
        </p>

        <div className="flex items-center flex-wrap gap-x-6 gap-y-3 pb-8 text-[13.5px]">
          {hero.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-primary border-b border-text-primary/30 pb-0.5 hover:border-text-primary transition-colors duration-200"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-[14.5px] text-[#BCBAB4] leading-[1.7] max-w-[680px] border-t border-border pt-6">
          {hero.bio}
        </p>
      </div>
    </section>
  );
}
