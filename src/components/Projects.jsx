"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: 'MyFinanceTracker',
        description: 'A comprehensive financial dashboard allowing users to track expenses, set budgets, and visualize spending habits with interactive charts.',
        tech: ['Next.js', 'TypeScript', 'Chart.js', 'Supabase'],
        github: '#',
        live: '#',
    },
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality, Stripe payment integration, and a CMS for product management.',
        tech: ['React', 'Redux', 'Node.js', 'Stripe'],
        github: '#',
        live: '#',
    },
    {
        title: 'TaskMaster AI',
        description: 'An AI-powered task management app that auto-prioritizes to-do lists based on deadlines and task complexity.',
        tech: ['Python', 'FastAPI', 'React', 'OpenAI API'],
        github: '#',
        live: '#',
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-white"><span className="text-[var(--color-accent)]">03.</span> Projects</h2>

                    </div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-[#1e293b] p-8 rounded-lg shadow-xl flex flex-col h-full group"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <Folder size={40} className="text-[var(--color-accent)]" />
                                    <div className="flex gap-4 text-gray-400">
                                        <a href={project.github} className="hover:text-[var(--color-accent)] transition-colors"><Github size={20} /></a>
                                        <a href={project.live} className="hover:text-[var(--color-accent)] transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--color-accent)] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-3 text-sm font-mono text-gray-500">
                                    {project.tech.map((t, i) => (
                                        <span key={i}>{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
