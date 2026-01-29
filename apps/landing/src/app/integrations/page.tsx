import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Icon } from '@/components/ui/Icon';

const integrations = [
  {
    name: 'SAP S/4HANA',
    icon: 'database',
    description:
      'Bidirectional sync with SAP Plant Maintenance. Auto-generate work orders from diagnostic insights.',
    status: 'Available',
  },
  {
    name: 'IBM Maximo',
    icon: 'storage',
    description:
      'Connect to Maximo for asset management, work order creation, and maintenance history.',
    status: 'Available',
  },
  {
    name: 'Oracle EAM',
    icon: 'cloud',
    description:
      'Integration with Oracle Enterprise Asset Management for seamless data flow.',
    status: 'Coming Soon',
  },
  {
    name: 'OSIsoft PI',
    icon: 'timeline',
    description:
      'Real-time sensor data ingestion from PI System for predictive analytics.',
    status: 'Available',
  },
  {
    name: 'Siemens MindSphere',
    icon: 'hub',
    description:
      'Connect to MindSphere IoT platform for edge computing and analytics.',
    status: 'Coming Soon',
  },
  {
    name: 'REST API',
    icon: 'api',
    description:
      'Open REST API for custom integrations with any system in your tech stack.',
    status: 'Available',
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0d191b] dark:text-white">
              Seamless <span className="text-primary">Integrations</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect Maxeria with your existing enterprise systems. No data silos,
              no manual transfers, just seamless workflow automation.
            </p>
          </div>
        </section>

        {/* Integration grid */}
        <section className="py-16 px-6 bg-white dark:bg-surface-dark">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="group feature-card relative overflow-hidden"
                >
                  <div className="feature-icon">
                    <Icon name={integration.icon} className="text-3xl" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#0d191b] dark:text-white">
                        {integration.name}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          integration.status === 'Available'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}
                      >
                        {integration.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {integration.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API section */}
        <section className="py-16 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="code" className="text-5xl text-primary mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0d191b] dark:text-white">
              Build Custom Integrations
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our comprehensive REST API and webhooks allow you to connect Maxeria
              to any system in your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-lg">View API Docs</button>
              <button className="btn-outline">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
