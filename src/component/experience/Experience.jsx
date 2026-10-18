import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from './Data';
import SectionHeading from '../motion/SectionHeading';
import './experience.css';

const ease = [0.22, 1, 0.36, 1];

// Spring pop-up for tech badges
const techPillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.15 + i * 0.04,
            type: 'spring',
            stiffness: 380,
            damping: 20,
        },
    }),
};

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <SectionHeading
                title="Work Experience"
            // subtitle="6+ Years in IT Operations • Incident Command • Enterprise Deployments"
            />

            <div className="experience__container container">

                {/* Open Chronological Timeline Journey (NO BOXES) */}
                <div className="experience__timeline-stream">
                    {experienceData.map((exp, index) => {
                        const isLast = index === experienceData.length - 1;
                        return (
                            <motion.div
                                key={exp.id}
                                className="experience__timeline-item"
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.65, delay: index * 0.08, ease }}
                            >
                                {/* Left: Logo Node + Vertical Connecting Track */}
                                <div className="experience__timeline-left">
                                    <div
                                        className="experience__timeline-node"
                                        style={{ borderColor: exp.accentColor }}
                                    >
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} Logo`}
                                                className="experience__company-logo-img"
                                            />
                                        ) : (
                                            <span style={{ color: exp.accentColor }}>{exp.monogram}</span>
                                        )}
                                    </div>
                                    {!isLast && <span className="experience__timeline-connector" />}
                                </div>

                                {/* Right: Open Unboxed Role Details */}
                                <div className="experience__timeline-body">
                                    {/* Header Row */}
                                    <div className="experience__timeline-header">
                                        <div className="experience__timeline-header-main">
                                            <div className="experience__timeline-title-row">
                                                <h3 className="experience__timeline-role">{exp.role}</h3>
                                                <span
                                                    className="experience__timeline-badge"
                                                    style={{
                                                        borderColor: `${exp.accentColor}40`,
                                                        color: exp.accentColor,
                                                        background: `${exp.accentColor}12`,
                                                    }}
                                                >
                                                    {exp.badge}
                                                </span>
                                            </div>

                                            <div className="experience__timeline-sub-row">
                                                <span className="experience__timeline-company">{exp.company}</span>
                                                {exp.client && (
                                                    <span className="experience__timeline-client">
                                                        <i className="bx bx-briefcase" /> Client: <strong>{exp.client}</strong>
                                                    </span>
                                                )}
                                                <span className="experience__timeline-location">
                                                    <i className="bx bx-map" /> {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="experience__timeline-period">
                                            <i className="bx bx-calendar" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    {/* Summary Narrative */}
                                    <p className="experience__timeline-summary">{exp.summary}</p>

                                    {/* Responsibilities Bullet Stream */}
                                    <ul className="experience__timeline-resp-list">
                                        {exp.responsibilities.map((r, rIdx) => (
                                            <li key={rIdx}>
                                                <i className="bx bx-chevron-right" style={{ color: exp.accentColor }} />
                                                <span>{r}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Floating Spring Pop Technology Pills */}
                                    <div className="experience__timeline-tech-row">
                                        {exp.technologies.map((t, tIdx) => (
                                            <motion.span
                                                key={t}
                                                className="experience__tech-pill"
                                                custom={tIdx}
                                                variants={techPillVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.2 }}
                                                whileHover={{ y: -3, scale: 1.06 }}
                                                whileTap={{ scale: 0.96 }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                            >
                                                {t}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Experience;
