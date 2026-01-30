import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyItMatters } from './components/WhyItMatters';
import { InsuranceSection } from './components/InsuranceSection';
import { ScenarioCalculator } from './components/ScenarioCalculator';
import { FinalCTA } from './components/FinalCTA';
import { SourcesCitation } from './components/SourcesCitation';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyItMatters />
        <InsuranceSection />
        <ScenarioCalculator />
        <FinalCTA />
        <SourcesCitation />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
