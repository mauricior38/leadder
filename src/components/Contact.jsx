'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_r52tei7';
const TEMPLATE_ID = 'template_37drz4o';
const PUBLIC_KEY = 'Z0BOGblabxyKQI71d';

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        const name = form.user_name.value.trim();
        const email = form.user_email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            setStatus('error');
            setErrorMsg('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            setErrorMsg('Por favor, insira um e-mail válido.');
            return;
        }

        setStatus('sending');

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setErrorMsg('Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Deixe sua mensagem</h2>
                        <p>Estamos prontos para ajudar a transformar a gestão financeira da sua empresa. Entre em contato e vamos conversar sobre como podemos ajudar.</p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">WhatsApp</span>
                                    <span className="contact__detail-text">(11) 91111-0140</span>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">E-mail</span>
                                    <span className="contact__detail-text">contato@leadder.com.br</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact__form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="contactName" name="user_name" placeholder=" " required />
                                <label htmlFor="contactName">Seu nome</label>
                            </div>
                            <div className="form-group">
                                <input type="email" id="contactEmail" name="user_email" placeholder=" " required />
                                <label htmlFor="contactEmail">Seu e-mail</label>
                            </div>
                            <div className="form-group">
                                <input type="tel" id="contactPhone" name="user_telefone" placeholder=" " />
                                <label htmlFor="contactPhone">Seu telefone</label>
                            </div>
                            <div className="form-group">
                                <textarea id="contactMessage" name="message" placeholder=" " required rows="4"></textarea>
                                <label htmlFor="contactMessage">Sua mensagem</label>
                            </div>

                            {status === 'error' && (
                                <p style={{ color: '#ef4444', fontSize: '0.88rem', marginBottom: '12px' }}>{errorMsg}</p>
                            )}
                            {status === 'success' && (
                                <p style={{ color: '#22c55e', fontSize: '0.88rem', marginBottom: '12px' }}>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                            )}

                            <button type="submit" className="form-submit" disabled={status === 'sending'}>
                                <span>{status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
