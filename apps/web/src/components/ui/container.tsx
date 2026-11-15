import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

export type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-(--max-width) px-(--gutter) max-md:px-(--gutter-mobile)',
        className,
      )}
    >
      {children}
    </div>
  );
}
