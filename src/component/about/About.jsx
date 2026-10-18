import React, { useState } from 'react';
import './about.css';
import { motion } from 'framer-motion';

const domains = [
    'Incident & Problem Command',
    'Infrastructure Transitions',
    'ITIL v4 Governance',
    '24/7 SLA Leadership',
];

const highlights = [
    {
        id: 'experience',
        icon: 'bx bx-briefcase-alt-2',
        iconColor: '#0284c7',
        title: '9+ Years in IT Ops',
        desc: 'Infrastructure & Transitions',
        dividerClass: 'about__highlight-divider--blue',
    },
    {
        id: 'leadership',
        icon: 'bx bx-group',
        iconColor: '#8b5cf6',
        title: '35+ Engineers Led',
        desc: 'Multi-Location Command',
        dividerClass: 'about__highlight-divider--purple',
    },
    {
        id: 'itil',
        icon: 'bx bx-check-circle',
        iconColor: '#0284c7',
        title: 'ITIL v4 Certified',
        desc: 'Global ITSM Governance',
        dividerClass: 'about__highlight-divider--red',
    },
    {
        id: 'incidents',
        icon: 'bx bx-bolt-circle',
        iconColor: '#ef4444',
        title: 'P1/P2 Major Incidents',
        desc: 'Bridge Command & RCA',
        dividerClass: 'about__highlight-divider--green',
    },
    {
        id: 'scope',
        icon: 'bx bx-globe',
        iconColor: '#10b981',
        title: 'PAN India Scope',
        desc: 'Deployments across Infra & WLC',
        dividerClass: null,
    },
];

const ovalPopVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2 + i * 0.08,
            type: 'spring',
            stiffness: 380,
            damping: 20,
        },
    }),
};

/* Smooth bottom-to-top entrance animation for highlight stats */
const highlightItemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.18 + i * 0.09,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const dividerVariants = {
    hidden: { opacity: 0, scaleY: 0, y: 15 },
    visible: (i) => ({
        opacity: 1,
        scaleY: 1,
        y: 0,
        transition: {
            delay: 0.24 + i * 0.09,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const About = () => {
    const [activeDomain, setActiveDomain] = useState('Incident & Problem Command');

    return (
        <section className="about section" id="about">
            <div className="about__container container">

                {/* Heading */}
                <div className="about__header">
                    <h2 className="about__title">About me</h2>
                </div>

                {/* Narrative Text */}
                <div className="about__text-block">
                    <p className="about__paragraph">
                        I'm a technically grounded IT professional with nine years across infrastructure deployment, changes, maintenance and transitions, covering network, server, telecom, software and hardware.
                    </p>
                    <p className="about__paragraph">
                        Today I run IT operations at <strong>Infosys</strong>. I'm focused on incident, problem and change management, SLA performance, compliance and audits. I enjoy bringing several technical and functional teams together to fix problems quickly, and I'm growing toward IT project and operations management.
                    </p>
                </div>

                {/* Oval Buttons: Single Clean Row with Spring Pop-Up Animation matching Experience section */}
                <div className="about__oval-row">
                    {domains.map((domain, index) => {
                        const isSelected = activeDomain === domain;
                        return (
                            <motion.button
                                key={domain}
                                type="button"
                                className={`about__oval-btn ${isSelected ? 'about__oval-btn--active' : ''}`}
                                onClick={() => setActiveDomain(domain)}
                                custom={index}
                                variants={ovalPopVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <span className="about__oval-dot" aria-hidden="true"></span>
                                <span className="about__oval-label">{domain}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Highlights Strip matching the unboxed icon-title-description layout */}
                <div className="about__highlights-row">
                    {highlights.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <motion.div
                                className="about__highlight-item"
                                custom={index}
                                variants={highlightItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ y: -3 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                <i className={`about__highlight-icon ${item.icon}`} style={{ color: item.iconColor }} />
                                <div className="about__highlight-text">
                                    <strong className="about__highlight-title">{item.title}</strong>
                                    <span className="about__highlight-desc">{item.desc}</span>
                                </div>
                            </motion.div>

                            {item.dividerClass && (
                                <motion.span
                                    className={`about__highlight-divider ${item.dividerClass}`}
                                    custom={index}
                                    variants={dividerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    aria-hidden="true"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
