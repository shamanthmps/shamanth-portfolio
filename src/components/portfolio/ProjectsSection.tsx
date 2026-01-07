import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, BarChart3, Sparkles, Database, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Tuition Management System",
    description:
      "A complete full-stack application built from concept to deployment, demonstrating system thinking, automation, and applied AI. This project showcases end-to-end delivery capabilities from ideation to production.",
    icon: Layers,
    tags: ["Full-Stack", "Automation", "AI Integration", "System Design"],
    highlights: [
      { icon: Database, text: "Complete data architecture" },
      { icon: Users, text: "User management system" },
      { icon: Sparkles, text: "AI-powered features" },
    ],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7410621986688708609/",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Sprint Capacity Tracker",
    description:
      "An AI-assisted capacity planning tool that replaced Excel-based sprint planning. Provides real-time capacity visibility and commitment accuracy, now used in actual Agile delivery environments across multiple teams.",
    icon: BarChart3,
    tags: ["Agile Tools", "Capacity Planning", "Real-time Analytics", "Team Productivity"],
    highlights: [
      { icon: TrendingUp, text: "Improved predictability" },
      { icon: BarChart3, text: "Real-time dashboards" },
      { icon: Sparkles, text: "AI-assisted planning" },
    ],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7413549383759265792/",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real-world applications demonstrating system thinking, AI integration, and practical problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                className="group"
              >
                <div className={`glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full`}>
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="p-8">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <project.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex flex-col items-center text-center p-3 rounded-lg bg-muted/50"
                        >
                          <highlight.icon className="w-5 h-5 text-primary mb-2" />
                          <span className="text-xs text-muted-foreground">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View on LinkedIn
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
