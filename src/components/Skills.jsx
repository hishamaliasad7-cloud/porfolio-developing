"use client";

import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiFastapi, SiPostgresql, SiMongodb } from 'react-icons/si';

const skillCategories = [
    {
        title: 'FRONTEND',
        skills: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        ]
    },
    {
        title: 'BACKEND',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '#ffffff' },
            { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { name: 'Python', icon: FaPython, color: '#3776AB' },
        ]
    },
    {
        title: 'DATABASES & TOOLS',
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-[var(--color-primary-bg)] relative overflow-hidden">
            {/* Background Decor to match "modern" feel */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Layers className="text-[var(--color-accent)]" size={32} />
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)]">Tech Stack</h2>
                    </div>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Tools I use to build fast, modern, and scalable web experiences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-6"
                        >
                            <h3 className="text-gray-500 font-bold tracking-widest text-xs uppercase">{category.title}</h3>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
                                        className="bg-[#111827] border border-gray-800 p-4 rounded-lg flex flex-col items-center gap-3 transition-all group"
                                    >
                                        <skill.icon
                                            size={32}
                                            style={{ color: skill.color }}
                                            className="filter drop-shadow-lg group-hover:scale-110 transition-transform"
                                        />
                                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
