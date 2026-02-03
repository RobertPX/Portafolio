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
    title: "SaaS Subscription Platform",
    tagline: "Sistema completo de gestión de suscripciones con pagos integrados",
    description:
      "Plataforma SaaS robusta construida con FastAPI que maneja suscripciones, facturación recurrente y webhooks de Stripe. Incluye autenticación JWT, rate limiting, y documentación OpenAPI completa.",
    techStack: ["FastAPI", "PostgreSQL", "Stripe API", "Docker", "pytest", "Redis"],
    highlights: [
      "Arquitectura escalable con async/await",
      "Testing coverage >80%",
      "Webhooks Stripe con retry logic",
      "OpenAPI docs auto-generada",
      "CI/CD con GitHub Actions",
    ],
    links: {
      github: "https://github.com/RobertPX/saas-subscription-api",
      docs: "https://docs.example.com",
    },
    image: "/projects/saas-platform.png",
    featured: true,
  },
  {
    id: "pern-platform",
    title: "Project Management Platform",
    tagline: "Aplicación colaborativa fullstack para equipos",
    description:
      "Plataforma de gestión de proyectos con stack PERN que permite a equipos organizar tareas, colaborar en tiempo real y trackear progreso. TypeScript end-to-end para type safety completo.",
    techStack: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript", "Prisma"],
    highlights: [
      "TypeScript end-to-end",
      "Auth seguro con refresh tokens",
      "CI/CD automatizado",
      "Componentes UI reutilizables",
      "API RESTful documentada",
    ],
    links: {
      github: "https://github.com/tu-usuario/pern-platform",
      demo: "https://demo.example.com",
    },
    image: "/projects/pern-platform.png",
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
      github: "https://github.com/tu-usuario/portafolio",
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
