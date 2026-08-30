import { fetchProjects } from '@/sanity/fetch';
import ProjectCard from './projectCard';

const numberWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
];

export default async function Projects() {
  const projects = await fetchProjects();
  const countWord = numberWords[projects.length] || projects.length.toString();

  return (
    <section id="projects">
      <div className="mx-auto max-w-(--max-width) px-(--gutter) max-md:px-(--gutter-mobile) pb-[60px]">
        <div className="border-t border-border max-w-[680px] pt-[26px] mb-[26px]" />
        <h2 className="font-mono text-[12px] text-text-dim tracking-[0.04em] mb-[26px]">
          Projects — all {countWord}
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
