export interface Certificate {
    id: number;
    title: string;
    image: string;
    alt: string;
    document?: string;
}

const certificates: Certificate[] = [
    {
        id: 1,
        title: 'Certificado: Competências Pessoais Aplicadas',
        image: '/images/Certifcado_1.webp',
        alt: 'Certificado Competências Pessoais Aplicadas',
    },
    {
        id: 2,
        title: 'Certificado: Ready to Work - Absa',
        image: '/images/Certifcado_2.webp',
        alt: 'Certificado Ready to Work - Absa',
    },
    {
        id: 3,
        title: 'Certificado: Java COMPLETO Programação Orientada a Objetos + Projetos',
        image: '/images/Certifcado_3.webp',
        alt: 'Certificado Java COMPLETO Programação Orientada a Objetos + Projetos',
    },
    {
        id: 4,
        title: 'Certificado: Sistemas Informáticos, Reparação de Computadores, Programação e Administração de Redes',
        image: '/images/Certifcado_4.webp',
        alt: 'Certificado Sistemas Informáticos, Reparação de Computadores, Programação e Administração de Redes',
    },
    {
        id: 5,
        title: 'Certificado: Fundamentos de Data Science e Inteligência Artificial',
        image: '/images/Certifcado_5.webp',
        alt: 'Certificado Fundamentos de Data Science e Inteligência Artificial',
    },
    {
        id: 6,
        title: 'Certificado: HCIA-Datacom V1.0 Course - Huawei',
        image: '/images/Certificado_6.webp',
        alt: 'Certificado HCIA-Datacom V1.0 Course - Huawei',
    },
    {
        id: 7,
        title: 'Certificado: Desenvolvimento Web Completo - 20 cursos + 20 projetos',
        image: '/images/Certificado_7.webp',
        alt: 'Certificado Desenvolvimento Web Completo - Udemy',
    },
];

export default certificates;