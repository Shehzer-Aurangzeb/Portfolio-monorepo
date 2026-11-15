import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

export type PillLinkProps = {
  href: string;
  variant?: 'solid' | 'outline';
  children: ReactNode;
};

export default function PillLink({ href, variant = 'outline', children }: PillLinkProps) {
  const external = href.startsWith('http') || href.endsWith('.pdf');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group/pill inline-flex items-center gap-1.5 h-10 px-4 rounded-full text-[13.5px] font-medium transition-colors duration-200 active:scale-[0.98]',
        variant === 'solid'
          ? 'bg-cta-bg text-cta-text hover:bg-text-primary'
          : 'border border-border-strong text-text-secondary hover:text-text-primary hover:border-text-dim',
      )}
    >
      {children}
      {external ? (
        <span
          aria-hidden
          className="text-text-dim transition-transform duration-200 group-hover/pill:-translate-y-px group-hover/pill:translate-x-px"
        >
          ↗
        </span>
      ) : null}
    </a>
  );
}
