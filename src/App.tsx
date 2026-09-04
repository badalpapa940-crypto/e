import { useEffect, useState } from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Work } from '@/components/Work';
import { Stats } from '@/components/Stats';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-paper-dark dark:text-ink-dark">
      <Nav dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
