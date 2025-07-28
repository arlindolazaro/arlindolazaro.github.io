import { AnimatedDivider } from '../../common/AnimatedDivider';
import { SectionTitle } from '../../common/SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionTitle>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Vamos Conversar
            </span>
          </SectionTitle>
          
          <AnimatedDivider />
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Estou disponível para oportunidades e colaborações. Entre em contacto!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;