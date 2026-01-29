'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function TwoFactorPage() {
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual verification logic
    router.push('/dashboard');
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#0d191b] dark:text-white h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-[#e7f1f3] dark:border-[#1a2e32]">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#0d191b] dark:text-white">
            <div className="flex items-center justify-center size-8 bg-primary/20 rounded-lg text-primary">
              <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Maxeria</h2>
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Secure Session</span>
            <span className="material-symbols-outlined text-green-500 text-lg">lock</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative blueprint-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md bg-white dark:bg-[#0b1618] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#1a2e32] p-8 md:p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-4xl">shield_lock</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0d191b] dark:text-white mb-2 text-center">Security Verification</h1>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm leading-relaxed">
              Enter the code sent to your registered mobile device or authenticator app.
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-8">
            <div className="flex justify-center gap-3">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  autoFocus={index === 0}
                  className="w-12 h-14 text-center text-2xl font-bold rounded-lg border-2 border-gray-200 dark:border-[#2a3e42] bg-gray-50 dark:bg-[#101f22] text-[#0d191b] dark:text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors"
                  maxLength={1}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>

            <div className="space-y-4">
              <button
                className="w-full h-12 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-[#0d191b] text-base font-bold transition-all shadow-lg shadow-primary/20"
                type="submit"
              >
                Verify & Continue
              </button>
              <div className="text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Didn&apos;t receive the code?</span>
                <button className="ml-1 text-sm font-semibold text-primary hover:underline hover:text-primary/80 transition-colors" type="button">
                  Resend Code
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#1a2e32] flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Step 2 of 6</span>
            <div className="flex gap-1.5">
              <div className="h-1 w-8 rounded-full bg-primary"></div>
              <div className="h-1 w-8 rounded-full bg-primary"></div>
              <div className="h-1 w-2 rounded-full bg-gray-200 dark:bg-[#2a3e42]"></div>
              <div className="h-1 w-2 rounded-full bg-gray-200 dark:bg-[#2a3e42]"></div>
              <div className="h-1 w-2 rounded-full bg-gray-200 dark:bg-[#2a3e42]"></div>
              <div className="h-1 w-2 rounded-full bg-gray-200 dark:bg-[#2a3e42]"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 w-full text-center">
          <a className="text-sm text-gray-400 hover:text-primary transition-colors" href="#">Having trouble logging in? Contact Support</a>
        </div>
      </main>
    </div>
  );
}
