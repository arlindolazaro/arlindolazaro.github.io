export interface Certificate {
    id: number;
    title: string;
    image: string;
    alt: string;
}

const certificates: Certificate[] = [
    {
        id: 1,
        title: 'Competências Pessoais Aplicadas',
        image: '/images/Certifcado_1.webp',
        alt: 'Certificado Competências Pessoais Aplicadas',
    },
    {
        id: 2,
        title: 'Ready to Work – Absa',
        image: '/images/Certifcado_2.webp',
        alt: 'Certificado Ready to Work Absa',
    },
    {
        id: 3,
        title: 'Java Completo – Programação Orientada a Objetos',
        image: '/images/Certifcado_3.webp',
        alt: 'Certificado Java Programação Orientada a Objetos',
    },
    {
        id: 4,
        title: 'Sistemas Informáticos & Redes',
        image: '/images/Certifcado_4.webp',
        alt: 'Certificado Sistemas Informáticos e Redes',
    },
    {
        id: 5,
        title: 'Fundamentos de Data Science & IA',
        image: '/images/Certifcado_5.webp',
        alt: 'Certificado Data Science e Inteligência Artificial',
    },
    {
        id: 6,
        title: 'HCIA-Datacom V1.0 – Huawei',
        image: '/images/Certificado_6.webp',
        alt: 'Certificado Huawei HCIA Datacom',
    },
    {
        id: 7,
        title: 'Desenvolvimento Web Completo',
        image: '/images/Certificado_7.webp',
        alt: 'Certificado Desenvolvimento Web Completo',
    },
];

export default certificates;
