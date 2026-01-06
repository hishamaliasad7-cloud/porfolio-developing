"use client";

import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 text-center">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="font-mono text-[var(--color-accent)] text-lg">04. What's Next?</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>

                    <p className="text-gray-400 text-lg">
                        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="pt-8">
                        <a
                            href="mailto:hishamaiasad7@gmail.com"
                            className="px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] rounded font-mono hover:bg-[var(--color-accent)] hover:text-black transition-all"
                        >
                            Say Hello
                        </a>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-24 text-gray-500 font-mono text-sm">
                <p>Built with Next.js & Tailwind CSS</p>
            </footer>
        </section>
    );
};

export default Contact;
