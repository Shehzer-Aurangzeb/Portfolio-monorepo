import { padIndex } from '@/lib/padIndex';
import { splitTitle } from '@/lib/splitTitle';
import type { Project } from '@/sanity/types';

import ProjectInfo from '@/components/sections/projects/projectInfo';
import ProjectMedia from '@/components/sections/projects/projectMedia';

export type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, subtitle } = splitTitle(project.title);

  return (
    <article id={`project-${project.id}`} className="reveal">
      <ProjectMedia project={project} />

      <header className="flex items-baseline justify-between gap-5 mt-5 mb-1">
        <h3 className="text-[19px] font-medium leading-tight text-text-primary">
          <span className="font-mono text-[13px] text-text-dim mr-2.5 tabular-nums">
            {padIndex(index)}
          </span>
          {title}
        </h3>
        <span className="font-mono text-[12px] text-text-dim flex-none">{project.year}</span>
      </header>
      <p className="font-mono text-[12px] text-text-dim mb-4">
        {[subtitle, project.category, project.role].filter(Boolean).join(' · ')}
      </p>

      <ProjectInfo project={project} />
    </article>
  );
}
