import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Contact from '@/components/sections/contact/contact';
import Hero from '@/components/sections/hero/hero';
import Projects from '@/components/sections/projects/projects';
import Skills from '@/components/sections/skills/skills';

export default function Home() {
  return (
    <div id="top" className="flex flex-col min-h-full">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:px-4 focus:py-2 focus:rounded-full focus:bg-cta-bg focus:text-cta-text"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
