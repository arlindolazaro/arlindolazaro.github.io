import { useEffect, useState } from 'react';

interface UseScrollSpyOptions {
    paths: string[];
    offset?: number;
}

export const useScrollSpy = ({ paths, offset = 0.35 }: UseScrollSpyOptions) => {
    const [activeSection, setActiveSection] = useState<string>(paths[0] ?? '');

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight * offset;

            for (const path of paths) {
                const section = document.querySelector(path);
                if (!section) continue;

                const top = section.getBoundingClientRect().top + window.scrollY;
                const height = section.clientHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(path);
                    break;
                }
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [paths, offset]);

    return activeSection;
};