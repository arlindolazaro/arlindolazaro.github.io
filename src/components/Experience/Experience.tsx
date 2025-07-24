import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ujcLogo from '../../assets/images/ujc-logo.png';
import unitecLogo from '../../assets/images/unitec-photo.ico';
import { FiExternalLink } from 'react-icons/fi';
import experienceBg from '../../assets/images/bg-paralax.jpg'; // Ou outra imagem profissional

const experiences = [
    {
        position: "Desenvolvedor de Sistemas",
        company: "Universidade Joaquim Chissano (UJC)",
        period: "Jan 2024 - Jul 2024",
        location: "Maputo, Moçambique",
        logo: ujcLogo,
        link: "https://demo.ujc.ac.mz/",
        responsibilities: [
            "Desenvolvi e optimizei APIs e interfaces webs, aumentando a eficiência do sistema em 20%",
            "Implementei soluções com Java, Spring Boot e React, reduzindo erros em produção em 15%",
            "Colaborei com equipes multidisciplinares para entrega de projetos com alta qualidade",
            "Documentei processos técnicos e treinei novos desenvolvedores"
        ]
    },
    {
        position: "Técnico de Redes de Computadores",
        company: "UNITEC Academy",
        period: "Set 2021 - Jan 2022",
        location: "Maputo, Moçambique",
        logo: unitecLogo,
        link: "https://unitec.ac.mz/",
        responsibilities: [
            "Gerenciei configuração e optimização de redes, aumentando a estabilidade em 25%",
            "Diagnostiquei e solucionei problemas técnicos, reduzindo tempo de inatividade em 30%",
            "Desenvolvi documentação técnica para protocolos de rede"
        ]
    }
];

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section id="experience" className="relative py-20 overflow-hidden">
            {/* Efeito Parallax */}
            <motion.div 
                style={{ y: yBg }}
                className="absolute inset-0 z-0"
            >
                <img 
                    src={experienceBg} 
                    alt="Background abstrato profissional" 
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-indigo-900/20"></div>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-400">
                            EXPERIÊNCIA PROFISSIONAL
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Minha jornada profissional e conquistas ao longo dos anos
                    </p>
                </motion.div>

                <div ref={ref} className="max-w-5xl mx-auto grid gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full bg-white p-2 shadow-md flex items-center justify-center">
                                        <img 
                                            src={exp.logo} 
                                            alt={`${exp.company} logo`} 
                                            className="w-16 h-16 object-contain"
                                        />
                                    </div>
                                    <a 
                                        href={exp.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                                    >
                                        <FiExternalLink size={14} />
                                        Visitar site
                                    </a>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                                            <p className="text-gray-700 font-medium flex items-center gap-2">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full text-sm">
                                                {exp.period}
                                            </span>
                                            <span className="text-gray-500 text-sm mt-1">{exp.location}</span>
                                        </div>
                                    </div>
                                    
                                    <ul className="space-y-3 text-gray-600">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-indigo-500 mt-1">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <span className="flex-1">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
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