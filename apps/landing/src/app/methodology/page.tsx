import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Icon } from '@/components/ui/Icon';

const methodologySteps = [
  {
    icon: 'search',
    title: 'Observation',
    description:
      'Collect and document all observable symptoms, measurements, and environmental conditions at the time of failure.',
  },
  {
    icon: 'schema',
    title: 'Decomposition',
    description:
      'Break down the system into its functional components using our Object-Fault ontology to identify potential failure points.',
  },
  {
    icon: 'psychology',
    title: 'Root Cause Analysis',
    description:
      'Apply MAXER reasoning to trace the causal chain from effects to root causes using semantic AI assistance.',
  },
  {
    icon: 'build',
    title: 'Action Planning',
    description:
      'Generate prioritized corrective and preventive actions with direct integration to your EAM system.',
  },
];

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0d191b] dark:text-white">
              The <span className="text-primary">MAXER</span> Methodology
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A structured approach to failure analysis that combines human expertise
              with AI-powered semantic reasoning for faster, more accurate diagnostics.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 px-6 bg-white dark:bg-surface-dark">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {methodologySteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-6 p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-border-dark"
                >
                  <div className="flex-shrink-0">
                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon name={step.icon} className="text-3xl" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[#0d191b] dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0d191b] dark:text-white">
              Ready to transform your maintenance process?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Start using the MAXER methodology with AI assistance today.
            </p>
            <button className="btn-primary-lg">Start Free Trial</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
