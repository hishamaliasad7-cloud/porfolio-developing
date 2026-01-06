"use client";

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="intro" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="space-y-6"
                >
                    <motion.p
                        variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                        className="text-[var(--color-accent)] font-mono text-lg"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight"
                    >
                        Hisham Ali Asad<span className="text-[var(--color-accent)]">.</span>
                    </motion.h1>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        className="text-4xl md:text-5xl font-bold text-gray-400"
                    >
                        I build things for the web.
                    </motion.h2>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        className="max-w-lg text-gray-400 text-lg leading-relaxed"
                    >
                        I'm a software engineer specializing in building (and designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        className="flex items-center space-x-4 pt-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-[var(--color-accent)] text-black font-bold rounded hover:bg-[#e6a700] transition-colors flex items-center gap-2"
                        >
                            Check out my work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-gray-600 text-white font-bold rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className="flex items-center space-x-6 pt-8"
                    >
                        <a href="https://vercel.com/hishams-projects-4809bd21" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/hisham-ali-asad-591172339/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hishamaiasad7@gmail.com" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Decor / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[var(--color-accent)] p-2">
                        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative group">
                            <img
                                src="/profile.jpg"
                                alt="Hisham Ali Asad"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
