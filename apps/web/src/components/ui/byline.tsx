import { cn } from '@/lib/cn';

export type BylineProps = {
  items: string[];
  className?: string;
};

export default function Byline({ items, className }: BylineProps) {
  return (
    <span
      className={cn(
        'font-mono text-byline tracking-byline uppercase text-brand-muted font-medium',
        className,
      )}
    >
      {items.join(' · ')}
    </span>
  );
}
