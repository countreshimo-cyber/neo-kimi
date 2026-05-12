import { useState, useCallback } from 'react';
import Navigation from '../components/Navigation';
import Preloader from '../components/Preloader';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import FloorTypes from '../sections/FloorTypes';
import Stabilization from '../sections/Stabilization';
import Clients from '../sections/Clients';
import Equipment from '../sections/Equipment';
import Certificates from '../sections/Certificates';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <FloorTypes />
        <Stabilization />
        <Clients />
        <Equipment />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
