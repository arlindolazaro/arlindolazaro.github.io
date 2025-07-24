import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ujcLogo from '../../assets/images/ujc-logo.png';
import unitecLogo from '../../assets/images/unitec-photo.ico';
import { FiExternalLink } from 'react-icons/fi';
import experienceBg from '../../assets/images/bg-paralax.jpg';

const experiences = [
    {
        position: "Desenvolvedor de Sistemas",
        company: "Universidade Joaquim Chissano (UJC)",
        period: "Jan 2024 - Jul 2024",
        location: "Cidade de Maputo, Moçambique",
        logo: ujcLogo,
        link: "https://demo.ujc.ac.mz/",
        responsibilities: [
            "Desenvolvi e optimizei APIs e interfaces webs, aumentando a eficiência do sistema em 20%",
            "Implementei soluções com Java, Spring Boot e React, reduzindo erros em produção em 15%",
            "Colaborei com equipes multidisciplinares para entrega de projectos com alta qualidade",
            "Documentei processos técnicos e treinei novos desenvolvedores"
        ],
        techStack: ["Java", "Spring Boot", "React", "MySQL"]
    },
    {
        position: "Técnico de Redes de Computadores",
        company: "UNITEC Academy",
        period: "Set 2021 - Jan 2022",
        location: "Cidade de Maputo, Moçambique",
        logo: unitecLogo,
        link: "https://unitec.ac.mz/",
        responsibilities: [
            "Gerenciei configuração e optimização de redes, aumentando a estabilidade em 25%",
            "Diagnostiquei e solucionei problemas técnicos, reduzindo tempo de inatividade em 30%",
            "Desenvolvi documentação técnica para protocolos de rede"
        ],
        techStack: ["Redes"]
    }
];

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section id="experience" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Parallax Background */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={experienceBg}
                    alt="Background profissional"
                    className="w-full h-full object-cover opacity-20 dark:opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-indigo-900/10 dark:from-indigo-900/20 dark:to-indigo-900/40"></div>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                            Experiência Profissional
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Minha jornada profissional e conquistas significativas
                    </p>
                </motion.div>

                <div ref={ref} className="max-w-6xl mx-auto grid gap-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>

                            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Logo Section */}
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 p-3 shadow-md flex items-center justify-center border border-gray-200 dark:border-gray-600">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-20 h-20 object-contain"
                                            />
                                        </div>
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30"
                                        >
                                            <FiExternalLink size={14} />
                                            Visitar site
                                        </a>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{exp.position}</h3>
                                                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full text-sm">
                                                    {exp.period}
                                                </span>
                                                <span className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                                                    <svg className="inline mr-1" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                                                    </svg>
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {exp.techStack.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Responsibilities */}
                                        <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                                            {exp.responsibilities.map((resp, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="flex-1">{resp}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;