import React from 'react';
import './skills.css';
import SectionHeading from '../motion/SectionHeading';
import { motion } from 'framer-motion';

// Authentic SVGs for Enterprise IT & Infrastructure Tools
const ServiceNowIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="currentColor" style={{ color: '#81B5A1' }} className="skills__svg-icon">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z"/>
    </svg>
);

const ITILIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <circle cx="12" cy="12" r="9.5" stroke="#0284c7" strokeWidth="1.8"/>
        <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CiscoIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <path d="M3 14v3M6 10v7M9 13v4M12 7v10M15 13v4M18 10v7M21 14v3" stroke="#049fd9" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
);

const VisioIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#3955A3"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#3955A3"/>
        <rect x="8.5" y="14" width="7" height="7" rx="1.5" fill="#3955A3"/>
        <path d="M6.5 10v2h5.5v2" stroke="#3955A3" strokeWidth="1.5"/>
    </svg>
);

const CMDBIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#8b5cf6" strokeWidth="1.8"/>
        <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#8b5cf6" strokeWidth="1.8"/>
        <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#8b5cf6" strokeWidth="1.8"/>
    </svg>
);

const BigFixIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <path d="M12 2L4 5v6.5c0 5 3.4 9.7 8 10.5 4.6-.8 8-5.5 8-10.5V5l-8-3z" stroke="#0284c7" strokeWidth="1.8" fill="none"/>
        <path d="M9 12l2 2 4-4" stroke="#0284c7" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const CitrixIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="currentColor" style={{ color: '#0ea5e9' }} className="skills__svg-icon">
        <path d="M12 2a10 10 0 0 0-7.07 17.07l1.41-1.41A8 8 0 1 1 12 20v2a10 10 0 0 0 0-20z"/>
    </svg>
);

const PythonIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <path d="M11.92 2c-4.14 0-3.88 1.8-3.88 1.8l.01 1.86h3.94v.56H5.43s-2.63.3-2.63 3.96c0 3.66 2.3 3.54 2.3 3.54h1.37v-1.93s-.07-2.3 2.25-2.3h3.88s2.18.04 2.18-2.14V4.14S16.03 2 11.92 2zm-2.16 1.13a.72.72 0 1 1 0 1.44.72.72 0 0 1 0-1.44z" fill="#387eb8"/>
        <path d="M12.08 22c4.14 0 3.88-1.8 3.88-1.8l-.01-1.86H12.01v-.56h6.56s2.63-.3 2.63-3.96c0-3.66-2.3-3.54-2.3-3.54h-1.37v1.93s.07 2.3-2.25 2.3H11.4s-2.18-.04-2.18 2.14v3.35s1.25 2.14 5.36 2.14zm2.16-1.13a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44z" fill="#ffc331"/>
    </svg>
);

const CppIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <rect x="2" y="2.5" width="20" height="19" rx="5" fill="#00599C" fillOpacity="0.12" stroke="#00599C" strokeWidth="1.6"/>
        <text x="12" y="15.5" textAnchor="middle" fill="#00599C" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.3px">C/C++</text>
    </svg>
);

const AzureIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <path d="M13.05 3.5L7.45 13.8l3.4 3.7h8.65L13.05 3.5z" fill="#0078D4"/>
        <path d="M4.5 17.5l5.1-9.4 3.45 6.2-2.7 3.2H4.5z" fill="#50E6FF"/>
    </svg>
);

const AWSIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <path d="M6.8 17.8c3.5 1.5 8.1.9 11.7-1 .4-.2.7.2.3.4-3.8 2.2-8.5 2.5-12.4 1-.4-.2-.2-.5.4-.4z" fill="#FF9900"/>
        <path d="M18.8 16.7c-.3-.5-2.2-.2-3.1 0-.3 0-.4-.2-.1-.5 1.5-.9 3.9-.6 4.2-.2.3.4-.1 2.8-1.5 3.9-.3.2-.5.1-.3-.2.3-.8 1.1-2.5.8-3z" fill="#FF9900"/>
        <text x="12" y="12.5" textAnchor="middle" fill="#FF9900" fontSize="8" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5px">AWS</text>
    </svg>
);

const ClaudeIcon = () => (
    <svg viewBox="0 0 24 24" width="1.1rem" height="1.1rem" fill="none" className="skills__svg-icon">
        <circle cx="12" cy="12" r="10" fill="#CC785C" fillOpacity="0.12" stroke="#CC785C" strokeWidth="1.4" />
        <path
            d="M12 4.8L13.6 9.4L18.2 12L13.6 14.6L12 19.2L10.4 14.6L5.8 12L10.4 9.4L12 4.8Z"
            fill="#CC785C"
        />
    </svg>
);

const skillsCategories = [
    {
        id: 'technical',
        index: '01',
        category: 'Technical',
        subtitle: 'Programming Languages, Cloud Systems & AI Architecture',
        badge: 'Technical',
        accentColor: '#6366f1',
        icon: 'bx bx-code-alt',
        skills: [
            { name: 'Python', customIcon: <PythonIcon /> },
            { name: 'C/C++', customIcon: <CppIcon /> },
            { name: 'Azure', customIcon: <AzureIcon /> },
            { name: 'AWS', customIcon: <AWSIcon /> },
            { name: 'Claude', customIcon: <ClaudeIcon /> },
        ],
    },
    {
        id: 'itsm',
        index: '02',
        category: 'ITIL & Service Delivery',
        subtitle: 'Incident, Problem & Change Management',
        badge: 'ITIL v4',
        accentColor: '#0284c7',
        icon: 'bx bx-shield-quarter',
        skills: [
            { name: 'Incident Management (P1/P2)', iconClass: 'bx bx-error-alt', color: '#ef4444' },
            { name: 'Problem Management & RCA', iconClass: 'bx bx-analyse', color: '#0284c7' },
            { name: 'Change Management & CAB', iconClass: 'bx bx-git-branch', color: '#8b5cf6' },
            { name: 'Service Delivery Management', iconClass: 'bx bx-briefcase-alt-2', color: '#0284c7' },
            { name: 'SLA & CSAT Governance', iconClass: 'bx bx-target-lock', color: '#10b981' },
            { name: 'ITIL v4 Governance', customIcon: <ITILIcon /> },
            { name: 'Bridge Call Operations', iconClass: 'bx bx-broadcast', color: '#f59e0b' },
            { name: 'SOP & Process Optimization', iconClass: 'bx bx-slider-alt', color: '#64748b' },
        ],
    },
    {
        id: 'infra',
        index: '03',
        category: 'Infrastructure & Systems',
        subtitle: 'Enterprise Networks, Servers & Cloud Virtualization',
        badge: 'Enterprise',
        accentColor: '#10b981',
        icon: 'bx bx-server',
        skills: [
            { name: 'IT Infrastructure Management', iconClass: 'bx bx-server', color: '#10b981' },
            { name: 'PAN India LAN & Wireless', iconClass: 'bx bx-wifi', color: '#0284c7' },
            { name: 'Cisco Switches & WLC Upgrades', customIcon: <CiscoIcon /> },
            { name: 'Data Center Risk Management', iconClass: 'bx bx-data', color: '#ef4444' },
            { name: 'Citrix Virtual Apps & Desktops', customIcon: <CitrixIcon /> },
            { name: 'Storage & Hardware Migrations', iconClass: 'bx bx-hdd', color: '#8b5cf6' },
            { name: 'Endpoint Compliance', iconClass: 'bx bx-check-shield', color: '#10b981' },
            { name: 'L2/L3 Network Escalations', iconClass: 'bx bx-network-chart', color: '#38bdf8' },
        ],
    },
    {
        id: 'tools',
        index: '04',
        category: 'Enterprise Tools & Platforms',
        subtitle: 'Ticketing, CMDB, Monitoring & Remote Administration',
        badge: 'Tools & CMDB',
        accentColor: '#8b5cf6',
        icon: 'bx bx-layer',
        skills: [
            { name: 'ServiceNow (ITOM / ITSM)', customIcon: <ServiceNowIcon /> },
            { name: 'CMDB Asset Databases', customIcon: <CMDBIcon /> },
            { name: 'HCL BigFix Endpoint', customIcon: <BigFixIcon /> },
            { name: 'MS Visio Workflow Design', customIcon: <VisioIcon /> },
            { name: 'Microsoft 365 Administration', iconClass: 'bx bxl-microsoft', color: '#00a4ef' },
            { name: 'Jira & Confluence', iconClass: 'bx bx-task', color: '#0284c7' },
            { name: 'Software Licensing & Audit', iconClass: 'bx bx-receipt', color: '#f59e0b' },
            { name: 'Enterprise WAN & Peripherals', iconClass: 'bx bx-devices', color: '#64748b' },
        ],
    },
    {
        id: 'leadership',
        index: '05',
        category: 'Governance & Leadership',
        subtitle: 'Multi-Location Team Command & Vendor Management',
        badge: 'Management',
        accentColor: '#f59e0b',
        icon: 'bx bx-group',
        skills: [
            { name: '35+ Technical Team Leadership', iconClass: 'bx bx-group', color: '#0284c7' },
            { name: 'IT Procurement & Vendor Review', iconClass: 'bx bx-cart-alt', color: '#10b981' },
            { name: 'Stakeholder & Client Relations', iconClass: 'bx bx-user-check', color: '#8b5cf6' },
            { name: 'Compliance & Audit Readiness', iconClass: 'bx bx-clipboard', color: '#ef4444' },
            { name: 'MIS Reporting & Executive Decks', iconClass: 'bx bx-bar-chart-alt-2', color: '#f59e0b' },
            { name: 'Conflict Resolution', iconClass: 'bx bx-conversation', color: '#0284c7' },
            { name: 'Cross-functional Collaboration', iconClass: 'bx bx-shuffle', color: '#10b981' },
            { name: 'Contract ARC/RRC Signoff', iconClass: 'bx bx-edit-alt', color: '#64748b' },
        ],
    },
];

// Spring pop-up variant for skills pills
const skillPillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.12 + i * 0.035,
            type: 'spring',
            stiffness: 380,
            damping: 20,
        },
    }),
};

const rowVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.08 + i * 0.08,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <SectionHeading title="Skills & Competencies" subtitle="IT Operations • Cloud & Technical Systems • ITIL Frameworks" />

            <div className="skills__container container">
                {/* Open Editorial Stream (NO BOXES) */}
                <div className="skills__stream">
                    {skillsCategories.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="skills__stream-row"
                            custom={index}
                            variants={rowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            {/* Left Column: Domain Index & Narrative Title */}
                            <div className="skills__stream-meta">
                                <div className="skills__stream-index-row">
                                    <span className="skills__stream-num" style={{ color: item.accentColor }}>
                                        {item.index}
                                    </span>
                                    <span
                                        className="skills__stream-badge"
                                        style={{
                                            color: item.accentColor,
                                            borderColor: `${item.accentColor}40`,
                                            background: `${item.accentColor}12`,
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                </div>
                                <h3 className="skills__stream-title">{item.category}</h3>
                                <p className="skills__stream-sub">{item.subtitle}</p>
                            </div>

                            {/* Right Column: Floating Spring Pop Pills */}
                            <div className="skills__stream-pills">
                                {item.skills.map((skill, sIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skills__pill"
                                        custom={sIndex}
                                        variants={skillPillVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        whileTap={{ scale: 0.96 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                                    >
                                        <span className="skills__pill-icon">
                                            {skill.customIcon ? (
                                                skill.customIcon
                                            ) : (
                                                <i
                                                    className={skill.iconClass}
                                                    style={skill.color ? { color: skill.color } : {}}
                                                />
                                            )}
                                        </span>
                                        <span className="skills__pill-text">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
