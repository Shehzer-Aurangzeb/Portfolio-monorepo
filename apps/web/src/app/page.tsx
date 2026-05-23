import Header from "@/components/sections/header/header";
import Hero from "@/components/sections/hero/hero";
import WorkView from "@/components/sections/workView/workView";
import { PROJECTS } from "@/content/projects";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header projectCount={PROJECTS.length} />
      <main className="flex-1 relative">
        <Hero />
        <WorkView />
      </main>
    </div>
  );
}
