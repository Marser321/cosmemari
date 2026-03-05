'use client';

import { motion } from 'motion/react';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/ui/AnimatedSection';
import { Star, Quote } from 'lucide-react';

const testimonios = [
    {
        nombre: 'María G.',
        tratamiento: 'Implantes Dentales',
        texto: 'Tenía mucho miedo de los implantes, pero el equipo de especialistas me explicó todo paso a paso. El resultado es increíble, no se nota la diferencia con mis dientes naturales. ¡Gracias!',
        estrellas: 5,
    },
    {
        nombre: 'Carlos P.',
        tratamiento: 'Ortodoncia',
        texto: 'Mi hija de 12 años tuvo una experiencia excelente con la ortodoncia. El equipo es muy amable y profesional. Ya se nota un cambio enorme en su sonrisa.',
        estrellas: 5,
    },
    {
        nombre: 'Laura S.',
        tratamiento: 'Blanqueamiento Dental',
        texto: 'Me hice el blanqueamiento para mi casamiento y quedé fascinada. En una sola sesión mis dientes quedaron espectaculares. Súper recomendable.',
        estrellas: 5,
    },
    {
        nombre: 'Roberto M.',
        tratamiento: 'Carillas Dentales',
        texto: 'Siempre me acomplejaban mis dientes. Las carillas me cambiaron la vida. El diseño digital previo me dio mucha confianza porque pude ver el resultado antes.',
        estrellas: 5,
    },
    {
        nombre: 'Ana T.',
        tratamiento: 'Odontología para Niños',
        texto: 'Mi nene de 5 años le tenía pánico al dentista. Acá lo trataron con tanta paciencia y cariño que ahora quiere venir. Increíble el cambio.',
        estrellas: 5,
    },
    {
        nombre: 'Diego F.',
        tratamiento: 'Tratamiento de Conducto',
        texto: 'Llegué con un dolor terrible y me atendieron de urgencia. El tratamiento de conducto fue completamente indoloro. Excelente atención y profesionalismo.',
        estrellas: 5,
    },
];

export function TestimonialsSection() {
    return (
        <section className="section-padding relative overflow-hidden bg-bg-secondary">
            {/* Decoración */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-50/60 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Título */}
                <AnimatedSection className="text-center mb-16">
                    <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
                        Testimonios
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-slate-900">
                        Lo que dicen nuestros{' '}
                        <span className="text-gradient-gold">pacientes</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        La mejor recomendación son las experiencias de quienes ya nos eligieron.
                    </p>
                </AnimatedSection>

                {/* Grid de testimonios */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {testimonios.map((test, i) => (
                        <motion.div
                            key={i}
                            variants={staggerItemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col relative border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-all duration-400 group"
                        >
                            {/* Header: Avatar + Quote */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100/50 to-sky-100 flex items-center justify-center border border-cyan-200/30 group-hover:scale-110 transition-transform duration-300">
                                    <span className="font-display font-bold text-accent text-lg">
                                        {test.nombre.charAt(0)}
                                    </span>
                                </div>
                                <Quote size={24} className="text-cyan-100" />
                            </div>

                            {/* Estrellas */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: test.estrellas }).map((_, j) => (
                                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Texto */}
                            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                                &ldquo;{test.texto}&rdquo;
                            </p>

                            {/* Autor */}
                            <div className="pt-4 border-t border-slate-100">
                                <p className="font-semibold text-slate-800 text-sm">{test.nombre}</p>
                                <p className="text-slate-400 text-xs">{test.tratamiento}</p>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
