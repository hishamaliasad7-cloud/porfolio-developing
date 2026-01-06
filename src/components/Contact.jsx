"use client";

import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    // REPLACE "YOUR_FORM_ID" WITH YOUR ACTUAL FORMSPREE ID
    const [state, handleSubmit] = useForm("YOUR_FORM_ID");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#111827]/50 p-12 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-xl flex flex-col items-center gap-6"
                    >
                        <CheckCircle className="text-[var(--color-accent)] w-20 h-20" />
                        <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
                        <p className="text-gray-400 text-lg">
                            Thanks for reaching out, Hisham will get back to you soon.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">Let's Connect</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have an idea, opportunity, or project in mind? Whether it's freelance work, collaboration, or just to say hi – I'd love to hear from you.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 bg-[#111827]/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-xl"
                    onSubmit={handleSubmit}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full bg-[#1f2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all placeholder-gray-500"
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full bg-[#1f2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all placeholder-gray-500"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="sr-only">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder="Your Message"
                            required
                            className="w-full bg-[#1f2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all placeholder-gray-500 resize-none"
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-[var(--color-accent)] text-black font-bold py-4 rounded-lg hover:bg-[#e6a700] transition-transform transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {state.submitting ? 'Sending...' : 'Send Message'} <ArrowRight size={20} />
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="mailto:hishamaiasad7@gmail.com"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--color-accent)] transition-colors"
                    >
                        <Mail size={18} />
                        <span>Email: hishamaiasad7@gmail.com</span>
                    </a>
                </motion.div>

                <footer className="mt-20 text-center text-gray-600 text-sm">
                    <p>Designed & Built by Hisham Ali Asad</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
