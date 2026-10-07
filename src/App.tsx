import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import LiquidMarble from './components/LiquidMarble';

function App() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* WebGL Liquid Marble Background */}
      <LiquidMarble goldRatio={0.715} />
      
      {/* Almost total black overlay removed since WebGL shader controls the darkness natively */}
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Services />
        <Reservation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
