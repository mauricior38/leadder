'use client';

import { motion } from 'framer-motion';

const services = [
    {
        title: 'Planejamento orçamentário:',
        desc: 'Essa prática auxilia na tomada de decisões estratégicas, promovendo o equilíbrio entre receitas e despesas.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><path d="M6 10l3 3 4-5 5 4" />
            </svg>
        ),
    },
    {
        title: 'Controle de Fluxo de Caixa:',
        desc: 'Essa ferramenta proporciona visibilidade sobre a liquidez, permite antecipar desafios financeiros e embasa decisões estratégicas para garantir a saúde financeira da organização.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        title: 'Gestão do Contas a Pagar e Contas a Receber:',
        desc: 'Envolve o controle eficiente dos compromissos a serem quitados e das receitas a serem recebidas.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        title: 'Conciliação Bancária:',
        desc: 'Processo de comparação entre os registros financeiros da empresa e os extratos bancários, visando identificar e corrigir eventuais divergências.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
            </svg>
        ),
    },
    {
        title: 'Emissão de Notas Fiscais:',
        desc: 'Esses documentos atestam a legalidade das operações, detalham produtos ou serviços, e são cruciais para o cumprimento de obrigações fiscais.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
    {
        title: 'Elaboração de Relatórios Financeiros:',
        desc: 'Processo crucial na comunicação de informações financeiras de uma empresa. Esses relatórios fornecem análises detalhadas sobre o desempenho financeiro, facilitando a tomada de decisões estratégicas.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
        ),
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <motion.div
                    className="features__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title center">O que a Leadder Faz</h2>
                </motion.div>

                <div className="features__grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="features__card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={itemVariants}
                            custom={i}
                        >
                            <div className="features__card-icon">
                                {service.icon}
                            </div>
                            <h4 className="features__card-title">{service.title}</h4>
                            <p className="features__card-desc">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
