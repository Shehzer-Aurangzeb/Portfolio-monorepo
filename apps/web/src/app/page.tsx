import Header from '@/components/sections/header/header';
import Hero from '@/components/sections/hero/hero';
import WorkView from '@/components/sections/workView/workView';
import { fetchSiteData } from '@/sanity/fetch';

export default async function Home() {
  const { projects, about, contact } = await fetchSiteData();

  return (
    <div className="flex flex-col h-full">
      <Header projectCount={projects.length} clockLabel={contact?.location ?? null} />
      <main className="flex-1 relative">
        <Hero contact={contact} />
        <WorkView projects={projects} about={about} contact={contact} />
      </main>
    </div>
  );
}
