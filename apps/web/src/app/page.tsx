import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import LookingFor from '@/components/sections/lookingFor';
import Projects from '@/components/sections/projects/projects';

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <LookingFor />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
