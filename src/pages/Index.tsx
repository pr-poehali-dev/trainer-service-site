import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Programs />
      <Results />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
