import { lookingFor } from '@/content/portfolio';

export default function LookingFor() {
  return (
    <section>
      <div className="mx-auto max-w-(--max-width) px-(--gutter) max-md:px-(--gutter-mobile) pt-6 pb-10">
        <div className="border-t border-border max-w-[680px] mb-5" />
        <h2 className="font-mono text-[12px] text-text-dim tracking-[0.04em] mb-6">
          What I&apos;m looking for
        </h2>

        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {lookingFor.map((item, index) => (
            <div
              key={item.title}
              className={`${index !== 0 ? 'border-l border-border pl-8 max-md:border-l-0 max-md:pl-0 max-md:border-t max-md:pt-6' : ''} ${index !== lookingFor.length - 1 ? 'pr-8 max-md:pr-0 max-md:pb-6' : ''}`}
            >
              <h3 className="text-[14.5px] font-medium text-text-primary mb-1">{item.title}</h3>
              <p className="text-[14px] text-text-muted leading-[1.55]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
