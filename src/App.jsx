import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Palette,
  Mail,
  MapPin,
  Menu,
  X,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  Award,
  Sliders,
  Eye,
  ArrowUp,
  Copy,
  Check,
  Calendar,
  Clock,
  MessageCircle,
  Globe2,
  Code2,
  Link,
  PenTool,
  Camera,
} from 'lucide-react';

// Brand icon replacements (lucide v3 removed social brand icons)
const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zm0-12h4V4H8C5.792 4 4 5.792 4 8s1.792 4 4 4zm4-12v8h4c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4zm4 12c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4zm-4 0H8c-2.208 0-4 1.792-4 4" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.73-1.54-4.015-2.483-6.498-2.568l-.697.27zm7.924 1.683c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.09-2.304-.87-4.43-2.316-6.386z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: 'Nova AI Design System',
    category: 'UI/UX Design',
    badge: 'Design Systems',
    year: '2024',
    client: 'Nova Technologies Inc.',
    description: 'An enterprise multi-brand design tokens & component architecture system empowering 40+ engineering teams.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    stats: { metric: '+140%', label: 'Team Dev Velocity' },
    caseStudy: {
      role: 'Lead Product Designer & Design Architect',
      timeline: '4 Months',
      tools: ['Figma', 'Tokens Studio', 'React / Storybook', 'Zeroheight'],
      challenge: 'Nova suffered from inconsistent UX across three flagship SaaS products, causing redundant front-end implementations and slow feature turnarounds.',
      solution: 'Constructed an atomic token-first design system with semantic dark-mode theming, comprehensive WCAG 2.1 AAA compliance, and accessible interactive variants.',
      outcomes: [
        'Cut cross-functional UI delivery cycle by 45%.',
        'Achieved 98% design consistency audit score across mobile & web.',
        'Adopted by 120+ internal designers and engineers.',
      ],
    },
  },
  {
    id: 2,
    title: 'Verve – Kinetic Fintech App',
    category: 'Mobile Apps',
    badge: 'Fintech / Mobile UX',
    year: '2024',
    client: 'Verve Financial Group',
    description: 'A wealth generation & micro-investing mobile application built for Gen-Z and digital nomads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    stats: { metric: '4.9 ★', label: 'App Store Rating' },
    caseStudy: {
      role: 'End-to-End Product Designer',
      timeline: '3 Months',
      tools: ['Figma', 'Protopie', 'After Effects', 'Spline 3D'],
      challenge: 'Traditional investment apps are cluttered with intimidating jargon and tabular spreadsheets that alienate younger first-time investors.',
      solution: 'Designed an intuitive conversational transaction flow, real-time micro-animations, and haptic feedback loops that gamified savings without gamifying risk.',
      outcomes: [
        'Over 250,000 onboarded users within first 90 days.',
        'Selected as "App of the Day" on the iOS App Store.',
        'Reduced registration drop-off rate from 38% down to 9%.',
      ],
    },
  },
  {
    id: 3,
    title: 'Komorebi Botanical Spirits',
    category: 'Graphic & Branding',
    badge: 'Brand Identity & Packaging',
    year: '2023',
    client: 'Komorebi Distilleries (Kyoto)',
    description: 'Bespoke identity, artisanal typography, and embossed foil packaging for an ultra-premium craft gin.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    stats: { metric: 'Gold Winner', label: 'Pentawards 2023' },
    caseStudy: {
      role: 'Creative Director & Identity Designer',
      timeline: '2.5 Months',
      tools: ['Adobe Illustrator', 'Photoshop', 'Blender 3D', 'Custom Typography'],
      challenge: 'Carving a distinct niche within a saturated luxury spirits market while balancing centuries-old Japanese tradition with contemporary western minimalism.',
      solution: 'Created custom woodblock-inspired kanji glyphs, blind-debossed cotton labels, and a unique silhouette bottle crafted from recycled frosted obsidian glass.',
      outcomes: [
        'Sold out initial limited batch of 10,000 units in under 72 hours.',
        'Featured in Dieline, Wallpaper*, and Brand New (UnderConsideration).',
      ],
    },
  },
  {
    id: 4,
    title: 'Synapse Neural Workspace',
    category: 'UI/UX Design',
    badge: 'Desktop App & Spatial UI',
    year: '2024',
    client: 'Synapse Labs',
    description: 'An AI-driven mind-mapping workspace that transforms unstructured voice notes into visual knowledge graphs.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    stats: { metric: '$2.4M', label: 'Seed Round Raised' },
    caseStudy: {
      role: 'Principal UX Consultant',
      timeline: '6 Weeks Sprint',
      tools: ['Figma', 'Canvas API', 'Tailwind', 'Rive'],
      challenge: 'Organizing hyper-dimensional semantic connections on a 2D screen without inducing visual fatigue or cognitive overload.',
      solution: 'Engineered an adaptive organic canvas featuring magnetic node clustering, radial quick-action pies, and dynamic depth-of-field focus modes.',
      outcomes: [
        'Helped founders secure their venture seed funding round.',
        'Average user daily active session time exceeded 45 minutes.',
      ],
    },
  },
  {
    id: 5,
    title: 'Aura Spatial Audio Exhibition',
    category: 'Visual Systems',
    badge: '3D & Motion System',
    year: '2023',
    client: 'Berlin Sound Week',
    description: 'Generative interactive branding, kinetic billboard visuals, and spatial acoustic guides for an immersive audio festival.',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    stats: { metric: '65k+', label: 'Festival Attendees' },
    caseStudy: {
      role: 'Visual Systems Lead',
      timeline: '2 Months',
      tools: ['TouchDesigner', 'Cinema 4D', 'Illustrator'],
      challenge: 'Visualizing invisible spatial audio frequencies in physical indoor spaces and citywide digital billboards in real-time.',
      solution: 'Constructed an algorithm-driven dynamic fluid identity that reacted in real-time to decibel shifts and sonic frequencies.',
      outcomes: [
        '100% digital engagement across 35 experiential sound tunnels.',
        'Press coverage across Dezeen and Wired Europe.',
      ],
    },
  },
  {
    id: 6,
    title: 'Pulse Wearable Health OS',
    category: 'Mobile Apps',
    badge: 'Smartwatch UI / IoT',
    year: '2023',
    client: 'Pulse Biosystems',
    description: 'Glanceable micro-interactions and biometric health monitoring interface optimized for round OLED displays.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    stats: { metric: '0.2s', label: 'Glance Cognition Time' },
    caseStudy: {
      role: 'Wearable UX Specialist',
      timeline: '3 Months',
      tools: ['Figma', 'Framer', 'Micro-typography Guide'],
      challenge: 'Ensuring critical biometric heart warnings are immediately legible even in direct outdoor sunlight or during high-intensity athletics.',
      solution: 'High-contrast neon chromatic indicators, curved edge tickers, and single-gesture radial dials.',
      outcomes: [
        'Decreased critical alerts reaction time by 60%.',
        'Awarded Red Dot Award: Brands & Communication Design.',
      ],
    },
  },
];

const SKILLS_STACK = [
  'UI/UX Architecture', 'Design Systems', 'Figma & Variables',
  'Prototyping', 'Art Direction', 'Visual Identity',
  'User Research', 'Typography', 'Blender 3D',
  'Motion & Micro-interactions', 'Tailwind CSS', 'Framer / Rive',
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.3, ease: 'easeOut' } },
};

// ─── AnimatedCounter ──────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ''), 10);
    if (isNaN(num)) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  const prefix = value.match(/^[^0-9]*/)?.[0] || '';
  const trailing = value.match(/[^0-9]+$/)?.[0] || '';

  return (
    <span ref={ref}>
      {prefix}{display}{trailing}{suffix}
    </span>
  );
}

// ─── CursorGlow ───────────────────────────────────────────────────────────────

function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

// ─── ScrollReveal Wrapper ─────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kai@valentine-creative.io');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBestWork = () => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('best-work-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById('best-work-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const bestWorkProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-x-hidden">

      {/* Cursor glow */}
      <CursorGlow />

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-900/25 via-violet-600/15 to-transparent rounded-full blur-[140px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[40%] -right-40 w-[550px] h-[550px] bg-indigo-900/15 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[10%] -left-40 w-[600px] h-[600px] bg-purple-950/25 rounded-full blur-[160px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #a855f7 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── HEADER ── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090e]/85 backdrop-blur-md border-b border-purple-950/50 shadow-2xl shadow-purple-950/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-900 p-[1px] shadow-lg shadow-purple-600/30 group-hover:shadow-purple-500/50 transition-all">
              <div className="w-full h-full bg-[#0b0b12] rounded-[11px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 to-white text-base">
                K·V
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-zinc-100 block group-hover:text-purple-300 transition-colors">KAI VALENTINE</span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-purple-400/80 block">UI/UX & Brand Director</span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[#11111a]/80 p-1.5 rounded-full border border-purple-900/30 backdrop-blur-md shadow-inner">
            {[
              { id: 'home', label: 'Home' },
              { id: 'my-work', label: 'My Work' },
              { id: 'contact', label: 'Contact Me' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleNavClick(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 relative ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100 hover:bg-purple-950/30'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md shadow-purple-600/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* CTA + Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-[11px] font-medium text-purple-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Q3/Q4 Projects
            </div>
            <motion.button
              onClick={() => handleNavClick('contact')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-full bg-gradient-to-br from-purple-500 via-indigo-600 to-violet-500 text-white shadow-lg shadow-purple-600/20"
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(139,92,246,0.5)' }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="px-4 py-2 transition-all ease-in duration-150 bg-[#09090f] rounded-full hover:bg-opacity-0 flex items-center gap-1.5">
                Let's Talk <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-purple-950/30 border border-purple-800/40 text-purple-300 hover:text-white focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-5 h-5" /></motion.span>
                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-5 h-5" /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0e0e17] border border-purple-800/40 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'my-work', label: 'My Work' },
                  { id: 'contact', label: 'Contact Me' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleNavClick(tab.id)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      activeTab === tab.id ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' : 'text-zinc-300 hover:bg-zinc-800/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs text-purple-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Open for new ventures
                  </span>
                  <span className="text-zinc-500">San Francisco / Remote</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── MAIN ── */}
      <main className="relative z-10 pt-24 sm:pt-28">
        <AnimatePresence mode="wait">

          {/* ═══════════════════════════════════════
              HOME PAGE
          ═══════════════════════════════════════ */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* HERO */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                  {/* Left */}
                  <motion.div
                    className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/40 shadow-sm shadow-purple-900/30">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                      <span className="text-xs font-semibold text-purple-200 tracking-wide uppercase">Independent Digital Designer & Architect</span>
                    </motion.div>

                    <motion.h1
                      variants={fadeUp}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]"
                    >
                      Crafting{' '}
                      <span className="shimmer-text">iconic identities</span>
                      {' '}& digital futures.
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                      Hello! I'm <span className="text-zinc-100 font-medium">Kai Valentine</span>, a multi-disciplinary UI/UX and Graphic Designer.
                      I bridge the gap between human intuition and elegant software systems—designing high-impact digital products, immersive web architectures, and boundary-pushing brands.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                      <motion.button
                        onClick={handleScrollToBestWork}
                        className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-purple-700/30 flex items-center gap-2 group"
                        whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(139,92,246,0.5)' }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <span>Explore Selected Works</span>
                        <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </motion.button>

                      <motion.button
                        onClick={() => handleNavClick('contact')}
                        className="px-6 py-3.5 rounded-full bg-[#12121e] border border-purple-800/50 text-zinc-200 font-semibold text-sm flex items-center gap-2 hover:bg-purple-950/40 hover:text-white hover:border-purple-600 transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span>Let's Build Together</span>
                        <Mail className="w-4 h-4 text-purple-400" />
                      </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      variants={fadeUp}
                      className="pt-6 border-t border-purple-950/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
                    >
                      {[
                        { value: '8+', label: 'Years Exp.' },
                        { value: '45+', label: 'Shipped Apps' },
                        { value: '14', label: 'Design Awards' },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-purple-300">
                            <AnimatedCounter value={stat.value} />
                          </div>
                          <div className="text-[11px] sm:text-xs text-zinc-500 font-medium tracking-wide uppercase mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Right – Portrait */}
                  <motion.div
                    className="lg:col-span-5 flex justify-center order-1 lg:order-2"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] group">

                      {/* Glow */}
                      <motion.div
                        className="absolute -inset-3 bg-gradient-to-tr from-purple-600/50 via-indigo-600/30 to-purple-400/40 rounded-3xl blur-2xl"
                        animate={{ opacity: [0.65, 1, 0.65] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      {/* Frame */}
                      <div className="relative w-full h-full rounded-2xl p-1 bg-gradient-to-b from-purple-500/50 via-purple-900/30 to-[#101018] shadow-2xl">
                        <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0a0a10] relative">
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                            alt="Kai Valentine – Creative Director"
                            className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-transparent to-transparent opacity-80" />

                          {/* Name tag */}
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-black/60 px-3.5 py-2 rounded-xl border border-purple-500/20">
                            <div>
                              <p className="font-semibold text-white">Kai Valentine</p>
                              <p className="text-[10px] text-purple-400">Principal Design Consultant</p>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                              <MapPin className="w-3 h-3 text-purple-400" />
                              <span>SF / LDN</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Badge – Top Left (floating) */}
                      <div className="float-badge-1 absolute -top-4 -left-4 bg-[#0e0e18]/90 backdrop-blur-md border border-purple-600/30 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-purple-900/50 text-purple-300">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Accolades</div>
                          <div className="text-xs font-semibold text-white">Awwwards SOTD '23</div>
                        </div>
                      </div>

                      {/* Badge – Bottom Right (floating) */}
                      <div className="float-badge-2 absolute -bottom-5 -right-3 bg-[#0e0e18]/90 backdrop-blur-md border border-purple-600/30 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                          UI
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-zinc-100">Figma Community</div>
                          <div className="text-[10px] text-purple-400">50k+ Clones & Stars</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* MARQUEE SKILLS */}
              <section className="py-6 border-y border-purple-950/60 bg-[#08080f]/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="marquee-track gap-3 sm:gap-4">
                    {[...SKILLS_STACK, ...SKILLS_STACK].map((skill, idx) => (
                      <span
                        key={idx}
                        className="mx-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#11111d] text-zinc-300 border border-purple-900/30 hover:border-purple-600/50 hover:text-white transition-all cursor-default whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* BEST WORK */}
              <section id="best-work-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <Reveal>
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2">
                        <Sparkles className="w-3.5 h-3.5" /> Handpicked Highlights
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        Selected Best Work
                      </h2>
                      <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                        High-impact digital case studies delivering tangible business metrics, refined visual poise, and seamless usability.
                      </p>
                    </div>
                    <motion.button
                      onClick={() => handleNavClick('my-work')}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group self-start md:self-auto"
                      whileHover={{ x: 4 }}
                    >
                      <span>Explore Complete Catalog ({PROJECTS.length})</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </Reveal>

                {/* Best work grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-80px' }}
                >
                  {bestWorkProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      variants={fadeUp}
                      whileHover={{ scale: 1.02, y: -6 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedProject(project)}
                      className="group relative rounded-3xl bg-[#0c0c14] border border-purple-950/80 hover:border-purple-600/50 transition-colors duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-950/40"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#10101c]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-black/20" />

                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/70 backdrop-blur-md text-purple-300 border border-purple-500/30">
                            {project.badge}
                          </span>
                          <motion.div
                            className="w-9 h-9 rounded-full bg-purple-900/60 border border-purple-500/40 backdrop-blur-md flex items-center justify-center text-white"
                            initial={{ opacity: 0, y: 8 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            animate={undefined}
                          >
                            <Eye className="w-4 h-4" />
                          </motion.div>
                        </div>

                        <div className="absolute bottom-4 left-4 bg-purple-950/80 backdrop-blur-md border border-purple-700/40 px-3 py-1.5 rounded-xl">
                          <div className="text-xs font-bold text-white">{project.stats.metric}</div>
                          <div className="text-[10px] text-purple-300">{project.stats.label}</div>
                        </div>
                      </div>

                      <div className="p-6 sm:p-7 space-y-4">
                        <div className="flex items-center justify-between text-xs text-zinc-500">
                          <span>{project.client}</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </h3>
                        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">{project.description}</p>
                        <div className="pt-2">
                          <span className="text-xs font-medium text-purple-400 group-hover:underline">Read Full Case Study</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Banner */}
                <Reveal delay={0.1}>
                  <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#120e24] via-[#0c0c16] to-[#07070a] border border-purple-800/40 text-center relative overflow-hidden shadow-2xl">
                    <motion.div
                      className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                      Need a bespoke system, overhaul or brand identity?
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
                      Whether you're an ambitious early-stage startup or an established enterprise, let's turn your vision into an iconic digital flagship.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <motion.button
                        onClick={() => handleNavClick('contact')}
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-600/30"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(139,92,246,0.5)' }}
                        whileTap={{ scale: 0.96 }}
                      >
                        Start a Project Conversation
                      </motion.button>
                      <motion.button
                        onClick={() => handleNavClick('my-work')}
                        className="px-8 py-3.5 rounded-full bg-[#161622] border border-purple-800/40 text-zinc-300 font-semibold text-sm hover:text-white hover:bg-purple-950/40 transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        View All 6+ Case Studies
                      </motion.button>
                    </div>
                  </div>
                </Reveal>
              </section>
            </motion.div>
          )}

          {/* ═══════════════════════════════════════
              MY WORK PAGE
          ═══════════════════════════════════════ */}
          {activeTab === 'my-work' && (
            <motion.div
              key="my-work"
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Reveal>
                <div className="max-w-3xl mb-12">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2">
                    <Briefcase className="w-3.5 h-3.5" /> Project Portfolio
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Work & Case Studies</h1>
                  <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
                    A structured compendium of digital products, visual systems, interface architectures, and identity design across mobile, web, and spatial platforms.
                  </p>
                </div>
              </Reveal>

              {/* Filter tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
                {['All', 'UI/UX Design', 'Mobile Apps', 'Graphic & Branding', 'Visual Systems'].map((filter) => {
                  const isActive = selectedFilter === filter;
                  return (
                    <motion.button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap border transition-all duration-200 ${
                        isActive
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border-purple-500'
                          : 'bg-[#10101a] text-zinc-400 hover:text-zinc-200 hover:bg-[#161624] border-purple-950/80'
                      }`}
                      whileTap={{ scale: 0.95 }}
                      layout
                    >
                      {filter}
                    </motion.button>
                  );
                })}
              </div>

              {/* Projects grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={stagger}
                initial="hidden"
                animate="show"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={fadeUp}
                      layout
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedProject(project)}
                      className="group rounded-3xl bg-[#0b0b14] border border-purple-950/80 hover:border-purple-600/50 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-xl hover:shadow-purple-950/30"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#12121f]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14] via-transparent to-transparent opacity-80" />
                        <div className="absolute top-3.5 left-3.5">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-purple-300 border border-purple-500/20">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-purple-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5 font-mono">
                            <span>{project.client}</span>
                            <span>{project.year}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                          <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                        </div>
                        <div className="pt-4 border-t border-purple-950/50 flex items-center justify-between text-xs">
                          <span className="text-purple-400 font-semibold">{project.badge}</span>
                          <span className="text-zinc-500 font-mono">{project.stats.metric}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* CTA Footer */}
              <Reveal delay={0.1}>
                <div className="mt-16 text-center py-12 px-6 rounded-3xl bg-[#0c0c16] border border-purple-900/30">
                  <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-1">Have a unique idea?</p>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">Let's tailor an interactive solution to your exact goals.</h4>
                  <motion.button
                    onClick={() => handleNavClick('contact')}
                    className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Inquire for Availability
                  </motion.button>
                </div>
              </Reveal>
            </motion.div>
          )}

          {/* ═══════════════════════════════════════
              CONTACT PAGE
          ═══════════════════════════════════════ */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Reveal>
                <div className="max-w-3xl mb-12">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2">
                    <Mail className="w-3.5 h-3.5" /> Direct Contact & Channels
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Get In Touch</h1>
                  <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
                    Skip the forms. Reach out directly through your preferred channel for collaborations, design advisory, speaking engagements, or new client inquiries.
                  </p>
                </div>
              </Reveal>

              {/* Contact Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={stagger}
                initial="hidden"
                animate="show"
              >
                {/* Email */}
                <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="p-7 rounded-3xl bg-[#0b0b14] border border-purple-900/40 hover:border-purple-600/50 transition-all flex flex-col justify-between group shadow-xl">
                  <div>
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-6"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <Mail className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">Direct Email</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">kai@valentine-creative.io</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">Fastest way to get in touch. Typically replies within 24–48 hours for new commissions and advisory roles.</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-purple-950/60 flex items-center gap-2">
                    <a
                      href="mailto:kai@valentine-creative.io"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Write Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <motion.button
                      onClick={handleCopyEmail}
                      className="p-2.5 rounded-xl bg-[#131322] border border-purple-900/50 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all flex items-center justify-center"
                      whileTap={{ scale: 0.9 }}
                    >
                      <AnimatePresence mode="wait">
                        {copiedEmail
                          ? <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check className="w-4 h-4 text-emerald-400" /></motion.span>
                          : <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Copy className="w-4 h-4" /></motion.span>
                        }
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Discovery Call */}
                <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="p-7 rounded-3xl bg-gradient-to-br from-[#120e24] via-[#0b0b14] to-[#07070a] border border-purple-700/40 hover:border-purple-500 transition-all flex flex-col justify-between group shadow-xl">
                  <div>
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-700/40 flex items-center justify-center text-indigo-300 mb-6"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                    >
                      <Calendar className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs font-mono uppercase text-indigo-400 font-semibold tracking-wider">Video Consultation</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">Book a 1:1 Intro Call</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">Have a detailed scope ready? Reserve a 30-minute discovery call to discuss requirements, feasibility, and timelines.</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-purple-950/60">
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#161426] border border-purple-600/40 hover:bg-purple-600 hover:text-white text-purple-300 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <span>Schedule 30-Min Call</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>

                {/* Messaging */}
                <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="p-7 rounded-3xl bg-[#0b0b14] border border-purple-900/40 hover:border-purple-600/50 transition-all flex flex-col justify-between group shadow-xl">
                  <div>
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-6"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <MessageCircle className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">Instant Messaging</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">Telegram & WhatsApp</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">Available for quick project check-ins, asynchronous design feedback, and urgent sprint queries.</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-purple-950/60 flex items-center gap-2">
                    <a href="https://t.me" target="_blank" rel="noreferrer" className="flex-1 py-2.5 px-4 rounded-xl bg-[#131322] border border-purple-900/50 hover:border-purple-500/50 text-zinc-200 text-xs font-semibold text-center transition-all hover:text-white">Telegram</a>
                    <a href="https://wa.me" target="_blank" rel="noreferrer" className="flex-1 py-2.5 px-4 rounded-xl bg-[#131322] border border-purple-900/50 hover:border-purple-500/50 text-zinc-200 text-xs font-semibold text-center transition-all hover:text-white">WhatsApp</a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Location + Socials */}
              <Reveal delay={0.1}>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Location */}
                  <div className="lg:col-span-5 p-7 rounded-3xl bg-[#0b0b14] border border-purple-900/40 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Location & Office Hours</h3>
                      <p className="text-xs text-zinc-400">Collaborating globally with distributed product & engineering teams.</p>
                    </div>
                    <div className="space-y-4 text-xs">
                      {[
                        { icon: MapPin, label: 'San Francisco, California', sub: 'SoMa Design District · United States' },
                        { icon: Clock, label: 'Active Working Hours', sub: 'Mon – Fri: 09:00 AM – 06:00 PM (PST / UTC-8)' },
                        { icon: Globe2, label: 'Remote Flexibility', sub: 'Overlap available with EST, GMT, and JST time zones' },
                      ].map(({ icon: Icon, label, sub }) => (
                        <motion.div key={label} className="flex items-start gap-3" whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                          <div className="p-2 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-800/30">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{label}</div>
                            <div className="text-zinc-500">{sub}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/30 flex items-center justify-between text-xs">
                      <span className="text-zinc-300 font-medium flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                        Currently accepting Q3/Q4 contracts
                      </span>
                      <span className="text-purple-400 font-mono text-[11px]">Open Status</span>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="lg:col-span-7 p-7 rounded-3xl bg-[#0b0b14] border border-purple-900/40 space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Design Networks & Profiles</h3>
                      <p className="text-xs text-zinc-400">Browse live source files, design tokens, micro-interactions, and visual explorations.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { name: 'Figma Community', desc: 'UI Kits & Free Design Systems', Icon: FigmaIcon, url: '#' },
                        { name: 'Dribbble', desc: 'Micro-interactions & Daily Shots', Icon: DribbbleIcon, url: '#' },
                        { name: 'LinkedIn', desc: 'Professional History & Advisory', Icon: LinkedinIcon, url: '#' },
                        { name: 'GitHub', desc: 'Design Tokens & React UI Components', Icon: GithubIcon, url: '#' },
                        { name: 'Instagram', desc: 'Branding, Typography & 3D Renders', Icon: InstagramIcon, url: '#' },
                        { name: 'Behance', desc: 'Full-length Brand Identity Portfolios', Icon: Palette, url: '#' },
                      ].map((platform) => {
                        const Icon = platform.Icon;
                        return (
                          <motion.a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-4 rounded-2xl bg-[#11111d] border border-purple-950/70 hover:border-purple-600/50 hover:bg-[#161626] transition-all flex items-center justify-between group"
                            whileHover={{ x: 4 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-800/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:scale-105 transition-all">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">{platform.name}</div>
                                <div className="text-[11px] text-zinc-500 truncate max-w-[150px]">{platform.desc}</div>
                              </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-all" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── CASE STUDY MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-[#0d0d17] border border-purple-700/50 rounded-3xl shadow-2xl overflow-hidden my-auto"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 border border-purple-500/30 text-zinc-300 hover:text-white flex items-center justify-center backdrop-blur-md transition-all"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#10101d]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d17] via-transparent to-black/30" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600 text-white">{selectedProject.badge}</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-10 space-y-8 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#121221] border border-purple-950/80 text-xs">
                  {[
                    { label: 'Role', val: selectedProject.caseStudy.role },
                    { label: 'Client', val: selectedProject.client },
                    { label: 'Timeline', val: selectedProject.caseStudy.timeline },
                    { label: 'Impact', val: `${selectedProject.stats.metric} ${selectedProject.stats.label}`, accent: true },
                  ].map(({ label, val, accent }) => (
                    <div key={label}>
                      <div className="text-zinc-500 uppercase font-mono">{label}</div>
                      <div className={`font-semibold mt-1 ${accent ? 'text-purple-400' : 'text-zinc-200'}`}>{val}</div>
                    </div>
                  ))}
                </div>

                {[
                  { num: '01', title: 'The Challenge', text: selectedProject.caseStudy.challenge },
                  { num: '02', title: 'The Design Solution', text: selectedProject.caseStudy.solution },
                ].map(({ num, title, text }) => (
                  <div key={num} className="space-y-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 font-mono">{num}. {title}</h4>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{text}</p>
                  </div>
                ))}

                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 font-mono">03. Key Deliverables & Outcomes</h4>
                  <div className="space-y-2">
                    {selectedProject.caseStudy.outcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <span>{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-950/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono uppercase text-zinc-500 mr-2">Tools:</span>
                  {selectedProject.caseStudy.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#090910] border-t border-purple-950 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Interested in similar outcomes for your team?</span>
                <motion.button
                  onClick={() => { setSelectedProject(null); handleNavClick('contact'); }}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Inquire About This Work
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <footer className="relative border-t border-purple-950/80 bg-[#06060a] pt-16 pb-12 mt-20 text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-950/60">

            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-purple-600/30">K</div>
                <span className="font-extrabold text-white tracking-wider text-base">KAI VALENTINE</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
                A modern digital portfolio crafted for Graphic Designers, Product Visionaries, and UI/UX Engineers. Deep obsidian aesthetics powered by neon violet clarity.
              </p>
              <div className="text-xs text-purple-400 font-mono">✦ Available for Q3/Q4 Creative Commissions</div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-200 font-mono">Navigation</h5>
              <ul className="space-y-2 text-xs sm:text-sm">
                {[
                  { id: 'home', label: 'Home Page' },
                  { id: 'my-work', label: 'My Work & Case Studies' },
                  { id: 'contact', label: 'Contact & Inquiries' },
                ].map((item) => (
                  <li key={item.id}>
                    <button onClick={() => handleNavClick(item.id)} className="hover:text-purple-300 transition-colors">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-200 font-mono">Connect & Socials</h5>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Behance', 'Dribbble', 'LinkedIn', 'Figma Community', 'Twitter / X'].map((label) => (
                  <a key={label} href="#" className="px-3 py-1.5 rounded-lg bg-[#0e0e18] border border-purple-950/80 hover:border-purple-600/60 hover:text-white transition-all">
                    {label}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-zinc-500 pt-2">Designed with precision in Figma & brought to life with React + Tailwind CSS.</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <div>© {new Date().getFullYear()} Kai Valentine. All Rights Reserved.</div>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-purple-300 transition-colors"
              whileHover={{ y: -2 }}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}
