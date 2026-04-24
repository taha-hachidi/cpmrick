import { FiSmartphone, FiGlobe, FiCpu, FiZap, FiBarChart2, FiShield, FiLayers, FiTrendingUp, FiArrowRight, FiMail, FiCalendar, FiTarget, FiPenTool, FiCode } from "react-icons/fi";

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
  { label: 'Consultation', to: '/consultation' }
];

export const stats = [
  { value: 'Web • Mobile • AI', label: 'A complete offer to launch and scale modern digital products' },
  { value: 'Premium UX', label: 'High-end visual design inspired by top SaaS experiences' },
  { value: 'Automation', label: 'Less manual work, faster execution, smoother operations' }
];

export const services = [
  {
    icon: FiGlobe,
    title: 'Custom Web Applications',
    description:
      'Premium websites, business platforms, dashboards, client portals, and conversion-focused web products.',
    bullets: ['Marketing websites', 'Business dashboards', 'Client portals', 'Conversion-first UX']
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Applications',
    description:
      'Elegant, high-performance mobile apps for iOS and Android designed around real user behavior.',
    bullets: ['Cross-platform delivery', 'Polished app flows', 'Push-ready architecture', 'Scalable releases']
  },
  {
    icon: FiCpu,
    title: 'AI Agents',
    description:
      'Conversational agents, internal copilots, document assistants, smart knowledge bases, and advanced FAQ systems.',
    bullets: ['Knowledge assistants', 'Document search', 'Internal copilots', 'Business automation']
  },
  {
    icon: FiZap,
    title: 'Workflow Automation',
    description:
      'Tool integrations, repetitive task automation, data synchronization, smart alerts, and efficient internal flows.',
    bullets: ['Lead routing', 'CRM sync', 'Email triggers', 'Ops automation']
  },
  {
    icon: FiBarChart2,
    title: 'Product Strategy & Consulting',
    description:
      'Discovery, feature scoping, MVP planning, prioritization, and technical direction aligned with your budget.',
    bullets: ['Discovery workshops', 'MVP prioritization', 'Technical roadmap', 'Delivery framing']
  },
  {
    icon: FiShield,
    title: 'Quality, Security & Performance',
    description:
      'Reliable architecture, backend validation, clean database design, and polished user experiences that feel solid.',
    bullets: ['Robust APIs', 'Safer forms', 'Performance-minded UI', 'Long-term maintainability']
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Scoping',
    text: 'We align on your business model, goals, audience, and the highest-impact features to build first.',
    icon: FiTarget
  },
  {
    number: '02',
    title: 'UX, Design & Prototype',
    text: 'We shape a clear user journey with a refined interface that feels modern, premium, and persuasive.',
    icon: FiPenTool
  },
  {
    number: '03',
    title: 'Development & Integration',
    text: 'Frontend, backend, database, and automation are assembled into a scalable foundation built to grow.',
    icon: FiCode
  },
  {
    number: '04',
    title: 'Launch & Iteration',
    text: 'We launch, refine, improve, and prepare the product for traction, feedback, and future expansion.',
    icon: FiTrendingUp
  }
];

export const projects = [
  {
    title: 'StudioFlow CRM',
    category: 'Web platform',
    summary: 'Lead management, proposals, and client follow-up inside a premium business interface.',
    outcome: 'Structured pipeline, cleaner sales visibility, and a stronger service image.'
  },
  {
    title: 'MoveZen Mobile',
    category: 'Mobile app',
    summary: 'Scheduling, field-service tracking, and real-time notifications for service-based teams.',
    outcome: 'Faster operational flow with a mobile experience designed for day-to-day execution.'
  },
  {
    title: 'LexiBot AI',
    category: 'AI agent',
    summary: 'A business assistant that understands documents and responds with contextual accuracy.',
    outcome: 'Fewer support delays and better access to business knowledge in one place.'
  },
  {
    title: 'OpsPulse Automation',
    category: 'Workflow automation',
    summary: 'An automated pipeline connecting forms, email, CRM, and operational tracking systems.',
    outcome: 'Reduced manual handling and smoother execution from lead capture to action.'
  }
];

export const differentiators = [
  {
    icon: FiLayers,
    title: 'One team across the full stack',
    text: 'Design, development, database, and automation stay aligned from start to finish.'
  },
  {
    icon: FiTrendingUp,
    title: 'Built to sell, not just to exist',
    text: 'Every screen is designed to build trust, support action, and reinforce your business positioning.'
  },
  {
    icon: FiZap,
    title: 'Delivery focused on outcomes',
    text: 'We build useful, fast, elegant systems that are simple to maintain and easy to scale.'
  }
];

export const bookingTypes = [
  'Web project discovery',
  'Mobile application',
  'AI agent',
  'Workflow automation',
  'Strategy audit / consulting'
];

export const trustPoints = [
  'Built with React, Spring Boot, and SQL-backed workflows',
  'Designed for founders, startups, consultants, and modern agencies',
  'Clear process, premium visuals, and business-first recommendations'
];

export const pageIntros = {
  services: {
    eyebrow: 'Services',
    title: 'A complete digital product offer with room to grow.',
    description: 'From launch websites to internal tools, AI assistants, and mobile products, every engagement is designed to strengthen how your business looks and operates.'
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Concepts and product directions designed to feel premium from the first click.',
    description: 'The goal is not just to ship software. The goal is to shape an experience that feels credible, modern, and ready for growth.'
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start the conversation with a clear brief and a premium first impression.',
    description: 'Tell us what you want to build, what stage you are at, and what kind of support you need. We will come back with direction that is practical and ambitious.'
  },
  consultation: {
    eyebrow: 'Consultation',
    title: 'Book a strategy call and turn a rough idea into a clear plan.',
    description: 'Use the consultation page to pick the type of support you need and lock in a time slot for a focused conversation.'
  }
};

export const ctaCards = [
  {
    icon: FiArrowRight,
    title: 'Need a product roadmap?',
    text: 'Book a consultation and align the scope, stack, and priorities before building.',
    to: '/consultation',
    action: 'Book a consultation'
  },
  {
    icon: FiMail,
    title: 'Ready to request a quote?',
    text: 'Share your project details and let us recommend the best format for delivery.',
    to: '/contact',
    action: 'Send your brief'
  }
];
