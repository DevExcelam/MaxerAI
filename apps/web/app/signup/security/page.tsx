'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupSecurityPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSyncing(true);
    // Simulate completion
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#0d191b] dark:text-white min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-[#e7f1f3] dark:border-[#1a2e32]">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#0d191b] dark:text-white cursor-pointer">
            <div className="flex items-center justify-center size-8 bg-primary/20 rounded-lg text-primary">
              <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Maxeria</h2>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500 dark:text-gray-400">Need help?</span>
            <Link className="font-bold text-primary hover:text-cyan-600 transition-colors" href="#">Support</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 blueprint-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between relative">
              <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 absolute top-4 left-0 w-full -z-0"></div>
              <div className="w-full h-0.5 bg-primary/30 absolute top-4 left-0 -z-0"></div>
              <div className="w-3/4 h-0.5 bg-primary absolute top-4 left-0 -z-0"></div>
              
              <div className="flex flex-col items-center relative z-10">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#0d191b] font-bold text-sm ring-4 ring-background-light dark:ring-background-dark">
                  <span className="material-symbols-outlined text-lg font-bold">check</span>
                </div>
                <span className="text-xs font-bold mt-2 text-[#0d191b] dark:text-white uppercase tracking-wider">Profile</span>
              </div>
              
              <div className="flex flex-col items-center relative z-10">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#0d191b] font-bold text-sm ring-4 ring-background-light dark:ring-background-dark border-2 border-transparent">
                  <span className="material-symbols-outlined text-lg font-bold">check</span>
                </div>
                <span className="text-xs font-bold mt-2 text-[#0d191b] dark:text-white uppercase tracking-wider">Organization</span>
              </div>
              
              <div className="flex flex-col items-center relative z-10">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#0d191b] font-bold text-sm ring-4 ring-background-light dark:ring-background-dark border-2 border-transparent shadow-[0_0_15px_rgba(19,200,236,0.5)]">3</div>
                <span className="text-xs font-bold mt-2 text-primary uppercase tracking-wider">Security</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#101f22] rounded-xl shadow-xl border border-gray-100 dark:border-[#1a2e32] overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0d191b] dark:text-white mb-2">Secure your account</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Step 3 of 3: Security & Local Sync</p>
              </div>

              <form onSubmit={handleComplete} className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#0d191b] dark:text-white" htmlFor="password">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-xl">lock</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-[#2a3e42] rounded-lg bg-gray-50 dark:bg-[#152529] text-[#0d191b] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm outline-none"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-semibold text-[#0d191b] dark:text-white" htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-xl">lock_reset</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-[#2a3e42] rounded-lg bg-gray-50 dark:bg-[#152529] text-[#0d191b] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm outline-none"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                    />
                  </div>
                  <div className="mt-2">
                    <div className="flex gap-1.5 h-1.5">
                      <div className="w-1/4 h-full rounded-full bg-primary"></div>
                      <div className="w-1/4 h-full rounded-full bg-primary"></div>
                      <div className="w-1/4 h-full rounded-full bg-primary/30 dark:bg-gray-700"></div>
                      <div className="w-1/4 h-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <p className="text-xs text-primary mt-1.5 font-medium">Strength: Medium</p>
                  </div>
                </div>

                <div className="py-2 flex items-center justify-between group cursor-pointer">
                  <div className="flex-1 pr-4">
                    <label className="block text-sm font-bold text-[#0d191b] dark:text-white cursor-pointer" htmlFor="otp-toggle">Enable Two-Factor Authentication (OTP)</label>
                    <p className="text-xs text-gray-500 mt-0.5">Recommended for high-security industrial environments.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" id="otp-toggle" type="checkbox" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>

                <hr className="border-gray-100 dark:border-[#2a3e42]" />

                <div className="bg-gray-50 dark:bg-[#152529] border border-gray-200 dark:border-[#2a3e42] rounded-lg p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-[#0d191b] dark:text-white">dns</span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-[#0d191b] dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">database</span>
                        Local Database Initialization
                      </h3>
                      <span className="text-xs font-mono text-primary animate-pulse">{isSyncing ? 'Syncing...' : 'Ready'}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2 overflow-hidden">
                      <div className={`bg-primary h-2.5 rounded-full relative transition-all duration-1000 ${isSyncing ? 'w-full' : 'w-[65%]'}`}>
                        <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Local Encryption Key Generation</span>
                      <span className="font-mono text-[#0d191b] dark:text-white font-bold">{isSyncing ? '100%' : '65%'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-[#0d191b] font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] disabled:opacity-50"
                    type="submit"
                    disabled={isSyncing}
                  >
                    <span className="material-symbols-outlined text-xl">{isSyncing ? 'sync' : 'sync_saved_locally'}</span>
                    <span>{isSyncing ? 'Establishing Sync...' : 'Complete Registration & Start Syncing'}</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-gray-50 dark:bg-[#152529] px-8 py-4 border-t border-gray-100 dark:border-[#2a3e42] flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-base">verified_user</span>
              <span>End-to-end encryption enabled by default.</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm">
            <Link className="text-gray-500 hover:text-[#0d191b] dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-gray-500 hover:text-[#0d191b] dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Terms of Service</Link>
            <Link className="text-gray-500 hover:text-[#0d191b] dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Contact Support</Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-gray-400 dark:text-gray-600 bg-background-light dark:bg-background-dark">
        <p>© 2024 Maxeria Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
