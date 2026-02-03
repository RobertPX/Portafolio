import type { LucideIcon } from "lucide-react";
import {
  Database,
  Server,
  Code2,
  Layers,
  GitBranch,
  Cloud,
  CreditCard,
  TestTube,
  Container,
  FileJson,
  Zap,
  Shield,
  Palette,
  Sparkles,
  Rocket,
  Users,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  image: string;
  featured: boolean;
}

export interface TechCategory {
  name: string;
  icon: LucideIcon;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  icon?: LucideIcon;
}

export const projects: Project[] = [
  {
    id: "saas-fastapi",
    title: "SaaS Subscription Management Api",
    tagline: "Sistema robusto de gestión de suscripciones con Stripe",
    description:
      "API REST enterprise-grade para manejo de suscripciones SaaS con integración completa de Stripe. Incluye autenticación JWT, procesamiento asíncrono de tareas, webhooks en tiempo real y arquitectura limpia con Repository Pattern para máxima escalabilidad.",
    techStack: ["FastAPI",
      "PostgreSQL", 
      "Stripe",
      "Celery",
      "Redis",
      "Docker"
    ],
    highlights: [
      "Arquitectura limpia con Repository Pattern",
      "Procesamiento asíncrono con Celery/Redis",
      "Integración completa con Stripe Webhooks",
      "Auth JWT con refresh tokens",
      "Migraciones automáticas con Alembic",
      "Tests unitarios y de integración"
    ],
    links: {
      github: "https://github.com/RobertPX/saas-subscription-api",
    },
    image: "/projects/saas-platform.png",
    featured: true,
  },
  {
    id: "pern-platform",
    title: "Real-time Crypto Monitor",
    tagline: "Dashboard en tiempo real con streaming WebSocket desde Binance",
    description:
      "Sistema fullstack de monitoreo de criptomonedas con WebSocket streaming desde Binance API. Incluye broadcast eficiente multi-cliente, auto-reconexión con exponential backoff, sistema híbrido de almacenamiento (Redis + Memory fallback) y dashboard profesional con gráficos dinámicos en tiempo real.",
    techStack: [
      "FastAPI",
      "WebSockets",
      "Redis",
      "Chart.js",
      "Docker",
      "Tailwind CSS"
    ],
    highlights: [
      "✓ Demo en vivo deployado en Render",
      "✓ Streaming WebSocket con auto-reconexión",
      "✓ Broadcast eficiente a múltiples clientes",
      "✓ Sistema híbrido Redis/Memory resiliente",
      "✓ CI/CD con GitHub Actions y pre-commit hooks",
      "✓ Dashboard fullstack con gráficos en tiempo real"
    ],
    links: {
      github: "https://github.com/RobertPX/crypto-monitor",
      demo: "https://crypto-monitor-libe.onrender.com",
    },
    image: "/projects/crypto.png",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    tagline: "Este mismo sitio - meta-proyecto mostrando el código",
    description:
      "Portafolio profesional construido con las últimas tecnologías de Next.js, optimizado para performance y SEO. Demuestra habilidades frontend con animaciones sutiles y diseño responsive.",
    techStack: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
    highlights: [
      "Lighthouse score 95+",
      "Dark/Light mode con persistencia",
      "Animaciones Framer Motion",
      "SEO optimizado con metadata",
      "Deploy automático en Vercel",
    ],
    links: {
      github: "https://github.com/RobertPX/portafolio",
    },
    image: "/projects/portfolio.png",
    featured: true,
  },
];

export const techCategories: TechCategory[] = [
  {
    name: "Backend",
    icon: Server,
    technologies: [
      { name: "FastAPI", icon: Zap },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Database },
      { name: "Redis", icon: Database },
    ],
  },
  {
    name: "Frontend",
    icon: Code2,
    technologies: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Layers },
      { name: "TypeScript", icon: FileJson },
      { name: "TailwindCSS", icon: Palette },
      { name: "Framer Motion", icon: Sparkles },
      { name: "shadcn/ui", icon: Palette },
    ],
  },
  {
    name: "Tools & Platform",
    icon: Cloud,
    technologies: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub Actions", icon: Rocket },
      { name: "Docker", icon: Container },
      { name: "Vercel", icon: Cloud },
      { name: "Railway", icon: Cloud },
      { name: "Stripe", icon: CreditCard },
    ],
  },
  {
    name: "Testing & Quality",
    icon: TestTube,
    technologies: [
      { name: "pytest", icon: TestTube },
      { name: "Jest", icon: TestTube },
      { name: "ESLint", icon: Shield },
      { name: "Prettier", icon: Code2 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/RobertPX",
  linkedin: "https://linkedin.com/in/luis-roberto-zarate-aiquipa",
  email: "roberto.zarateaiquipa@gmail.com",
};

export const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Proyectos", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

export const highlightIcons: Record<string, LucideIcon> = {
  "Arquitectura escalable": Layers,
  "Testing coverage": TestTube,
  "Webhooks Stripe": CreditCard,
  "OpenAPI docs": FileJson,
  "CI/CD": Rocket,
  "TypeScript end-to-end": FileJson,
  "Auth seguro": Shield,
  "Componentes UI": Palette,
  "API RESTful": Server,
  "Lighthouse score": Zap,
  "Dark/Light mode": Palette,
  "Animaciones": Sparkles,
  "SEO optimizado": Rocket,
  "Deploy automático": Cloud,
  "Colaboración": Users,
};
