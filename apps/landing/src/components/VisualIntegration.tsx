import Image from 'next/image';
import { Icon } from './ui/Icon';
import { Button } from './ui/Button';

const capabilities = [
  {
    title: 'Predictive Alerts',
    description: 'Know about bearing wear weeks before failure.',
  },
  {
    title: 'Automated Reports',
    description: 'Generate compliance reports with one click.',
  },
  {
    title: 'Digital Twin Ready',
    description: 'Map diagnostics to your 3D asset models.',
  },
];

const images = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFyVrZuG2zzN3wuxQno32bh2BPk9loLmNf0t9qHkP6SHxmYCeCYq9r0cCCF7Zs8MCBPaQh0yllBVEk1whAklQFhGzxMzEzlS0C6GyC8mO6vs45zraDEfruGHGhos2FZoJSlvFkb99SneV-DsKdkXH2ZL-vntUVSWpOhgXN9siJS2U_z6rdxKmVK7BEn5Po0RmblTLxIjeyLFRYumhzqueDMqLh2k4YpGfpjwHzYAUXZcBDsqhTtWiFMYniYnlyg0Hr1t09nfzMK63',
    alt: 'Industrial robotic arm in modern factory',
    className: 'h-48',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYkdARzUelYUCpvjH92tfqO_I3p3B_RLCIkn4pKQa7pIlwIt4F2NTRpmMpXBH-lTqIjaKvLc4erLAnAemY8pO3h_mGHb9Rau6qV3Hzc__QnGzye3UPV9Y9aQMQSVjWK1Eyfa7pwgjH0rmFnaaoS4-oblQyGi6U1SOYYxqSbnfWh7DU8N5b-VwtHP5TfLXyi9ACHodjy_XnQvrX7xhW04gR0lxt7nvNq3EuBTeDMOpWaz4iRGf0nRKD8gb6cWOHM9VmpqM4Ul6hPWaY',
    alt: 'Data visualization on tablet in server room',
    className: 'h-64',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6VyeaDYxSoHwZ0ypEPOIHvNLEv87Lr8FPmXfwfXmCms74zOoloW_GVpgU16OZmFcAir7D7kJ0jn77T-0NaIyA2iEBtnGrY7fi3aOO1PyjNaS_0CmubhcO9qPVN6aD_uxUm7u4hfoZgl1vK-0LE-tBis7Z4mavl6PfAGb2mm12qysPOjDots-G-vo-_4SjykCGEaap6DaG9r7EKJARNlN3p62RNVUmtNZjIVleC1h0cZdo7_-VLiErsLJpMZ4q6z5thLI8kik7boyL',
    alt: 'Electric circuit board macro shot with blue lighting',
    className: 'h-64',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfO-bxydMnzdfiqt7zZ3qPXFAqs3bcG4LT0-9KBjLslx0Qc5y6_2UVE9esre-zJYx-pH-uLD-a8CJQJY41v5qDOPZR4hLFjBBBduyXsphE2QbTAsWIESimSWkgJYSH9__bVEdqigVEwcC8ngIUH-rgBFwMqdVCXT-W2292f_aAsI7G2xutd8prnmQKaSE9PgiGwIPo5mVEbio6uZzC0u4_hea0dyBWM9z76gtnHzbLgU8_01GGYlEfBl5fyw7T-DyZm9UhVs4HnHyo',
    alt: 'Engineer looking at blueprints with industrial background',
    className: 'h-48',
  },
];

export function VisualIntegration() {
  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d191b] dark:text-white leading-tight">
            From Sensor to <br />
            <span className="text-primary">Actionable Insight</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stop drowning in alerts. Maxeria filters the noise and pinpoints the
            exact component failure, suggesting the precise maintenance action
            required.
          </p>

          {/* Capability list */}
          <ul className="space-y-4 mt-4">
            {capabilities.map((cap) => (
              <li key={cap.title} className="flex items-start gap-3">
                <Icon name="check_circle" className="text-primary mt-1" />
                <div>
                  <strong className="block text-[#0d191b] dark:text-white">
                    {cap.title}
                  </strong>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {cap.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <button className="mt-4 h-12 px-6 rounded-lg border-2 border-[#0d191b] dark:border-white text-[#0d191b] dark:text-white font-bold hover:bg-[#0d191b] hover:text-white dark:hover:bg-white dark:hover:text-[#0d191b] transition-colors">
            Explore Capabilities
          </button>
        </div>

        {/* Right image grid */}
        <div className="flex-1 w-full relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 mt-8">
              <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
