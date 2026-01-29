'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    router.push('/verify');
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#0d191b] dark:text-white min-h-screen flex flex-col items-center justify-center p-6 blueprint-bg">
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background-light/30 to-background-light dark:via-background-dark/30 dark:to-background-dark pointer-events-none"></div>

      <main className="relative w-full max-w-[440px] z-10">
        <div className="bg-white dark:bg-[#15262a] rounded-xl shadow-2xl border border-gray-200 dark:border-[#2a3e42] p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="flex items-center justify-center size-12 bg-primary/20 rounded-lg text-primary mb-5 ring-1 ring-primary/30 hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight text-[#0d191b] dark:text-white">Sign in to Maxeria</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 text-center">Secure access to the industrial diagnostic suite</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#0d191b] dark:text-white" htmlFor="email">
                Professional Email
              </label>
              <div className="relative">
                <input
                  className="w-full h-11 px-4 rounded-lg border-gray-300 dark:border-[#2a3e42] bg-gray-50 dark:bg-[#101f22] text-[#0d191b] dark:text-white focus:border-primary focus:ring-primary shadow-sm text-sm placeholder-gray-400 transition-colors"
                  id="email"
                  name="email"
                  placeholder="engineer@company.com"
                  required
                  type="email"
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-bold text-[#0d191b] dark:text-white" htmlFor="password">
                  Password
                </label>
                <a className="text-xs font-semibold text-primary hover:text-cyan-600 transition-colors" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  className="w-full h-11 px-4 rounded-lg border-gray-300 dark:border-[#2a3e42] bg-gray-50 dark:bg-[#101f22] text-[#0d191b] dark:text-white focus:border-primary focus:ring-primary shadow-sm text-sm placeholder-gray-400 transition-colors"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined text-lg">lock</span>
                </div>
              </div>
            </div>

            <button
              className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-[#0d191b] text-base font-bold transition-all shadow-lg shadow-primary/20 mt-2"
              type="submit"
            >
              Sign In
              <span className="material-symbols-outlined text-lg">login</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?
              <Link className="font-bold text-[#0d191b] dark:text-white hover:text-primary transition-colors ml-1 underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4" href="/signup">
                Create an Account
              </Link>
            </p>
          </div>

          <div className="relative mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-[#2a3e42]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white dark:bg-[#15262a] text-gray-400 text-xs font-bold uppercase tracking-wider">Enterprise SSO</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              className="w-full h-11 flex items-center justify-center gap-3 rounded-lg border border-gray-200 dark:border-[#2a3e42] bg-white dark:bg-[#101f22] hover:bg-gray-50 dark:hover:bg-[#1a2e32] text-[#0d191b] dark:text-white text-sm font-semibold transition-colors group"
              type="button"
            >
              <span className="material-symbols-outlined text-blue-700 group-hover:scale-110 transition-transform">diamond</span>
              Log in with SAP
            </button>
            <button
              className="w-full h-11 flex items-center justify-center gap-3 rounded-lg border border-gray-200 dark:border-[#2a3e42] bg-white dark:bg-[#101f22] hover:bg-gray-50 dark:hover:bg-[#1a2e32] text-[#0d191b] dark:text-white text-sm font-semibold transition-colors group"
              type="button"
            >
              <span className="material-symbols-outlined text-sky-500 group-hover:scale-110 transition-transform">grid_view</span>
              Log in with Azure AD
            </button>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-sm">support</span>
            <span>Having trouble? <a className="hover:text-primary transition-colors" href="#">Contact Support</a></span>
          </div>
          <p className="text-xs text-gray-400">
            © 2024 Maxeria Inc. <br className="sm:hidden" /> Protected by reCAPTCHA and Subject to Privacy Policy.
          </p>
        </div>
      </main>
    </div>
  );
}
