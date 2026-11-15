import { contact, header } from '@/content/portfolio';

import Container from '@/components/ui/container';

export default function Footer() {
  return (
    <footer className="pb-10">
      <Container>
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-border font-mono text-[12px] text-text-dim">
          <span>
            © {new Date().getFullYear()} {header.name} · {contact.location}
          </span>
          <a
            href="#top"
            className="inline-flex items-center h-11 hover:text-text-secondary transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
