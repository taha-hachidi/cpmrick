import {
  FiSmartphone,
  FiGlobe,
  FiCpu,
  FiZap,
  FiBarChart2,
  FiShield,
  FiLayers,
  FiTrendingUp
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
  { label: 'Consultation', href: '#booking' }
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
      'Premium websites, business platforms, dashboards, client portals, and conversion-focused web products.'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Applications',
    description:
      'Elegant, high-performance mobile apps for iOS and Android designed around real user behavior.'
  },
  {
    icon: FiCpu,
    title: 'AI Agents',
    description:
      'Conversational agents, internal copilots, document assistants, smart knowledge bases, and advanced FAQ systems.'
  },
  {
    icon: FiZap,
    title: 'Workflow Automation',
    description:
      'Tool integrations, repetitive task automation, data synchronization, smart alerts, and efficient internal flows.'
  },
  {
    icon: FiBarChart2,
    title: 'Product Strategy & Consulting',
    description:
      'Discovery, feature scoping, MVP planning, prioritization, and technical direction aligned with your budget.'
  },
  {
    icon: FiShield,
    title: 'Quality, Security & Performance',
    description:
      'Reliable architecture, backend validation, clean database design, and polished user experiences that feel solid.'
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Scoping',
    text: 'We align on your business model, goals, audience, and the highest-impact features to build first.'
  },
  {
    number: '02',
    title: 'UX, Design & Prototype',
    text: 'We shape a clear user journey with a refined interface that feels modern, premium, and persuasive.'
  },
  {
    number: '03',
    title: 'Development & Integration',
    text: 'Frontend, backend, database, and automation are assembled into a scalable foundation built to grow.'
  },
  {
    number: '04',
    title: 'Launch & Iteration',
    text: 'We launch, refine, improve, and prepare the product for traction, feedback, and future expansion.'
  }
];

export const projects = [
  {
    title: 'StudioFlow CRM',
    category: 'Web platform',
    summary: 'Lead management, proposals, and client follow-up inside a premium business interface.'
  },
  {
    title: 'MoveZen Mobile',
    category: 'Mobile app',
    summary: 'Scheduling, field-service tracking, and real-time notifications for service-based teams.'
  },
  {
    title: 'LexiBot AI',
    category: 'AI agent',
    summary: 'A business assistant that understands documents and responds with contextual accuracy.'
  },
  {
    title: 'OpsPulse Automation',
    category: 'Workflow automation',
    summary: 'An automated pipeline connecting forms, email, CRM, and operational tracking systems.'
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
