'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const orbsRef = useRef([]);

    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth < 768) return;

        const handleParallax = (e) => {
            const mx = e.clientX / window.innerWidth - 0.5;
            const my = e.clientY / window.innerHeight - 0.5;
            orbsRef.current.forEach((orb, i) => {
                if (!orb) return;
                const speed = (i + 1) * 15;
                orb.style.transform = `translate(${mx * speed}px, ${my * speed}px)`;
            });
        };

        document.addEventListener('mousemove', handleParallax, { passive: true });
        return () => document.removeEventListener('mousemove', handleParallax);
    }, []);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const pos = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="hero">
            <div className="hero__bg">
                <div className="hero__orb hero__orb--1" ref={el => orbsRef.current[0] = el}></div>
                <div className="hero__orb hero__orb--2" ref={el => orbsRef.current[1] = el}></div>
                <div className="hero__orb hero__orb--3" ref={el => orbsRef.current[2] = el}></div>
                <div className="hero__grid"></div>
            </div>

            <motion.div
                className="hero__content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.div
                    className="hero__badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    BPO Financeiro de Excelência
                </motion.div>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    Sua gestão financeira <span className="highlight">descomplicada.</span>
                </motion.h1>

                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Tenha tranquilidade para você cuidar do que realmente precisa, <strong>do seu negócio.</strong> Nós cuidamos de toda a operação e estratégia financeira da sua empresa.
                </motion.p>

                <motion.div
                    className="hero__cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <a href="https://api.whatsapp.com/send?phone=5511911110140" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        Agende uma conversa
                    </a>
                    <a href="#features" className="btn btn--outline" onClick={(e) => handleScroll(e, '#features')}>
                        Conheça nossos serviços
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>

            <div className="hero__scroll-indicator">
                <div className="mouse"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}
