import { cn } from '@/lib/cn';

export type IndexItemProps = {
  label: string;
  items: string[];
  className?: string;
};

export default function IndexItem({ label, items, className }: IndexItemProps) {
  return (
    <div className={cn('grid grid-cols-[72px_1fr] gap-4 items-baseline', className)}>
      <span className="font-mono text-index-label tracking-byline uppercase text-brand-muted font-medium">
        {label}
      </span>
      <span className="font-sans text-index-item text-brand-ink-soft tracking-body">
        {items.join(' · ')}
      </span>
    </div>
  );
}
