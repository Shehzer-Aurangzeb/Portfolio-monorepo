import { fetchSkills } from '@/sanity/fetch';
import type { Skill } from '@/sanity/types';

function SkillTag({ skill }: { skill: Skill }) {
  const iconUrl = skill.icon
    ? `https://cdn.simpleicons.org/${skill.icon}/${skill.color?.replace('#', '') || 'F2F0EC'}`
    : null;

  return (
    <span className="inline-flex items-center gap-[7px] py-[5px] px-2.5 border border-border-strong text-[13px] text-text-secondary">
      {iconUrl && <img src={iconUrl} alt="" width={14} height={14} loading="lazy" />}
      {skill.name}
    </span>
  );
}

export default async function Skills() {
  const skillCategories = await fetchSkills();

  if (skillCategories.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mx-auto max-w-(--max-width) px-(--gutter) max-md:px-(--gutter-mobile) pt-6 pb-10">
        <div className="border-t border-border max-w-[680px] mb-5" />
        <h2 className="font-mono text-[12px] text-text-dim tracking-[0.04em] mb-1">Skills</h2>
        <p className="text-[12px] text-text-dim/60 mb-5">
          Ordered by proficiency within each category
        </p>

        <div className="space-y-[18px]">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="grid grid-cols-[96px_1fr] gap-x-5 items-start max-md:grid-cols-1 max-md:gap-y-2"
            >
              <span className="font-mono text-[12px] text-text-dim leading-[1.9] pt-[3px] max-md:pt-0">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
