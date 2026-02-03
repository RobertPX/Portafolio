"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { socialLinks, navItems } from "@/lib/data";

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${socialLinks.email}`, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="inline-flex items-center gap-2 font-mono text-lg font-semibold"
            >
              <span className="text-primary">&lt;</span>
              <span>Dev</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Desarrollador Fullstack creando soluciones digitales completas y
              escalables.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Navegación</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Conecta</h3>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            &copy; {currentYear} Luis Roberto Zarate Aiquipa. Todos los derechos reservados.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            Hecho con
            <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" />
            usando Next.js & TailwindCSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
