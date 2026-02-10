'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
};

export default function Team() {
    return (
        <section className="team" id="team">
            <div className="container">
                <motion.div
                    className="team__header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                    custom={0}
                >
                    <h2 className="section-title center">Sobre a Leadder</h2>
                    <p className="section-subtitle center">Confira o time que irá prestar todo o suporte necessário para o sucesso de sua empresa.</p>
                </motion.div>

                <motion.div
                    className="team__sebrae"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                    custom={1}
                >
                    <span>Homologado pelo:</span>
                    <Image src="/SebraeLogo.png" alt="Sebrae Logo" width={240} height={72} />
                </motion.div>

                <div className="team__grid">
                    {/* Carla Lannes */}
                    <motion.div
                        className="team-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeInUp}
                        custom={2}
                    >
                        <div className="team-card__inner">
                            <div className="team-card__front">
                                <Image src="/CarlaPhoto.png" alt="Carla Lannes" className="team-card__photo" width={140} height={140} />
                                <h3 className="team-card__name">Carla Lannes</h3>
                                <span className="team-card__role">CFO — Gestora Financeira</span>
                                <div className="team-card__front-hint">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    Passe o mouse para ver mais
                                </div>
                            </div>
                            <div className="team-card__back">
                                <h3 className="team-card__back-name">Carla Lannes</h3>
                                <span className="team-card__back-role">CFO — Gestora Financeira</span>
                                <p className="team-card__bio">
                                    Formação em Administração com experiência de mais de 16 anos na área Financeira, com forte conhecimento em gestão e estratégia financeira. Habilidade em operacionalizar Unidades de Negócios e produtos sob uma perspectiva financeira. Já teve passagem por empresas dos seguintes segmentos: Bancário, Mídia, Educação.
                                </p>
                                <a href="https://www.linkedin.com/in/carla-da-s-o-lannes-9802a753/" target="_blank" rel="noopener noreferrer" className="team-card__linkedin">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    Ver no LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Leonardo Oliveira */}
                    <motion.div
                        className="team-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeInUp}
                        custom={3}
                    >
                        <div className="team-card__inner">
                            <div className="team-card__front">
                                <Image src="/LeonardoPhoto.png" alt="Leonardo Oliveira" className="team-card__photo" width={140} height={140} />
                                <h3 className="team-card__name">Leonardo Oliveira</h3>
                                <span className="team-card__role">CFO — Gestor Financeiro</span>
                                <div className="team-card__front-hint">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    Passe o mouse para ver mais
                                </div>
                            </div>
                            <div className="team-card__back">
                                <h3 className="team-card__back-name">Leonardo Oliveira</h3>
                                <span className="team-card__back-role">CFO — Gestor Financeiro</span>
                                <p className="team-card__bio">
                                    Formação em Matemática pelo IPA, com mais de 10 anos de experiência na área financeira de empresas de médio e grande porte. Atuou na área de Tesouraria, contas a pagar, a receber, custódia de renda variável e SPB – Sistema de Pagamentos Brasileiro, nos segmentos bancário, energético, cooperativa de crédito e investimento.
                                </p>
                                <a href="https://www.linkedin.com/in/leonardo-oliveira-financeiro/" target="_blank" rel="noopener noreferrer" className="team-card__linkedin">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    Ver no LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
