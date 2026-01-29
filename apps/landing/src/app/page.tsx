import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { VisualIntegration } from '@/components/VisualIntegration';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <VisualIntegration />
      </main>
      <Footer />
    </>
  );
}
