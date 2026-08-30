'use client';

import { header } from '@/content/portfolio';

export default function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="mx-auto max-w-(--max-width) px-(--gutter) max-md:px-(--gutter-mobile)">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="text-[13.5px] font-semibold text-text-primary">
            {header.name}
          </a>

          <div className="flex items-center gap-5 text-[12.5px] font-medium">
            <span className="flex items-center gap-[7px] text-accent max-md:hidden">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-[pulse-dot_2s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              {header.status}
            </span>
            {header.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-text-secondary hover:text-text-primary transition-colors duration-200 max-md:hidden after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-text-primary after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href={header.cta.href}
              className="bg-cta-bg text-cta-text px-3 py-1.5 border border-transparent transition-all duration-300 hover:bg-transparent hover:text-cta-bg hover:border-cta-bg"
            >
              {header.cta.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
