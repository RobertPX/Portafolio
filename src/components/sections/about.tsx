"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Backend Sólido",
    description: "APIs robustas con FastAPI y Node.js, bases de datos optimizadas",
  },
  {
    icon: Code2,
    title: "Frontend Moderno",
    description: "Interfaces limpias con React, TypeScript y animaciones sutiles",
  },
  {
    icon: Layers,
    title: "Arquitectura Limpia",
    description: "Código mantenible, testing automatizado y documentación clara",
  },
  {
    icon: Rocket,
    title: "Deploy & DevOps",
    description: "CI/CD, containerización y despliegues automatizados",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image/Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3" />

              {/* Avatar placeholder */}
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary-foreground font-mono">
                      {"</>"}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm">
                    developer.avatar
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg"
              >
                <span className="font-mono text-sm text-primary">FastAPI</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg"
              >
                <span className="font-mono text-sm text-accent">Next.js</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Sobre Mí
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Soy un desarrollador fullstack con un fuerte enfoque en el
                  backend. Mi pasión está en construir sistemas robustos,
                  escalables y bien documentados que resuelvan problemas reales.
                </p>
                <p>
                  Mi experiencia principal está en{" "}
                  <span className="text-foreground font-medium">
                    FastAPI, Node.js y PostgreSQL
                  </span>
                  , pero disfruto igualmente creando interfaces de usuario
                  intuitivas con{" "}
                  <span className="text-foreground font-medium">
                    React y Next.js
                  </span>
                  . Esta combinación me permite entregar productos completos,
                  desde la base de datos hasta el pixel final.
                </p>
                <p>
                  Creo en el código limpio, el testing automatizado y la
                  documentación como pilares fundamentales. Cada proyecto es una
                  oportunidad para crear algo que no solo funcione, sino que sea
                  mantenible y escalable a largo plazo.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <item.icon className="h-5 w-5 text-primary mb-2" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
