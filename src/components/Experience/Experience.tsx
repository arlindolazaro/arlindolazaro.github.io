import { motion } from 'framer-motion';

const experiences = [
    {
        position: "Desenvolvedor de Sistemas",
        company: "Universidade Joaquim Chissano (UJC)",
        period: "Jan 2024 - Jul 2024",
        location: "Maputo, Moçambique",
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
        responsibilities: [
            "Gerenciei configuração e optimização de redes, aumentando a estabilidade em 25%",
            "Diagnostiquei e solucionei problemas técnicos, reduzindo tempo de inatividade em 30%",
            "Desenvolvi documentação técnica para protocolos de rede"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">EXPERIÊNCIA PROFISSIONAL</h2>
                    <p className="text-gray-600">
                        Minha jornada profissional e conquistas ao longo dos anos
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                                <span className="text-indigo-600">{exp.period}</span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <p className="text-gray-700 font-medium">{exp.company}</p>
                                <p className="text-gray-500">{exp.location}</p>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                {exp.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;