import React, { useRef, useState } from 'react';
import type { ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    strength?: number;
    href?: string;
    target?: string;
    rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    onClick,
    className = '',
    strength = 0.35,
    href,
    target,
    rel,
}) => {
    const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setPos({
            x: (e.clientX - rect.left - rect.width / 2) * strength,
            y: (e.clientY - rect.top - rect.height / 2) * strength,
        });
    };

    const handleMouseLeave = () => setPos({ x: 0, y: 0 });

    const sharedProps = {
        animate: pos,
        transition: { type: 'spring' as const, stiffness: 150, damping: 12, mass: 0.1 },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: `relative inline-flex items-center justify-center transition-shadow duration-300 ${className}`,
    };

    if (href) {
        return (
            <motion.a ref={ref} href={href} target={target} rel={rel} {...sharedProps}>
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button ref={ref} onClick={onClick} {...sharedProps}>
            {children}
        </motion.button>
    );
};

export default MagneticButton;