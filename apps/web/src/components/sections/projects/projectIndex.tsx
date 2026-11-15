import { padIndex } from '@/lib/padIndex';
import { splitTitle } from '@/lib/splitTitle';
import type { Project } from '@/sanity/types';

export type ProjectIndexProps = {
  projects: Project[];
};

export default function ProjectIndex({ projects }: ProjectIndexProps) {
  return (
    <nav aria-label="Project index" className="mb-16">
      <ol className="grid grid-cols-2 gap-x-10 max-md:grid-cols-1">
        {projects.map((project, index) => (
          <li key={project.id} className="border-b border-border">
            <a
              href={`#project-${project.id}`}
              className="group grid grid-cols-[28px_1fr_auto] items-baseline gap-3 py-2.5 min-h-11"
            >
              <span className="font-mono text-[12px] text-text-dim tabular-nums">
                {padIndex(index)}
              </span>
              <span className="text-[14.5px] text-text-primary truncate transition-colors group-hover:text-text-secondary">
                {splitTitle(project.title).title}
              </span>
              <span className="font-mono text-[12px] text-text-dim whitespace-nowrap">
                {project.year}
                <span
                  aria-hidden
                  className="inline-block w-0 opacity-0 -translate-y-1 transition-all duration-200 group-hover:w-4 group-hover:pl-1.5 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  ↓
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
