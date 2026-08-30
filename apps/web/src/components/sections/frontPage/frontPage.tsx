'use client';

import { useMenu } from '@/lib/useMenu';
import type { Contact, Project } from '@/sanity/types';
import { FEATURED_PROJECT_ID } from '@/content/editorial';
import HeadlineStory from '@/components/sections/frontPage/headlineStory';
import AboutSidebar from '@/components/sections/frontPage/aboutSidebar';

export type FrontPageProps = {
  projects: Project[];
  contact: Contact | null;
};

export default function FrontPage({ projects, contact }: FrontPageProps) {
  const { open } = useMenu();

  const featuredProject = projects.find((p) => p.id === FEATURED_PROJECT_ID) ?? projects[0] ?? null;

  if (!featuredProject) return null;

  return (
    <section
      aria-label="Front Page"
      aria-hidden={open}
      data-open={open}
      className="absolute inset-0 overflow-y-auto px-8 py-8 max-md:px-5 max-md:py-6 transition-opacity ease-(--ease-paper) data-[open=true]:opacity-0 data-[open=true]:pointer-events-none data-[open=true]:duration-240 data-[open=false]:duration-480"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
        <HeadlineStory project={featuredProject} />
        <AboutSidebar />
      </div>
    </section>
  );
}
