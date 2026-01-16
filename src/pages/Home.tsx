import { Suspense, lazy } from 'react';
import { ScrollToTop } from '../components/utils/ScrollToTop';
import Header from '../components/sections/Header/Header';
import Hero from '../components/sections/Hero/Hero';

// Lazy load seções pesadas para otimizar bundle
const About = lazy(() => import('../components/sections/About/About'));
const Services = lazy(() => import('../components/sections/Services/Services'));
const Certificates = lazy(() => import('../components/sections/Certificates/Certificates'));
const Projects = lazy(() => import('../components/sections/Projects/Projects'));
const Experience = lazy(() => import('../components/sections/Experience/Experience'));
const Skills = lazy(() => import('../components/sections/Experience/Skills'));
const Education = lazy(() => import('../components/sections/Experience/Education'));
const Contact = lazy(() => import('../components/sections/Contact/Contact'));
const Footer = lazy(() => import('../components/sections/Footer/Footer'));

// Componente de loading minimalista
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-8 h-8 border-4 border-neutral-200 dark:border-neutral-700 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

export const Home = () => {
  return (
    <div id="site-root" className="overflow-x-hidden">
      <Header />
      <Hero />
      
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Certificates />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Education />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

      <ScrollToTop />
    </div>
  );
};
