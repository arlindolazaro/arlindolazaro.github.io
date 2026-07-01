import { lazy, Suspense } from 'react';
import Header from '../components/sections/Header/Header';

// Lazy load de todas as secções (não carregam até serem necessárias)
const Hero = lazy(() => import('../components/sections/Hero/Hero'));
const About = lazy(() => import('../components/sections/About/About'));
const Services = lazy(() => import('../components/sections/Services/Services'));
const Certificates = lazy(() => import('../components/sections/Certificates/Certificates'));
const Projects = lazy(() => import('../components/sections/Projects/Projects'));
const Experience = lazy(() => import('../components/sections/Experience/Experience'));
const Education = lazy(() => import('../components/sections/Experience/Education'));
const Skills = lazy(() => import('../components/sections/Experience/Skills'));
const Contact = lazy(() => import('../components/sections/Contact/Contact'));
const Footer = lazy(() => import('../components/sections/Footer/Footer'));

// Fallback mínimo entre secções durante carregamento
const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export const Home = () => (
  <main className="bg-black text-white overflow-x-hidden">
    <Header />
    <Suspense fallback={null}>
      <Hero />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <About />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Services />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Certificates />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Projects />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Experience />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Education />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Skills />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Contact />
    </Suspense>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </main>
);