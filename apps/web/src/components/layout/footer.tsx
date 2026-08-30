import { footer } from '@/content/portfolio';

export default function Footer() {
  return (
    <footer className="mt-24 pb-12">
      <div className="mx-auto max-w-(--max-width) px-(--gutter) max-md:px-(--gutter-mobile)">
        <div className="pt-8 border-t border-border">
          <div className="flex items-center justify-between text-[12.5px] text-text-muted">
            <span>{footer.location}</span>
            <a
              href={`mailto:${footer.email}`}
              className="hover:text-text-secondary transition-colors"
            >
              {footer.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
