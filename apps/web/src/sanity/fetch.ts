import { sanityClient } from '@/sanity/client';
import { projectsQuery, skillsQuery } from '@/sanity/queries';
import type { Project, SkillCategory } from '@/sanity/types';

const REVALIDATE_SECONDS = 60;

const fetchOptions = {
  next: { revalidate: REVALIDATE_SECONDS },
} as const;

export async function fetchProjects(): Promise<Project[]> {
  return sanityClient.fetch<Project[]>(projectsQuery, {}, fetchOptions);
}

export async function fetchSkills(): Promise<SkillCategory[]> {
  return sanityClient.fetch<SkillCategory[]>(skillsQuery, {}, fetchOptions);
}
