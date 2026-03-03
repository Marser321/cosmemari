'use client';

import { motion } from 'motion/react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GraduationCap, Award, Briefcase, User } from 'lucide-react';
import Image from 'next/image';

const credenciales = [
    {
        icono: GraduationCap,
        titulo: 'Facultad de Odontología',
        detalle: 'Egresado de Udelar, 2009',
    },
    {
        icono: Award,
        titulo: 'Cirugía sobre Implantes',
        detalle: 'Especialización Ucudal',
    },
    {
        icono: Briefcase,
        titulo: 'Rehabilitación Integral',
        detalle: 'Estética y funcional',
    },
];

export function AboutSection() {
    return (
        <section id="nosotros" className="section-padding bg-bg-secondary relative overflow-hidden">
            {/* Efecto decorativo */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-100/30 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Columna imagen */}
                    <AnimatedSection direction="left">
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-[0_8px_40px_rgba(15,23,42,0.08)] p-1 relative">
                                <div className="w-full h-full bg-slate-100 flex items-center justify-center rounded-xl">
                                    <User size={120} strokeWidth={1} className="text-slate-300" />
                                </div>
                            </div>

                            {/* Badge flotante */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-4 -right-4 sm:right-4 bg-white rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border border-slate-100"
                                style={{ animation: 'float 6s ease-in-out infinite' }}
                            >
                                <span className="text-3xl font-display font-bold text-gradient">+15</span>
                                <p className="text-xs text-slate-400 mt-0.5">Años de experiencia</p>
                            </motion.div>
                        </div>
                    </AnimatedSection>

                    {/* Columna texto */}
                    <AnimatedSection direction="right" delay={0.2}>
                        <div>
                            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                                Sobre Nosotros
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight text-slate-900">
                                Compromiso con tu{' '}
                                <span className="text-gradient">salud bucal</span>
                            </h2>
                            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-4">
                                El <strong className="text-slate-800">Dr. Diego Mari</strong> es egresado de la
                                Facultad de Odontología de la Universidad de la República (Udelar) en el año 2009,
                                con especialización en cirugía y rehabilitación sobre implantes por la Universidad
                                Católica del Uruguay (Ucudal).
                            </p>
                            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
                                En nuestra clínica realizamos odontología general, rehabilitación integral estética
                                y contamos con la especialización en ortodoncia. Nuestro objetivo es brindar una
                                atención integral, personalizada y de excelencia, en un ambiente cálido y con
                                tecnología de última generación.
                            </p>

                            {/* Credenciales */}
                            <div className="space-y-4">
                                {credenciales.map((cred, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.15 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors duration-300">
                                            <cred.icono size={22} className="text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 text-sm">
                                                {cred.titulo}
                                            </h4>
                                            <p className="text-slate-400 text-sm">{cred.detalle}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
