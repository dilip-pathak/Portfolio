import React, { useRef } from 'react';
import './home.css';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { motion, useScroll, useTransform } from 'framer-motion';
import dilipPhoto from '../../asset/dilip.png';

const Home = ({ imageSrc = dilipPhoto }) => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const fadeOut = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

    return (
        <section className="home section" id="home" ref={sectionRef}>
            <motion.div
                className="home__container container"
                style={{ y: parallaxY, opacity: fadeOut }}
            >
                <div className="home__hero-layout">
                    {/* Left Hero Content: Kicker, Heading, Description, Buttons */}
                    <Data />

                    {/* Right Hero Image Card Area with signature curved geometry */}
                    <div className="home__image-wrapper">
                        {/* Main Image Card */}
                        <motion.div
                            className="home__image-card"
                            initial={{ opacity: 0, scale: 0.85, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 20, delay: 0.15 }}
                        >
                            {imageSrc ? (
                                <img
                                    src={imageSrc}
                                    alt="Dilip Kumar Pathak"
                                    className="home__profile-img"
                                />
                            ) : (
                                <div className="home__image-placeholder">
                                    <div className="home__placeholder-content">
                                        <div className="home__placeholder-avatar">
                                            <svg
                                                className="home__placeholder-icon"
                                                width="52"
                                                height="52"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <span className="home__placeholder-hint">Photo Area</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Right vertical accent line from design reference */}
                        <div className="home__right-accent" aria-hidden="true"></div>
                    </div>
                </div>

                {/* Bottom subtle scroll indicator */}
                <motion.div
                    className="home__scroll-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    <ScrollDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;
