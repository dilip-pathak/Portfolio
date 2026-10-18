import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import SectionHeading from '../motion/SectionHeading';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ state: 'idle', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ state: 'sending', message: 'Sending message...' });

        emailjs
            .sendForm(
                'service_lmc03ti',
                'ttemplate_8e5p68n',
                form.current,
                'pQoiBP9fJiC0rcUnU'
            )
            .then(
                () => {
                    setStatus({ state: 'success', message: 'Message sent successfully! Dilip will connect with you shortly.' });
                    e.target.reset();
                    setTimeout(() => {
                        setStatus({ state: 'idle', message: '' });
                    }, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus({ state: 'error', message: 'Failed to send. Please reach out directly at Dilippathak382@gmail.com' });
                    setTimeout(() => {
                        setStatus({ state: 'idle', message: '' });
                    }, 5000);
                }
            );
    };

    return (
        <section className="contact section" id="contact">
            <SectionHeading title="Get In Touch" subtitle="Executive Inquiries • Operations Leadership • Direct Contact" />

            <div className="contact__container container">

                {/* 2-Column Open Editorial Communication Hub (NO BOXES) */}
                <div className="contact__hub">

                    {/* Left Column: Direct Inquiries & Details */}
                    <motion.div
                        className="contact__left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease }}
                    >
                        <span className="contact__avail-pill">
                            <span className="contact__avail-dot" />
                            <span>Available for Leadership Opportunities</span>
                        </span>

                        <h3 className="contact__heading">
                            Let&apos;s discuss IT operations, incident command, or infrastructure transitions.
                        </h3>

                        <p className="contact__lead">
                            Whether you are looking for an IT Operations Manager to streamline 24/7 SLA delivery, manage cross-functional teams, or execute ITIL v4 governance, feel free to reach out directly.
                        </p>

                        <div className="contact__channels">
                            <a href="mailto:Dilippathak382@gmail.com" className="contact__channel-item">
                                <div className="contact__channel-icon-wrap">
                                    <i className="bx bx-envelope" />
                                </div>
                                <div>
                                    <span className="contact__channel-label">Email Directly</span>
                                    <span className="contact__channel-val">Dilippathak382@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+917000127926" className="contact__channel-item">
                                <div className="contact__channel-icon-wrap">
                                    <i className="bx bx-phone-call" />
                                </div>
                                <div>
                                    <span className="contact__channel-label">Phone & WhatsApp</span>
                                    <span className="contact__channel-val">+91-7000127926</span>
                                </div>
                            </a>

                            <div className="contact__channel-item">
                                <div className="contact__channel-icon-wrap">
                                    <i className="bx bx-map" />
                                </div>
                                <div>
                                    <span className="contact__channel-label">Current Location</span>
                                    <span className="contact__channel-val">Bengaluru, Karnataka, India</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Sleek Underline Minimal Form (NO BOXES) */}
                    <motion.div
                        className="contact__right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.1, ease }}
                    >
                        <form ref={form} onSubmit={sendEmail} className="contact__minimal-form">
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="contact__input"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label className="contact__label" htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="contact__input"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label className="contact__label" htmlFor="project">Message / Scope</label>
                                <textarea
                                    id="project"
                                    name="project"
                                    rows="4"
                                    className="contact__input contact__textarea"
                                    placeholder="Share your requirements or project details..."
                                    required
                                />
                            </div>

                            {status.state !== 'idle' && (
                                <div className={`contact__status-alert contact__status-alert--${status.state}`}>
                                    <i className={status.state === 'success' ? 'bx bx-check-circle' : 'bx bx-error'} />
                                    <span>{status.message}</span>
                                </div>
                            )}

                            <div className="contact__action-row">
                                <button
                                    type="submit"
                                    className="contact__submit-btn"
                                    disabled={status.state === 'sending'}
                                >
                                    <span>{status.state === 'sending' ? 'Transmitting Message...' : 'Send Message'}</span>
                                    <i className="bx bx-right-arrow-alt" />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
