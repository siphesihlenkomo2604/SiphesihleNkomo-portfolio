import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MetricsBanner from '@/components/MetricsBanner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AppProvider } from '@/lib/theme';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-nude-100 dark:bg-rose-100 text-nude-600 dark:text-rose-300 transition-colors duration-500 selection:bg-nude-300/40 dark:selection:bg-rose-300/40">
        <Navbar />
        <main>
          <Hero />
          <MetricsBanner />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
