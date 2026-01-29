import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#0d191b] dark:text-white min-h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-[#e7f1f3] dark:border-[#1a2e32]">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#0d191b] dark:text-white">
            <div className="flex items-center justify-center size-8 bg-primary/20 rounded-lg text-primary">
              <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Maxeria</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Methodology</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Integrations</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Security</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:flex h-10 px-4 items-center justify-center rounded-lg border border-[#e7f1f3] dark:border-[#2a3e42] hover:bg-gray-100 dark:hover:bg-[#1a2e32] transition-colors text-sm font-bold">
              Log In
            </Link>
            <Link href="/login" className="h-10 px-5 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-[#0d191b] text-sm font-bold transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-20 pb-32 px-6 overflow-hidden blueprint-bg">
        {/* Radial gradient fade for the background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center gap-8 mt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary/80 uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now Integrated with SAP S/4HANA
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[#0d191b] dark:text-white">
            Cognitive Maintenance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Industry 4.0</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            The only offline-first diagnostic platform powered by the MAXER method and generative AI. Predict failures before they happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link href="/login" className="h-12 px-8 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-[#0d191b] text-base font-bold transition-all shadow-lg shadow-primary/20">
              Start Free Trial
            </Link>
            <button className="h-12 px-8 flex items-center justify-center rounded-lg bg-white dark:bg-[#1a2e32] border border-gray-200 dark:border-[#2a3e42] hover:bg-gray-50 dark:hover:bg-[#203539] text-[#0d191b] dark:text-white text-base font-bold transition-all group">
              <span className="material-symbols-outlined mr-2 group-hover:text-primary transition-colors">play_circle</span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Dashboard Preview / Image Area */}
        <div className="relative w-full max-w-[1080px] mt-16 p-2 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-2xl">
          <div className="rounded-lg overflow-hidden bg-background-light dark:bg-background-dark aspect-[16/9] relative group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh9SRhFqVdRlDLMsA7UWcXJ_Q0VYUUk2e1PFsWqjDKF9Eze0-UmfbeetHivReSoFsRjJBz68_Pc-F4s6yJneSivtCYoB6WLQJ-R4uSWdya16hLWHVd-LOVmi_vgmUCsOfveZviA4KXwNzVnandxv2cue-SQjkerihqi_4Qf505jyuivMtxHUWtU9gM9G_xP_ACjHpCm-x--om4j5V0M6rqcR1ON2z93eStrGL5k6ee7l3KrFheYdKM-OYy3DTTwC2hJzr4zZvbdOa3")'}}
            ></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 hover:scale-105 transition-transform text-white">
                <span className="material-symbols-outlined text-4xl">play_arrow</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="mt-16 w-full max-w-5xl px-6">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by reliability engineers at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2">
              <span className="material-symbols-outlined">factory</span> Manufacturing Corp
            </span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2">
              <span className="material-symbols-outlined">conveyor_belt</span> HeavyInd
            </span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2">
              <span className="material-symbols-outlined">bolt</span> PowerGrid
            </span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2">
              <span className="material-symbols-outlined">oil_barrel</span> PetroChem
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white dark:bg-[#0b1618]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0d191b] dark:text-white">
              Built for the rigorous demands of modern reliability engineering.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Maxeria combines deep industry ontologies with cutting-edge generative AI to deliver insights that are accurate, secure, and actionable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-[#101f22] border border-gray-100 dark:border-[#1a2e32] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-6">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d191b] transition-colors">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0d191b] dark:text-white">Semantic Reasoning</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Leveraging our proprietary Object-Fault ontology to diagnose root causes faster than human experts. It understands the "why," not just the "what."
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-[#101f22] border border-gray-100 dark:border-[#1a2e32] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-6">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d191b] transition-colors">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0d191b] dark:text-white">Total Sovereignty</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Offline-Local first architecture ensures your sensitive industrial data never leaves the premise. AI models run on your edge devices.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-background-light dark:bg-[#101f22] border border-gray-100 dark:border-[#1a2e32] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-6">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d191b] transition-colors">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0d191b] dark:text-white">EAM Synergy</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Seamless bidirectional integration with SAP and Maximo APIs. Automated work order generation directly from diagnostic insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Integration Section */}
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d191b] dark:text-white leading-tight">
              From Sensor to <br /> <span className="text-primary">Actionable Insight</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stop drowning in alerts. Maxeria filters the noise and pinpoints the exact component failure, suggesting the precise maintenance action required.
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <strong className="block text-[#0d191b] dark:text-white">Predictive Alerts</strong>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Know about bearing wear weeks before failure.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <strong className="block text-[#0d191b] dark:text-white">Automated Reports</strong>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Generate compliance reports with one click.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <strong className="block text-[#0d191b] dark:text-white">Digital Twin Ready</strong>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Map diagnostics to your 3D asset models.</span>
                </div>
              </li>
            </ul>
            <button className="mt-4 h-12 px-6 rounded-lg border-2 border-[#0d191b] dark:border-white text-[#0d191b] dark:text-white font-bold hover:bg-[#0d191b] hover:text-white dark:hover:bg-white dark:hover:text-[#0d191b] transition-colors">
              Explore Capabilities
            </button>
          </div>

          <div className="flex-1 w-full relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 mt-8">
                <div
                  className="w-full h-48 rounded-xl bg-cover bg-center shadow-lg"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnFyVrZuG2zzN3wuxQno32bh2BPk9loLmNf0t9qHkP6SHxmYCeCYq9r0cCCF7Zs8MCBPaQh0yllBVEk1whAklQFhGzxMzEzlS0C6GyC8mO6vs45zraDEfruGHGhos2FZoJSlvFkb99SneV-DsKdkXH2ZL-vntUVSWpOhgXN9siJS2U_z6rdxKmVK7BEn5Po0RmblTLxIjeyLFRYumhzqueDMqLh2k4YpGfpjwHzYAUXZcBDsqhTtWiFMYniYnlyg0Hr1t09nfzMK63")'}}
                ></div>
                <div
                  className="w-full h-64 rounded-xl bg-cover bg-center shadow-lg"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYkdARzUelYUCpvjH92tfqO_I3p3B_RLCIkn4pKQa7pIlwIt4F2NTRpmMpXBH-lTqIjaKvLc4erLAnAemY8pO3h_mGHb9Rau6qV3Hzc__QnGzye3UPV9Y9aQMQSVjWK1Eyfa7pwgjH0rmFnaaoS4-oblQyGi6U1SOYYxqSbnfWh7DU8N5b-VwtHP5TfLXyi9ACHodjy_XnQvrX7xhW04gR0lxt7nvNq3EuBTeDMOpWaz4iRGf0nRKD8gb6cWOHM9VmpqM4Ul6hPWaY")'}}
                ></div>
              </div>
              <div className="flex flex-col gap-4">
                <div
                  className="w-full h-64 rounded-xl bg-cover bg-center shadow-lg"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6VyeaDYxSoHwZ0ypEPOIHvNLEv87Lr8FPmXfwfXmCms74zOoloW_GVpgU16OZmFcAir7D7kJ0jn77T-0NaIyA2iEBtnGrY7fi3aOO1PyjNaS_0CmubhcO9qPVN6aD_uxUm7u4hfoZgl1vK-0LE-tBis7Z4mavl6PfAGb2mm12qysPOjDots-G-vo-_4SjykCGEaap6DaG9r7EKJARNlN3p62RNVUmtNZjIVleC1h0cZdo7_-VLiErsLJpMZ4q6z5thLI8kik7boyL")'}}
                ></div>
                <div
                  className="w-full h-48 rounded-xl bg-cover bg-center shadow-lg"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfO-bxydMnzdfiqt7zZ3qPXFAqs3bcG4LT0-9KBjLslx0Qc5y6_2UVE9esre-zJYx-pH-uLD-a8CJQJY41v5qDOPZR4hLFjBBBduyXsphE2QbTAsWIESimSWkgJYSH9__bVEdqigVEwcC8ngIUH-rgBFwMqdVCXT-W2292f_aAsI7G2xutd8prnmQKaSE9PgiGwIPo5mVEbio6uZzC0u4_hea0dyBWM9z76gtnHzbLgU8_01GGYlEfBl5fyw7T-DyZm9UhVs4HnHyo")'}}
                ></div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#0b1618] border-t border-gray-200 dark:border-[#1a2e32] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-2 text-[#0d191b] dark:text-white">
                <div className="flex items-center justify-center size-6 bg-primary rounded text-[#0d191b]">
                  <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
                </div>
                <span className="text-xl font-bold">Maxeria</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Empowering industrial teams with next-gen diagnostic tools. Minimize downtime, maximize sovereignty.
              </p>
              <div className="flex gap-4 mt-2">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">mail</span>
                </a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#0d191b] dark:text-white">Product</h4>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Methodology</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Integrations</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Pricing</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Changelog</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#0d191b] dark:text-white">Company</h4>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">About Us</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Careers</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Blog</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#0d191b] dark:text-white">Legal</h4>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Privacy Policy</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Terms of Service</a>
                <a className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" href="#">Security</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 dark:border-[#1a2e32] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 Maxeria Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="size-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-medium text-gray-500">Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
