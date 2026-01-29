import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Icon } from '@/components/ui/Icon';

const securityFeatures = [
  {
    icon: 'cloud_off',
    title: 'Offline-First Architecture',
    description:
      'All data processing happens locally on your devices. No cloud dependency means no data exposure.',
  },
  {
    icon: 'encrypted',
    title: 'End-to-End Encryption',
    description:
      'AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your data is always protected.',
  },
  {
    icon: 'admin_panel_settings',
    title: 'Role-Based Access Control',
    description:
      'Granular permissions ensure users only access what they need. Full audit trail included.',
  },
  {
    icon: 'verified_user',
    title: 'SOC 2 Type II Compliant',
    description:
      'Our security practices are independently audited and certified to SOC 2 Type II standards.',
  },
  {
    icon: 'lock',
    title: 'On-Premise Deployment',
    description:
      'Deploy Maxeria entirely within your infrastructure. No external network access required.',
  },
  {
    icon: 'shield',
    title: 'Edge AI Processing',
    description:
      'AI models run on your edge devices. Sensitive data never leaves your network perimeter.',
  },
];

const certifications = [
  { name: 'SOC 2 Type II', icon: 'verified' },
  { name: 'ISO 27001', icon: 'policy' },
  { name: 'GDPR', icon: 'gavel' },
  { name: 'IEC 62443', icon: 'security' },
];

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center size-16 bg-primary/10 rounded-2xl text-primary mb-6">
              <Icon name="security" className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0d191b] dark:text-white">
              Enterprise-Grade <span className="text-primary">Security</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your industrial data is sensitive. That's why Maxeria was built from
              the ground up with security and data sovereignty as core principles.
            </p>
          </div>
        </section>

        {/* Security features */}
        <section className="py-16 px-6 bg-white dark:bg-surface-dark">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#0d191b] dark:text-white">
              Security by Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-border-dark"
                >
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon name={feature.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0d191b] dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#0d191b] dark:text-white">
              Certifications & Compliance
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark"
                >
                  <Icon name={cert.icon} className="text-2xl text-primary" />
                  <span className="font-bold text-[#0d191b] dark:text-white">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0d191b] dark:text-white">
              Need more details?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Request our security whitepaper or schedule a call with our security team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-lg">Download Whitepaper</button>
              <button className="btn-outline">Contact Security Team</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
