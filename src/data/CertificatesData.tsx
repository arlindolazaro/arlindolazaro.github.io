export interface Certificate {
    id: number;
    titleKey: string;
    image: string;
    alt: string;
}

const certificates: Certificate[] = [
    { id: 1, titleKey: 'certificates.items.cert1', image: '/images/Certifcado_1.webp', alt: 'Certificate 1' },
    { id: 2, titleKey: 'certificates.items.cert2', image: '/images/Certifcado_2.webp', alt: 'Certificate 2' },
    { id: 3, titleKey: 'certificates.items.cert3', image: '/images/Certifcado_3.webp', alt: 'Certificate 3' },
    { id: 4, titleKey: 'certificates.items.cert4', image: '/images/Certifcado_4.webp', alt: 'Certificate 4' },
    { id: 5, titleKey: 'certificates.items.cert5', image: '/images/Certifcado_5.webp', alt: 'Certificate 5' },
    { id: 6, titleKey: 'certificates.items.cert6', image: '/images/Certificado_6.webp', alt: 'Certificate 6' },
    { id: 7, titleKey: 'certificates.items.cert7', image: '/images/Certificado_7.webp', alt: 'Certificate 7' },
];

export default certificates;