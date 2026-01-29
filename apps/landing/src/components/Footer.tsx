import Link from 'next/link';
import { Icon } from './ui/Icon';

const footerLinks = {
  product: [
    { label: 'Methodology', href: '/methodology' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Pricing', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '/security' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-border-dark py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#0d191b] dark:text-white"
            >
              <div className="flex items-center justify-center size-6 bg-primary rounded text-[#0d191b]">
                <Icon name="precision_manufacturing" className="text-lg" />
              </div>
              <span className="text-xl font-bold">Maxeria</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Empowering industrial teams with next-gen diagnostic tools.
              Minimize downtime, maximize sovereignty.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="mailto:contact@maxeria.io"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="mail" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="public" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#0d191b] dark:text-white">
                Product
              </h4>
              {footerLinks.product.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#0d191b] dark:text-white">
                Company
              </h4>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#0d191b] dark:text-white">Legal</h4>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-border-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Maxeria Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-gray-500">
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
