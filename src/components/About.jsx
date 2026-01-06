"use client";

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-white"><span className="text-[var(--color-accent)]">01.</span> About Me</h2>

                    </div>

                    <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                        <p>
                            Hi, I’m Hisham, a Computer Science Engineering student and aspiring full-stack developer passionate about building clean, responsive, and user-friendly web applications.
                        </p>
                        <p>
                            I started my web development journey in 2023, exploring HTML and CSS, and gradually moved into modern JavaScript frameworks and backend development. Since then, I’ve worked on academic and personal projects that strengthened my understanding of frontend design, API integration, and performance optimization.
                        </p>
                        <p>
                            I enjoy turning ideas into practical digital solutions while focusing on usability, accessibility, and clean code. I’m actively improving my skills in modern web technologies and looking forward to contributing to real-world projects in a collaborative development environment.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> JavaScript (ES6+)</li>
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> React</li>
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> Node.js</li>
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> TypeScript</li>
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> Next.js</li>
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> Tailwind CSS</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
