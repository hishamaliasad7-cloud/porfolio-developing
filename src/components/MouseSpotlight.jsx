"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseSpotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
            animate={{
                background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />
    );
};

export default MouseSpotlight;
