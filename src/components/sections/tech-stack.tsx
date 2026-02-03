"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
} as const;

export function TechStack() {
  return (
    <section id="tech" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Las tecnologías que uso para construir aplicaciones robustas,
            escalables y con gran experiencia de usuario.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div key={category.name} variants={itemVariants}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      variants={containerVariants}
                      className="flex flex-wrap gap-2"
                    >
                      {category.technologies.map((tech) => (
                        <motion.div
                          key={tech.name}
                          variants={techVariants}
                          whileHover={{ scale: 1.05 }}
                          className="group/tech"
                        >
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                            {tech.icon && (
                              <tech.icon className="h-3.5 w-3.5 opacity-70" />
                            )}
                            <span className="font-mono text-xs">{tech.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Siempre aprendiendo y explorando nuevas tecnologías para entregar las
            mejores soluciones.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
