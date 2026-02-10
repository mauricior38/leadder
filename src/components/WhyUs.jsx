'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
};

const cards = [
    {
        title: 'Confiança e Sigilo',
        desc: 'Seus dados financeiros tratados com total segurança e confidencialidade. Sigilo absoluto em todas as operações.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        title: 'Previsibilidade de Receitas',
        desc: 'Entenda exatamente como está a saúde financeira da sua empresa com projeções claras e dados atualizados.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        title: 'Cobrança a Clientes',
        desc: 'Não se preocupe com a gestão das finanças da sua empresa e tenha noites de descanso sem pensar na sua operação financeira.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
];

export default function WhyUs() {
    return (
        <section className="whyus" id="whyus">
            <div className="container">
                <motion.div
                    className="whyus__header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                    custom={0}
                >
                    <h2 className="section-title center light">Por que a Leadder?</h2>
                    <p className="section-subtitle center light">Somos mais do que uma assessoria financeira. Somos o parceiro estratégico que a sua empresa precisa.</p>
                </motion.div>

                <div className="whyus__grid">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            className="whyus-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={fadeInUp}
                            custom={i + 1}
                        >
                            <div className="whyus-card__icon">{card.icon}</div>
                            <h3 className="whyus-card__title">{card.title}</h3>
                            <p className="whyus-card__desc">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
