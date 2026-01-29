import Image from 'next/image';
import { Icon } from './ui/Icon';
import { Button } from './ui/Button';

const trustLogos = [
  { icon: 'factory', name: 'Manufacturing Corp' },
  { icon: 'conveyor_belt', name: 'HeavyInd' },
  { icon: 'bolt', name: 'PowerGrid' },
  { icon: 'oil_barrel', name: 'PetroChem' },
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-32 px-6 overflow-hidden blueprint-bg">
      {/* Gradient fade overlay */}
      <div className="absolute inset-0 blueprint-fade pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center gap-8 mt-10">
        {/* Status badge */}
        <div className="status-badge">
          <span className="status-ping" />
          Now Integrated with SAP S/4HANA
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[#0d191b] dark:text-white">
          Cognitive Maintenance for{' '}
          <span className="text-gradient">Industry 4.0</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          The only offline-first diagnostic platform powered by the MAXER method
          and generative AI. Predict failures before they happen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Button variant="primary-lg">Start Free Trial</Button>
          <Button variant="outline" className="group">
            <Icon
              name="play_circle"
              className="mr-2 group-hover:text-primary transition-colors"
            />
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="relative w-full max-w-[1080px] mt-16 p-2 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="rounded-lg overflow-hidden bg-background-light dark:bg-background-dark aspect-[16/9] relative group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh9SRhFqVdRlDLMsA7UWcXJ_Q0VYUUk2e1PFsWqjDKF9Eze0-UmfbeetHivReSoFsRjJBz68_Pc-F4s6yJneSivtCYoB6WLQJ-R4uSWdya16hLWHVd-LOVmi_vgmUCsOfveZviA4KXwNzVnandxv2cue-SQjkerihqi_4Qf505jyuivMtxHUWtU9gM9G_xP_ACjHpCm-x--om4j5V0M6rqcR1ON2z93eStrGL5k6ee7l3KrFheYdKM-OYy3DTTwC2hJzr4zZvbdOa3"
            alt="Industrial dashboard showing real-time analytics and machinery diagnostics graphs"
            fill
            className="object-cover"
            priority
          />
          {/* Play button overlay */}
          <div className="img-overlay">
            <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 hover:scale-105 transition-transform text-white">
              <Icon name="play_arrow" className="text-4xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust logos */}
      <div className="mt-16 w-full max-w-5xl px-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by reliability engineers at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {trustLogos.map((logo) => (
            <span
              key={logo.name}
              className="text-xl font-bold text-gray-500 flex items-center gap-2"
            >
              <Icon name={logo.icon} />
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
