'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
    { number: 1, text: 'Conversamos com você para mapear e organizar os números' },
    { number: 2, text: 'Configuração do programa que usamos para gestão e controles' },
    { number: 3, text: 'Acordo das rotinas e processamento das informações' },
    { number: 4, text: 'Painel de controle e monitoramento dos números' },
];

const nextSteps = [
    'Agende uma conversa',
    'Montamos uma simulação e demonstramos na prática',
    'Coletamos feedback, alinhamos expectativas',
    'Seleciona o plano adequado para sua operação',
    'Início do nosso serviço',
];

const labelAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: 0.5 + i * 0.2, duration: 0.5, ease: 'easeOut' }
    })
};

const stepItemAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' }
    })
};

export default function HowItWorks() {
    return (
        <section className="howitworks" id="howitworks">
            <div className="container">
                <motion.div
                    className="howitworks__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title center">Como Funciona</h2>
                    <p className="section-subtitle center">Nosso processo é simples, transparente e pensado para que a transição seja suave e sem dores de cabeça.</p>
                </motion.div>

                {/* Circular Process — Flexbox layout matching original site */}
                <motion.div
                    className="howitworks__circular"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Top row: Step 4 (left) — Step 3 (right) */}
                    <div className="howitworks__circular-row howitworks__circular-row--top">
                        <motion.div
                            className="howitworks__step-label"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={labelAnimation} custom={3}
                        >
                            <h4>{steps[3].text}</h4>
                        </motion.div>
                        <motion.div
                            className="howitworks__step-label"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={labelAnimation} custom={2}
                        >
                            <h4>{steps[2].text}</h4>
                        </motion.div>
                    </div>

                    {/* Center: Circular arrows image */}
                    <motion.div
                        className="howitworks__circle-center"
                        initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Image
                            src="/group4Steps.png"
                            alt="Ciclo de 4 etapas"
                            width={280}
                            height={280}
                            priority={false}
                        />
                    </motion.div>

                    {/* Bottom row: Step 1 (left) — Step 2 (right) */}
                    <div className="howitworks__circular-row howitworks__circular-row--bottom">
                        <motion.div
                            className="howitworks__step-label"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={labelAnimation} custom={0}
                        >
                            <h4>{steps[0].text}</h4>
                        </motion.div>
                        <motion.div
                            className="howitworks__step-label"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={labelAnimation} custom={1}
                        >
                            <h4>{steps[1].text}</h4>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Next Steps Timeline */}
                <motion.div
                    className="howitworks__steps-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="label">Próximos passos</span>
                    <h3>Comece agora sua transformação financeira</h3>
                </motion.div>

                <div className="steps-row">
                    {nextSteps.map((label, i) => (
                        <motion.div
                            key={i}
                            className="step-item"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={stepItemAnim}
                            custom={i}
                        >
                            <div className="step-item__circle">{i + 1}</div>
                            <p className="step-item__label">{label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
