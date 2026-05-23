import Clock from '@/components/ui/clock';
import MenuToggle from '@/components/ui/menuToggle';
import ThemeSwitcher from '@/components/ui/themeSwitcher';

export type HeaderProps = {
  projectCount: number;
  clockLabel: string | null;
};

export default function Header({ projectCount, clockLabel }: HeaderProps) {
  return (
    <header className="relative z-30 h-16 flex-none grid grid-cols-[1fr_auto_1fr] items-center px-8 max-md:px-5 border-b border-brand-rule bg-brand-bg transition-[background-color,border-color] duration-600 ease-(--ease-paper)">
      <MenuToggle count={projectCount} />
      <Clock label={clockLabel} />
      <ThemeSwitcher />
    </header>
  );
}
