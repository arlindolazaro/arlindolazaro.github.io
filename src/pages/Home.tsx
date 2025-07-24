import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Project from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;