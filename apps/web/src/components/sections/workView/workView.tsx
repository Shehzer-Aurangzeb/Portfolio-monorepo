'use client';

import { useEffect, useMemo } from 'react';

import { menuActions, useMenu } from '@/lib/useMenu';
import type { About, Contact, IndexItem, Project } from '@/sanity/types';

import IndexList from '@/components/sections/workView/indexList';
import DetailPane from '@/components/sections/workView/detailPane';
import MobileDetail from '@/components/sections/workView/mobileDetail';

export type WorkViewProps = {
  projects: Project[];
  about: About | null;
  contact: Contact | null;
};

export default function WorkView({ projects, about, contact }: WorkViewProps) {
  const { open, mobileOpen } = useMenu();

  const numbered = useMemo<Project[]>(
    () =>
      projects.map((p, i) => ({
        ...p,
        n: String(i + 1).padStart(2, '0'),
      })),
    [projects],
  );

  const items = useMemo<IndexItem[]>(
    () => (about ? [...numbered, about] : [...numbered]),
    [numbered, about],
  );

  useEffect(() => {
    if (!open) {
      const first = numbered[0];
      menuActions.setActive(first ? first.id : null);
      menuActions.closeMobile();
    }
  }, [open, numbered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileOpen) {
          menuActions.closeMobile();
          return;
        }
        if (open) menuActions.close();
        return;
      }
      if (e.key === 'i' && !e.metaKey && !e.ctrlKey) {
        const tag = document.activeElement?.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') menuActions.toggle();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, mobileOpen]);

  return (
    <section
      aria-hidden={!open}
      data-open={open}
      className="absolute inset-0 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] opacity-0 pointer-events-none transition-opacity duration-[480ms] ease-(--ease-paper) data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto max-md:grid-cols-1"
    >
      <IndexList projects={numbered} about={about} />
      <DetailPane items={items} contact={contact} />
      <MobileDetail items={items} contact={contact} />
    </section>
  );
}
