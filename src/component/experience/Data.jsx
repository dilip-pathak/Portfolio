// Authentic Professional Experience Data from Dilip Kumar Pathak's Resume
import infosysLogo from '../../asset/infosys logo.png';
import powerBridgeLogo from '../../asset/powerBridge.jpg';
import wiproLogo from '../../asset/wipro.png';
import iknowTechLogo from '../../asset/IknowTech.jpg';
import rasplLogo from '../../asset/RASPL.jpg';

export const experienceData = [
    {
        id: 'infosys',
        company: 'Infosys',
        role: 'IT Operation Manager',
        period: 'Jan 2025 – Present',
        duration: 'Current Role',
        location: 'Bengaluru, India',
        badge: 'Current Role',
        client: null,
        accentColor: '#0284c7',
        monogram: 'INF',
        logo: infosysLogo,
        domain: 'Enterprise Infrastructure & ITIL Operations',
        summary: 'Overseeing complete IT infrastructure operations, enterprise server and network monitoring, ITIL framework governance, and audit compliance across service delivery.',
        metrics: [
            { label: 'Framework', value: 'ITIL v4' },
            { label: 'Priority', value: 'P1/P2 Incidents' },
            { label: 'Scope', value: 'Servers & Storage' },
            { label: 'Governance', value: 'SLA & Audits' },
        ],
        responsibilities: [
            'Oversee the installation, maintenance, and monitoring of enterprise IT infrastructure including servers, networks, storage, and data centers.',
            'Manage upgrades, migrations, and regular security patches for enterprise hardware and software systems.',
            'Ensure rigorous adherence to ITIL frameworks for incident, problem, and change management across operations.',
            'Monitor Key Performance Indicators (KPIs) for IT services, proactively address gaps, and conduct regular audits and risk assessments.',
            'Evaluate and select tools and technologies that elevate operational efficiency and business continuity.',
            'Oversee helpdesk and technical support teams to maintain high user satisfaction and zero-breach SLA performance.'
        ],
        technologies: ['ITIL v4', 'ITSM', 'Incident Management', 'Change Management', 'Servers & Storage', 'Data Center Audits', 'KPI Reporting', 'SLA Governance']
    },
    {
        id: 'powerbridge',
        company: 'Power bridge system Pvt ltd',
        role: 'Service Delivery Manager',
        period: 'Jun 2024 – Dec 2024',
        duration: '7 Months',
        location: 'Bengaluru, India',
        badge: 'Major Incident Command',
        client: null,
        accentColor: '#10b981',
        monogram: 'PBS',
        logo: powerBridgeLogo,
        domain: 'Critical Incident & Problem Management',
        summary: 'Served as Major Incident Manager driving critical P1/P2 incident bridge calls, Root Cause Analysis (RCA) statements, CAB approvals, and zero-defect CSAT delivery.',
        metrics: [
            { label: 'Incident Command', value: 'P1 / P2 Major' },
            { label: 'CSAT Target', value: 'Zero Defects' },
            { label: 'Remediation', value: 'End-to-End RCA' },
            { label: 'Advisory', value: 'CAB & SLAs' },
        ],
        responsibilities: [
            'Configured and executed Incident and Problem Management based on ITIL methodologies to guarantee top-tier service delivery quality.',
            'Served as Major Incident Manager commanding critical incident bridge calls, rapidly assembling onshore and offshore technical resources during severe outages.',
            'Partnered with NOC engineers during high-impact outages to expedite initial troubleshooting, escalations, and executive client communications.',
            'Completed comprehensive Root Cause Analysis (RCA) and formulated short-term and long-term preventive remediation plans.',
            'Attended Change Advisory Board (CAB) meetings and actively closed open risks from Data Centers to protect production environments.',
            'Achieved agreed SLAs across enterprise accounts, maintaining Customer Satisfaction (CSAT) with zero defects.'
        ],
        technologies: ['Major Incident Command', 'Root Cause Analysis (RCA)', 'Problem Management', 'CAB Governance', 'NOC Operations', 'SLA Adherence', 'Bridge Calls', 'Data Center Risk']
    },
    {
        id: 'wipro',
        company: 'Wipro Pvt. Ltd.',
        role: 'IT Operation Manager',
        period: 'Apr 2022 – May 2024',
        duration: '2 Years 2 Mos',
        location: 'PAN India',
        badge: 'Enterprise Deployment',
        client: 'Adani Group',
        accentColor: '#3b82f6',
        monogram: 'WIP',
        logo: wiproLogo,
        domain: 'PAN India Infrastructure & 35+ Team Command',
        summary: 'Managed LAN & Wireless infrastructure for Adani Green Energy across PAN India, led a team of 35+ technical engineers, and spearheaded global ServiceNow rollout.',
        metrics: [
            { label: 'Team Led', value: '35+ Engineers' },
            { label: 'Coverage', value: 'PAN India' },
            { label: 'Key Client', value: 'Adani Green' },
            { label: 'Rollout', value: 'ServiceNow' },
        ],
        responsibilities: [
            'Managed LAN & Wireless Network Infrastructure of Adani Green Energy for PAN India, ensuring peak uptime and resilient communication links.',
            'Directly commanded a distributed team of 35+ Technical Engineers across diverse geographical locations.',
            'Spearheaded implementation and global rollout for ServiceNow, streamlining incident tracking, change requests, and workflows.',
            'Maintained multi-vendor infrastructure: servers, enterprise networks, storage systems, virtualization OS, switches, and Wireless LAN Controllers (WLCs).',
            'Managed IT asset inventory stock, IP pool subnets, server IPs with port details, and executed ARC/RRC signoffs with customers.',
            'Handled enterprise software licensing (O365, AutoCAD, Primavera, Aspen Tech, Adobe) and vendor budgeting/evaluations.',
            'Enforced data security, user access controls, security patches, and regulatory compliance to safeguard enterprise infrastructure.'
        ],
        technologies: ['ServiceNow Rollout', 'Cisco Switches & WLC', 'PAN India Wireless', 'Adani Green Energy', '35+ Engineers Command', 'CMDB & Assets', 'WAN & Security', 'O365 Enterprise']
    },
    {
        id: 'inknowtech',
        company: 'In Know Tech. Ltd.',
        role: 'Team Lead — ITOM & Support',
        period: 'Nov 2021 – Mar 2022',
        duration: '5 Months',
        location: 'Bengaluru, India',
        badge: 'Global ITOM',
        client: 'SAP Labs',
        accentColor: '#8b5cf6',
        monogram: 'IKT',
        logo: iknowTechLogo,
        domain: 'Global ITOM & Citrix Virtualization',
        summary: 'Led the ITOM team supporting SAP Labs across US, AMEA, and JPJ regions, implementing ServiceNow certified systems and Citrix virtualization.',
        metrics: [
            { label: 'Regions', value: 'US, AMEA, JPJ' },
            { label: 'Client', value: 'SAP Labs' },
            { label: 'Stack', value: 'ServiceNow ITOM' },
            { label: 'Virtualization', value: 'Citrix Cloud' },
        ],
        responsibilities: [
            'Managed the ITOM team of SAP Labs supporting US, AMEA, and JPJ international regions.',
            'Incorporated the implementation of ServiceNow Certified Systems and supported ERP environments under the ITIL framework.',
            'Analyzed daily operations, prevented SLA breaches, and refined L2 technical end-user incident requirements.',
            'Administered Citrix application virtualization, deploying security patches, compliance packages, and troubleshooting user sessions.',
            'Prioritized high-urgency queries raised by Service Desk, established knowledge transfer (KT) sessions, and prepared executive operational decks.'
        ],
        technologies: ['ServiceNow ITOM', 'SAP Labs Global', 'Citrix Virtualization', 'ITIL Framework', 'ERP Support', 'L2 Technical Escalations', 'SLA Audits', 'Knowledge Transfer']
    },
    {
        id: 'raspl',
        company: 'RASPL',
        role: 'System Engineer',
        period: 'Jul 2018 – Oct 2021',
        duration: '3 Years 4 Mos',
        location: 'India',
        badge: 'Network Engineering',
        client: null,
        accentColor: '#f59e0b',
        monogram: 'RAS',
        logo: rasplLogo,
        domain: 'Enterprise Networking & SOP Execution',
        summary: 'Designed, implemented, and troubleshot enterprise network environments, delivered end-to-end desktop and Citrix virtualization support.',
        metrics: [
            { label: 'Tenure', value: '3+ Years' },
            { label: 'Core Focus', value: 'Enterprise Network' },
            { label: 'Platform', value: 'Citrix Virtual' },
            { label: 'Execution', value: 'SOPs & Best Practices' },
        ],
        responsibilities: [
            'Designed, implemented, and troubleshot robust enterprise network infrastructures ensuring uninterrupted connectivity.',
            'Established and executed Standard Operating Procedures (SOPs) and best practices targeting organizational operational excellence.',
            'Provided end-to-end remote and onsite desktop support, resolving complex technical issues across hardware, OS, and peripheral devices.',
            'Administered L1 troubleshooting for Citrix-based applications, change requests, and desktop user deployments.',
            'Collaborated daily with floor co-engineers to monitor ticket resolution efficiency and measure change effectiveness.'
        ],
        technologies: ['Enterprise Networks', 'Citrix Virtualization', 'Network Troubleshooting', 'Desktop Support', 'SOP Development', 'Change Effectiveness', 'Hardware & OS']
    }
];
