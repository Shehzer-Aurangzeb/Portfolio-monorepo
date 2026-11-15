import { skills } from '@/content/portfolio';
import { fetchSkills } from '@/sanity/fetch';

import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/sectionHeading';
import SkillList from '@/components/sections/skills/skillList';

export default async function Skills() {
  const categories = await fetchSkills();
  if (categories.length === 0) return null;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="pb-20">
      <Container>
        <SectionHeading id="skills-heading" title="Skills" meta="By proficiency, per area" />
        <SkillList categories={categories} visible={skills.visiblePerCategory} />
      </Container>
    </section>
  );
}
