import type { Project } from '@/sanity/types';

import PillLink from '@/components/ui/pillLink';

export type ProjectInfoProps = {
  project: Project;
};

export default function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="max-w-[680px]">
      {project.blurb ? (
        <p className="text-[15.5px] text-text-primary leading-[1.6] text-pretty mb-2.5">
          {project.blurb.trim()}
        </p>
      ) : null}
      <p className="text-[14px] text-text-muted leading-loose text-pretty mb-4">{project.body}</p>

      <ul aria-label="Stack" className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="font-mono text-[11.5px] text-text-muted px-2 py-0.5 rounded-sm bg-hover"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.url && project.href ? (
        <div className="mt-5">
          <PillLink href={project.href}>{project.url}</PillLink>
        </div>
      ) : null}
    </div>
  );
}
