import { cn } from '@/lib/cn';

export type DatelineProps = {
  location: string;
  year: string;
  className?: string;
};

export default function Dateline({ location, year, className }: DatelineProps) {
  return (
    <span
      className={cn(
        'font-mono text-byline tracking-byline uppercase text-brand-muted font-medium',
        className,
      )}
    >
      {location} — {year}
    </span>
  );
}
