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
                            Hello! My name is Hisham and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was fun!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
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
