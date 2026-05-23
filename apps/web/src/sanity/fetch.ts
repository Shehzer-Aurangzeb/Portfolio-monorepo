import { sanityClient } from '@/sanity/client';
import { aboutQuery, contactQuery, projectsQuery } from '@/sanity/queries';
import type { About, Contact, Project, SiteData } from '@/sanity/types';

const REVALIDATE_SECONDS = 60;

const fetchOptions = {
  next: { revalidate: REVALIDATE_SECONDS },
} as const;

export async function fetchProjects(): Promise<Project[]> {
  return sanityClient.fetch<Project[]>(projectsQuery, {}, fetchOptions);
}

export async function fetchAbout(): Promise<About | null> {
  return sanityClient.fetch<About | null>(aboutQuery, {}, fetchOptions);
}

export async function fetchContact(): Promise<Contact | null> {
  return sanityClient.fetch<Contact | null>(contactQuery, {}, fetchOptions);
}

export async function fetchSiteData(): Promise<SiteData> {
  const [projects, about, contact] = await Promise.all([
    fetchProjects(),
    fetchAbout(),
    fetchContact(),
  ]);

  return { projects, about, contact };
}
