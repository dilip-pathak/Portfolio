import React from 'react';
import { motion } from 'framer-motion';
import resumePdf from '../../asset/Dilip_Pathak_Resume.pdf';

const Data = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <div className="home__data-wrapper">
            {/* Left vertical accent guide with blue circle node */}
            <div className="home__accent-guide" aria-hidden="true">
                <span className="home__accent-dot"></span>
                <span className="home__accent-line"></span>
            </div>

            <motion.div
                className="home__data"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Role / Discipline kicker */}
                <motion.div variants={itemVariants} className="home__kicker">
                    IT OPERATIONS | TEAM LEAD
                </motion.div>

                {/* Editorial Serif Heading */}
                <motion.h1 variants={itemVariants} className="home__title">
                    Dilip Kumar Pathak
                </motion.h1>

                {/* Descriptive Bio */}
                <motion.p variants={itemVariants} className="home__description">
                    Ensuring reliable infrastructure and smooth service delivery through people, process and technology.
                </motion.p>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="home__actions">
                    <a
                        href={resumePdf}
                        download="Dilip_Pathak_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__btn-download"
                        aria-label="Download Dilip Pathak Resume PDF"
                    >
                        <span>Download CV</span>
                        <svg
                            className="home__btn-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dilip-kumar-pathak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__btn-linkedin"
                        aria-label="Dilip Kumar Pathak on LinkedIn"
                        title="Connect with Dilip Kumar Pathak on LinkedIn"
                    >
                        <svg
                            className="home__linkedin-icon"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Data;