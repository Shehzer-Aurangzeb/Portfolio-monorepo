import type { Skill } from '@/sanity/types';

export type SkillTagProps = {
  skill: Skill;
};

export default function SkillTag({ skill }: SkillTagProps) {
  const iconUrl = skill.icon
    ? `https://cdn.simpleicons.org/${skill.icon}/${skill.color?.replace('#', '') || 'F2F0EC'}`
    : null;

  return (
    <li className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-border-strong text-[13px] text-text-secondary">
      {iconUrl ? <img src={iconUrl} alt="" width={14} height={14} loading="lazy" /> : null}
      {skill.name}
    </li>
  );
}
