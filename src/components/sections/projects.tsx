"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
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
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi capacidad para construir
            soluciones fullstack completas y escalables.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div
                    className={`grid gap-6 lg:gap-8 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Project Image */}
                    <div
                      className={`relative aspect-video lg:aspect-auto overflow-hidden bg-muted ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary font-mono">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground font-mono">
                            {project.id}.preview
                          </p>
                        </div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        {/* Title & Tagline */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2">
                          {project.highlights.slice(0, 4).map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          {project.links.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2"
                              asChild
                            >
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                                Código
                              </a>
                            </Button>
                          )}
                          {project.links.demo && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2"
                              asChild
                            >
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.links.docs && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2"
                              asChild
                            >
                              <a
                                href={project.links.docs}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                                Docs
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
