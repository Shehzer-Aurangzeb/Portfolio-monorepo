'use client';

import { useState } from 'react';

import type { SkillCategory } from '@/sanity/types';

import SkillTag from '@/components/ui/skillTag';

export type SkillListProps = {
  categories: SkillCategory[];
  visible: number;
};

export default function SkillList({ categories, visible }: SkillListProps) {
  const [expanded, setExpanded] = useState(false);
  const total = categories.reduce((sum, cat) => sum + cat.skills.length, 0);
  const hidden = categories.reduce((sum, cat) => sum + Math.max(0, cat.skills.length - visible), 0);

  return (
    <>
      <dl id="skill-list" className="space-y-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="grid grid-cols-[112px_1fr] gap-x-5 items-start max-md:grid-cols-1 max-md:gap-y-2"
          >
            <dt className="font-mono text-[12px] text-text-dim pt-1.5 max-md:pt-0">
              {cat.category}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {(expanded ? cat.skills : cat.skills.slice(0, visible)).map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      {hidden > 0 ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="skill-list"
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 ml-[132px] max-md:ml-0 h-11 font-mono text-[12.5px] text-text-secondary underline underline-offset-4 decoration-border-strong hover:decoration-text-secondary"
        >
          {expanded ? 'Show fewer' : `Show all ${total} skills`}
        </button>
      ) : null}
    </>
  );
}
