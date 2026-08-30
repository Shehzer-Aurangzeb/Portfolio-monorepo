import type { Skill } from '@/content/portfolio';

type SkillTagProps = {
  skill: Skill;
};

export default function SkillTag({ skill }: SkillTagProps) {
  const iconUrl = skill.icon
    ? `https://cdn.simpleicons.org/${skill.icon}/${skill.color?.replace('#', '') || 'F2F0EC'}`
    : null;

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-border rounded-sm text-[13px] text-text-secondary">
      {iconUrl && (
        <img src={iconUrl} alt="" width={14} height={14} className="shrink-0" loading="lazy" />
      )}
      {skill.name}
    </span>
  );
}
