import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        {/* id="products" lives inside Services for nav anchor */}
        <Services />
        {/* id="features" alias — scrolls to products */}
        <div id="features" style={{ marginTop: '-1px' }} aria-hidden="true" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
