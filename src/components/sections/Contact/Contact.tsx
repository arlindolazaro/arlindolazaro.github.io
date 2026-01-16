import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => (
  <section
    id="contact"
    className="relative py-24 bg-black overflow-hidden"
  >
    {/* Gradiente elegante para seção final antes do footer */}
    <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-neutral-950 pointer-events-none" />

    <div className="relative container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <SectionTitle>
          Vamos Conversar
        </SectionTitle>
        <AnimatedDivider />
        <p className="mt-6 text-neutral-300 text-lg">
          Pronto para transformar ideias em soluções digitais sólidas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
