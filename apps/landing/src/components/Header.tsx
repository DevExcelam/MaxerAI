import Link from 'next/link';
import { Icon } from './ui/Icon';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border-light dark:border-border-dark">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-[#0d191b] dark:text-white">
          <div className="flex items-center justify-center size-8 bg-primary/20 rounded-lg text-primary">
            <Icon name="precision_manufacturing" className="text-2xl" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Maxeria</h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link
            href="/methodology"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Methodology
          </Link>
          <Link
            href="/integrations"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Integrations
          </Link>
          <Link
            href="/security"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Security
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:flex">
            Log In
          </Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
