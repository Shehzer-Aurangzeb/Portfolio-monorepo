import { contact, header } from '@/content/portfolio';
import { cn } from '@/lib/cn';

import Container from '@/components/ui/container';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="text-[13.5px] font-semibold text-text-primary">
            {header.name}
          </a>

          <nav
            aria-label="Primary"
            className="flex items-center gap-5 max-md:gap-4 text-[12.5px] font-medium"
          >
            {header.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'relative text-text-secondary hover:text-text-primary transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-text-primary after:transition-transform after:duration-300 hover:after:scale-x-100',
                  'desktopOnly' in item && item.desktopOnly && 'max-md:hidden',
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center h-8 px-3.5 rounded-full bg-cta-bg text-cta-text transition-colors duration-200 hover:bg-text-primary"
            >
              {header.cta}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
