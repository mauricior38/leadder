'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { src: '/ndigital.png', alt: 'Neo Digital', w: 140, h: 45 },
    { src: '/feito.png', alt: 'Agência Feito', w: 140, h: 45 },
    { src: '/startta.png', alt: 'Startta', w: 140, h: 45 },
    { src: '/genesis.png', alt: 'Genesis', w: 140, h: 45 },
];

export default function Clients() {
    // Triple the logos for seamless marquee
    const allLogos = [...logos, ...logos, ...logos];

    return (
        <section className="clients" id="trusted">
            <div className="container">
                <motion.div
                    className="clients__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title center">Clientes que confiam em nós</h2>
                    <p className="section-subtitle center">Empresas que escolheram a Leadder para transformar sua gestão financeira.</p>
                </motion.div>
            </div>

            <div className="clients__marquee">
                <div className="clients__track">
                    {allLogos.map((logo, i) => (
                        <Image key={i} src={logo.src} alt={logo.alt} className="clients__logo" width={logo.w} height={logo.h} />
                    ))}
                </div>
            </div>
        </section>
    );
}
