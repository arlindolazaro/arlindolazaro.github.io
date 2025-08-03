import { ScrollToTop } from '../components/utils/ScrollToTop';
import Header from '../components/sections/Header/Header';
import Hero from '../components/sections/Hero/Hero';
import About from '../components/sections/About/About';
import Services from '../components/sections/Services/Services';
import Projects from '../components/sections/Projects/Projects';
import Experience from '../components/sections/Experience/Experience';
import Contact from '../components/sections/Contact/Contact';
import Footer from '../components/sections/Footer/Footer';

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};
