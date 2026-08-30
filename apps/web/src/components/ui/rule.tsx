import { cn } from '@/lib/cn';

export type RuleProps = {
  variant?: 'default' | 'strong' | 'heavy' | 'double';
  className?: string;
};

export default function Rule({ variant = 'default', className }: RuleProps) {
  if (variant === 'double') {
    return (
      <div className={cn('flex flex-col gap-0.75', className)} role="separator">
        <div className="h-px bg-brand-rule-heavy" />
        <div className="h-px bg-brand-rule-strong" />
      </div>
    );
  }

  const borderClass = {
    default: 'bg-brand-rule',
    strong: 'bg-brand-rule-strong',
    heavy: 'bg-brand-rule-heavy',
  }[variant];

  return <hr className={cn('h-px border-0', borderClass, className)} />;
}
