'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic and navigate to step 2
    router.push('/signup/organization');
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
            <span className="text-gray-500 dark:text-gray-400">Already have an account?</span>
            <Link className="font-bold text-primary hover:text-cyan-600 transition-colors" href="/login">Log In</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 blueprint-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-lg">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between relative">
              <div className="flex flex-col items-center relative z-10">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#0d191b] font-bold text-sm ring-4 ring-background-light dark:ring-background-dark">1</div>
                <span className="text-xs font-bold mt-2 text-[#0d191b] dark:text-white uppercase tracking-wider">Profile</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 absolute top-4 left-0 w-full -z-0"></div>
              <div className="w-1/4 h-0.5 bg-primary absolute top-4 left-0 -z-0"></div>
              <div className="flex flex-col items-center relative z-10">
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 font-bold text-sm ring-4 ring-background-light dark:ring-background-dark border-2 border-transparent">2</div>
                <span className="text-xs font-medium mt-2 text-gray-400 dark:text-gray-500 uppercase tracking-wider">Organization</span>
              </div>
              <div className="flex flex-col items-center relative z-10">
                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 font-bold text-sm ring-4 ring-background-light dark:ring-background-dark border-2 border-transparent">3</div>
                <span className="text-xs font-medium mt-2 text-gray-400 dark:text-gray-500 uppercase tracking-wider">Security</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-[#101f22] rounded-xl shadow-xl border border-gray-100 dark:border-[#1a2e32] overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0d191b] dark:text-white mb-2">Create your account</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Step 1 of 3: Personal Profile</p>
              </div>

              <form onSubmit={handleNext} className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#0d191b] dark:text-white" htmlFor="fullName">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-[#2a3e42] rounded-lg bg-gray-50 dark:bg-[#152529] text-[#0d191b] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm outline-none"
                      id="fullName"
                      name="fullName"
                      placeholder="e.g. Sarah Connor"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#0d191b] dark:text-white" htmlFor="email">Work Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-[#2a3e42] rounded-lg bg-gray-50 dark:bg-[#152529] text-[#0d191b] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm outline-none"
                      id="email"
                      name="email"
                      placeholder="sarah@manufacturing.corp"
                      required
                      type="email"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Please use your company email address for organization verification.</p>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#0d191b] dark:text-white" htmlFor="phone">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-[#2a3e42] rounded-lg bg-gray-50 dark:bg-[#152529] text-[#0d191b] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm outline-none"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-[#0d191b] font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
                    type="submit"
                  >
                    <span>Next: Organization Details</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-gray-50 dark:bg-[#152529] px-8 py-4 border-t border-gray-100 dark:border-[#2a3e42] flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-base">lock</span>
              <span>Your data is encrypted and stored locally.</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm">
            <a className="text-gray-500 hover:text-[#0d191b] dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="text-gray-500 hover:text-[#0d191b] dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="text-gray-500 hover:text-[#0d191b] dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Contact Support</a>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-gray-400 dark:text-gray-600 bg-background-light dark:bg-background-dark">
        <p>© 2024 Maxeria Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
