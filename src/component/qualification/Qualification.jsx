import React from 'react';
import './qualification.css';
import SectionHeading from '../motion/SectionHeading';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const qualificationsData = [
    {
        id: 'btech',
        degree: 'Bachelor of Technology (B. Tech)',
        institution: 'RGPV Bhopal',
        fullName: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
        location: 'Bhopal, Madhya Pradesh',
        year: '2016',
        level: 'Undergraduate Degree',
        accentColor: '#0284c7',
        highlights: ['Hardware & Networking', 'System Engineering', 'ITIL Foundations'],
    },
    {
        id: 'intermediate',
        degree: 'Intermediate (10+2)',
        institution: 'K.S.S College',
        fullName: 'K.S.S College, Bihar',
        location: 'Bihar, India',
        year: '2011',
        level: 'Higher Secondary',
        accentColor: '#10b981',
        highlights: ['Mathematics & Science', 'Analytical Reasoning', 'Pre-Engineering'],
    },
    {
        id: 'highschool',
        degree: 'High School (Matriculation)',
        institution: 'DAV Public School',
        fullName: 'DAV Public School, Bihar',
        location: 'Bihar, India',
        year: '2009',
        level: 'Secondary Education',
        accentColor: '#8b5cf6',
        highlights: ['Core Sciences', 'Mathematics', 'Academic Discipline'],
    },
];

const colVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.12 + i * 0.1,
            duration: 0.6,
            ease,
        },
    }),
};

const Qualification = () => {
    return (
        <section className="qualification section" id="degree">
            <SectionHeading
                title="Academic Qualifications"
                subtitle="Formal Education • Technical Engineering Pedigree"
            />

            <div className="qualification__container container">
                
                {/* Open 3-Column Editorial Lineage (NO BOXES) */}
                <div className="qualification__lineage">
                    {qualificationsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="qualification__col"
                            custom={index}
                            variants={colVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.25 }}
                        >
                            {/* Year & Accent Bar */}
                            <div className="qualification__year-row">
                                <span className="qualification__big-year" style={{ color: item.accentColor }}>
                                    {item.year}
                                </span>
                                <span className="qualification__level-pill" style={{ borderColor: `${item.accentColor}40`, color: item.accentColor }}>
                                    {item.level}
                                </span>
                            </div>

                            <span className="qualification__accent-line" style={{ backgroundColor: item.accentColor }} />

                            {/* Degree & Institution */}
                            <div className="qualification__body">
                                <h3 className="qualification__degree">{item.degree}</h3>
                                <h4 className="qualification__institution">{item.institution}</h4>
                                <span className="qualification__location">
                                    <i className="bx bx-map" /> {item.location}
                                </span>

                                {/* Highlights */}
                                <div className="qualification__chips">
                                    {item.highlights.map((h) => (
                                        <span key={h} className="qualification__chip">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Qualification;
