import { work } from '@/content/portfolio';
import { padIndex } from '@/lib/padIndex';
import { splitTitle } from '@/lib/splitTitle';
import { fetchProjects } from '@/sanity/fetch';

import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/sectionHeading';
import ProjectCard from '@/components/sections/projects/projectCard';
import ProjectIndex from '@/components/sections/projects/projectIndex';
import ProjectInfo from '@/components/sections/projects/projectInfo';
import ProjectMedia from '@/components/sections/projects/projectMedia';
import ProjectRow from '@/components/sections/projects/projectRow';

export default async function Projects() {
  const projects = await fetchProjects();
  if (projects.length === 0) return null;

  const featured = projects.slice(0, work.featuredCount);
  const more = projects.slice(work.featuredCount);

  return (
    <section id="work" aria-labelledby="work-heading" className="pb-20">
      <Container>
        <SectionHeading
          id="work-heading"
          title="Selected work"
          meta={`${projects.length} projects`}
        />
        <ProjectIndex projects={projects} />

        <div className="flex flex-col gap-20">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {more.length > 0 ? (
          <div className="mt-20">
            <h3 className="font-mono text-[12px] tracking-wide text-text-dim pb-3 border-b border-border">
              More projects
            </h3>
            {more.map((project, i) => {
              const { title, subtitle } = splitTitle(project.title);
              return (
                <ProjectRow
                  key={project.id}
                  id={`project-${project.id}`}
                  number={padIndex(work.featuredCount + i)}
                  title={title}
                  meta={[subtitle, project.category, project.role].filter(Boolean).join(' · ')}
                  year={project.year}
                >
                  <ProjectMedia project={project} />
                  <ProjectInfo project={project} />
                </ProjectRow>
              );
            })}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
