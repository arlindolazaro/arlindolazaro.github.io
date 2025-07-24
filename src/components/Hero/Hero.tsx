import minhaFoto from '../../assets/images/photo1.jpeg'; // ajuste o caminho se necessário
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-20">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">OLÁ, EU SOU</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">ARLINDO CAU</h1>
          <h3 className="text-2xl md:text-3xl text-indigo-600 mb-8">WEB DEVELOPER</h3>

          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              CONTRATE-ME
            </a>
            <a
              href="/Arlindo_Cau_CV.pdf"
              download
              className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition-colors"
            >
              BAIXAR CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-200 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={minhaFoto}
              alt="Foto de Arlindo Cau"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;