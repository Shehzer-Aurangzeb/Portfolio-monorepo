import Image from 'next/image';
import Rule from '@/components/ui/rule';
import { ABOUT } from '@/content/editorial';

export default function AboutSidebar() {
  return (
    <aside className="flex flex-col gap-4">
      <header className="flex items-center gap-3">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-brand-muted">
          About the Engineer
        </span>
        <Rule className="flex-1" />
      </header>

      <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-rule">
        <Image
          src="/headshot.png"
          alt="Shehzar Aurangzeb"
          fill
          className="object-cover grayscale"
          sizes="(max-width: 768px) 100vw, 280px"
          priority
        />
      </div>

      <p className="font-sans text-sm leading-relaxed text-brand-ink-soft">{ABOUT.bio}</p>

      <Rule />

      <dl className="grid gap-2">
        <div className="flex flex-col gap-0.5">
          <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-brand-muted">
            Education
          </dt>
          <dd className="font-sans text-sm text-brand-ink">{ABOUT.education}</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-brand-muted">
            Experience
          </dt>
          <dd className="font-sans text-sm text-brand-ink">{ABOUT.experience}</dd>
        </div>
      </dl>
    </aside>
  );
}
