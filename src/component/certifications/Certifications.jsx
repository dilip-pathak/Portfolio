import React from 'react';
import { certificationsData } from './Data';
import './certifications.css';
import SectionHeading from '../motion/SectionHeading';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Official Issuer Emblem SVGs
const renderIssuerLogo = (type) => {
    switch (type) {
        case 'anthropic':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="#CC785C" fillOpacity="0.12" stroke="#CC785C" strokeWidth="1.5" />
                    <path
                        d="M16 6L18.4 12.6L25 15L18.4 17.4L16 24L13.6 17.4L7 15L13.6 12.6L16 6Z"
                        fill="#CC785C"
                    />
                </svg>
            );
        case 'itil':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#0284c7" strokeWidth="2.5" fill="rgba(2, 132, 199, 0.08)" />
                    <text x="18" y="22" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="800" fontFamily="sans-serif">ITIL</text>
                </svg>
            );
        case 'cisco':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 54 36" fill="none">
                    <rect x="2" y="14" width="3.2" height="8" rx="1.6" fill="#00BCEB" />
                    <rect x="8" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="14" y="6" width="3.2" height="16" rx="1.6" fill="#00BCEB" />
                    <rect x="20" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="26" y="2" width="3.2" height="20" rx="1.6" fill="#00BCEB" />
                    <rect x="32" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="38" y="6" width="3.2" height="16" rx="1.6" fill="#00BCEB" />
                    <rect x="44" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="50" y="14" width="3.2" height="8" rx="1.6" fill="#00BCEB" />
                    <text
                        x="27"
                        y="33"
                        textAnchor="middle"
                        fill="#00BCEB"
                        fontSize="9"
                        fontWeight="800"
                        fontFamily="sans-serif"
                        letterSpacing="1"
                    >
                        CISCO
                    </text>
                </svg>
            );
        case 'googlecloud':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 48 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.3 14.6C36.7 8.8 31.8 4.3 25.8 4.3C21.7 4.3 18.2 6.3 16 9.3C15.1 8.9 14.1 8.6 13 8.6C9.5 8.6 6.7 11.4 6.7 14.9C6.7 15.4 6.8 15.9 6.9 16.3C3 17.2 0 20.8 0 25.2C0 30.3 4.1 34.4 9.2 34.4H36.9C42.8 34.4 47.6 29.6 47.6 23.7C47.6 18.2 43.4 15 37.3 14.6Z"
                        fill="#4285F4"
                    />
                    <path
                        d="M13 8.6C14.1 8.6 15.1 8.9 16 9.3C18.2 6.3 21.7 4.3 25.8 4.3C31.8 4.3 36.7 8.8 37.3 14.6L24.5 19L16 14.9L6.9 16.3C6.8 15.9 6.7 15.4 6.7 14.9C6.7 11.4 9.5 8.6 13 8.6Z"
                        fill="#EA4335"
                    />
                    <path
                        d="M37.3 14.6C43.4 15 47.6 18.2 47.6 23.7C47.6 29.6 42.8 34.4 36.9 34.4L25 34.4L37.3 14.6Z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M9.2 34.4C4.1 34.4 0 30.3 0 25.2C0 20.8 3 17.2 6.9 16.3L16 20L25 34.4H9.2Z"
                        fill="#34A853"
                    />
                </svg>
            );
        default:
            return <i className="bx bx-award certifications__logo-fallback" />;
    }
};

const rowVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 + i * 0.08,
            duration: 0.55,
            ease,
        },
    }),
};

const Certifications = () => {
    return (
        <section className="certifications section" id="certifications">
            <SectionHeading
                title="Professional Certifications"
                subtitle="Industry Credentials • ITIL Frameworks • Cloud & AI Systems"
            />

            <div className="certifications__container container">
                
                {/* Open Editorial Credential Index (NO BOXES) */}
                <div className="certifications__index">
                    {certificationsData.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="certifications__entry"
                            custom={index}
                            variants={rowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.25 }}
                        >
                            {/* Left: Index & Logo */}
                            <div className="certifications__entry-left">
                                <span className="certifications__entry-num">0{index + 1}</span>
                                <div
                                    className="certifications__emblem-tile"
                                    style={{ borderColor: `${cert.accentColor}35` }}
                                >
                                    {renderIssuerLogo(cert.logoType)}
                                </div>
                            </div>

                            {/* Middle: Details */}
                            <div className="certifications__entry-middle">
                                <div className="certifications__entry-meta-top">
                                    <span
                                        className="certifications__cat-tag"
                                        style={{
                                            color: cert.accentColor,
                                            borderColor: `${cert.accentColor}35`,
                                            background: `${cert.accentColor}10`,
                                        }}
                                    >
                                        {cert.category}
                                    </span>
                                    <span className="certifications__entry-date">
                                        <i className="bx bx-calendar" /> {cert.date}
                                    </span>
                                </div>

                                <h3 className="certifications__entry-title">{cert.title}</h3>
                                <h4 className="certifications__entry-issuer">
                                    <i className="bx bx-badge-check" style={{ color: cert.accentColor }} />
                                    <span>{cert.issuer}</span>
                                </h4>

                                <p className="certifications__entry-desc">{cert.description}</p>

                                <div className="certifications__entry-skills">
                                    {cert.skills.map((s) => (
                                        <span key={s} className="certifications__skill-pill">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Action Column */}
                            <div className="certifications__entry-action">
                                {cert.hasVisitOption && cert.link ? (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certifications__verify-action-btn"
                                        aria-label={`Verify ${cert.title}`}
                                    >
                                        <span>Verify Credential</span>
                                        <i className="bx bx-link-external" />
                                    </a>
                                ) : (
                                    <div className="certifications__verified-indicator">
                                        <i className="bx bx-check-shield" style={{ color: cert.accentColor }} />
                                        <span>Verified Credential</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
