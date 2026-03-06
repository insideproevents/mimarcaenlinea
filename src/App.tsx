import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { ValueProposition } from './sections/ValueProposition';
import { Services } from './sections/Services';
import { Stats } from './sections/Stats';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { InteractiveRobot } from './components/InteractiveRobot';
import { LanguageProvider } from './hooks/useLanguage';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <ValueProposition />
          <Stats />
          <About />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Robot Character */}
        <InteractiveRobot />
      </div>
    </LanguageProvider>
  );
}

export default App;
