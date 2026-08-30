import { cn } from '@/lib/cn';

export type PullQuoteProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PullQuote({ children, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        'font-serif text-pull-quote leading-pull-quote tracking-body text-brand-ink italic',
        'border-l-2 border-brand-rule-strong pl-4',
        className,
      )}
    >
      &quot;{children}&quot;
    </blockquote>
  );
}
