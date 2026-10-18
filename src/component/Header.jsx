import React, { useState, useEffect } from 'react';
import './header.css';
import { scrollToTarget } from '../hooks/useLenis';

const navLinks = [
    { href: '#home', label: 'Home', icon: 'uil-estate' },
    { href: '#about', label: 'About', icon: 'uil-user' },
    { href: '#skills', label: 'Skills', icon: 'uil-file-alt' },
    { href: '#experience', label: 'Experience', icon: 'uil-briefcase-alt' },
    { href: '#degree', label: 'Qualification', icon: 'uil-graduation-cap' },
    { href: '#certifications', label: 'Certifications', icon: 'uil-award' },
    { href: '#contact', label: 'Contact', icon: 'uil-message' },
];

// Free-Standing Creative DP Monogram Icon Logo for Dilip Pathak (No Enclosing Square)
const DPLogoIcon = () => (
    <svg className="nav_logo-icon" viewBox="0 0 40 40" width="34" height="34" fill="none">
        <defs>
            <linearGradient id="navDpBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
        </defs>
        {/* D Glyph: Clean geometric curve in title dark color */}
        <path
            d="M6 7h10.5C23.5 7 28 11.8 28 18.5S23.5 30 16.5 30H6V7z"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="nav_logo-path-d"
        />
        {/* P Glyph: Intertwining loop in vibrant cyan blue */}
        <path
            d="M17 14h9c4.2 0 7.5 3 7.5 7s-3.3 7-7.5 7h-9V37"
            stroke="url(#navDpBlue)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* Operational Status Node */}
        <circle cx="34" cy="9" r="3" fill="#10b981" />
    </svg>
);

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.classList.add('light-theme');
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                {
                    rootMargin: '-10% 0px -60% 0px',
                    threshold: 0,
                }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        showMenu(false);
        scrollToTarget(href);
    };

    return (
        <header className={`header${scrolled ? ' scroll-header' : ''}`}>
            <nav className="nav container">
                <a
                    href="#home"
                    className="nav_logo"
                    onClick={(e) => handleNavClick(e, '#home')}
                    aria-label="Dilip Pathak"
                >
                    <DPLogoIcon />
                </a>

                <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
                    <ul className="nav_list">
                        {navLinks.map(({ href, label, icon }) => {
                            const id = href.replace('#', '');
                            const isActive = activeSection === id;
                            return (
                                <li className="nav_item" key={id}>
                                    <a
                                        href={href}
                                        className={`nav_link${isActive ? ' active-link' : ''}`}
                                        onClick={(e) => handleNavClick(e, href)}
                                    >
                                        <i className={`uil ${icon} nav__icon`}></i>
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(false)}
                    ></i>
                </div>

                <div className="nav__buttons">
                    {/* Mobile Menu Toggle */}
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
