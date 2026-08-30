import { cn } from '@/lib/cn';

export type SectionMarkerProps = {
  section: string;
  number?: string;
  className?: string;
};

export default function SectionMarker({ section, number, className }: SectionMarkerProps) {
  return (
    <span
      className={cn(
        'font-mono text-section tracking-section uppercase text-brand-muted font-medium',
        className,
      )}
    >
      {section}
      {number ? ` · ${number}` : null}
    </span>
  );
}
