import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Serveis from './components/Serveis';
import Estudis from './components/Estudis';
import QuiSoc from './components/QuiSoc';
import Contacta from './components/Contacta';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Serveis />
        <Estudis />
        <QuiSoc />
        <Contacta />
      </main>
      <Footer />
    </>
  );
}
