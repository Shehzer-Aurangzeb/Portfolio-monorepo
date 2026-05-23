'use client';

import { useMenu } from '@/lib/useMenu';
import { isAbout } from '@/sanity/types';
import type { Contact, IndexItem } from '@/sanity/types';

import AboutDetail from '@/components/sections/workView/aboutDetail';
import ProjectDetail from '@/components/sections/workView/projectDetail';

export type DetailPaneProps = {
  items: IndexItem[];
  contact: Contact | null;
};

const microClass = 'font-mono text-micro tracking-micro uppercase text-brand-muted font-medium';

export default function DetailPane({ items, contact }: DetailPaneProps) {
  const { open, active } = useMenu();
  const item = items.find((i) => i.id === active) ?? null;

  return (
    <div
      data-open={open}
      className="relative bg-brand-bg-soft overflow-hidden transition-[transform,opacity,background-color] duration-[700ms] ease-(--ease-stage) translate-x-[8%] opacity-0 data-[open=true]:translate-x-0 data-[open=true]:opacity-100 data-[open=true]:delay-[80ms] max-md:hidden"
    >
      <div className="absolute inset-0 px-14 pl-12 pt-10 pb-8 flex items-stretch overflow-y-auto overflow-x-hidden [scrollbar-width:thin]">
        {item ? (
          <div key={item.id} className="w-full animate-detail-reveal">
            {isAbout(item) ? (
              <AboutDetail about={item} contact={contact} />
            ) : (
              <ProjectDetail p={item} />
            )}
          </div>
        ) : (
          <div className="m-auto">
            <span className={microClass}>Hover an entry</span>
          </div>
        )}
      </div>
    </div>
  );
}
