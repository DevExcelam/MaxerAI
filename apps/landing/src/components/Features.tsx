import { Icon } from './ui/Icon';

const features = [
  {
    icon: 'psychology',
    title: 'Semantic Reasoning',
    description:
      'Leveraging our proprietary Object-Fault ontology to diagnose root causes faster than human experts. It understands the "why," not just the "what."',
  },
  {
    icon: 'security',
    title: 'Total Sovereignty',
    description:
      'Offline-Local first architecture ensures your sensitive industrial data never leaves the premise. AI models run on your edge devices.',
  },
  {
    icon: 'hub',
    title: 'EAM Synergy',
    description:
      'Seamless bidirectional integration with SAP and Maximo APIs. Automated work order generation directly from diagnostic insights.',
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-surface-dark">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0d191b] dark:text-white">
            Built for the rigorous demands of modern reliability engineering.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Maxeria combines deep industry ontologies with cutting-edge generative
            AI to deliver insights that are accurate, secure, and actionable.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group feature-card">
              <div className="feature-icon">
                <Icon name={feature.icon} className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0d191b] dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
