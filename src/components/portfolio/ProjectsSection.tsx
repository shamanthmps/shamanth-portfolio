import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, BarChart3, Sparkles, Database, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Tuition Management System",
    description:
      "A complete full-stack application built from concept to deployment, demonstrating system thinking, automation, and applied AI. This project showcases end-to-end delivery capabilities from ideation to production.",
    icon: Layers,
    tags: ["Full-Stack", "Automation", "AI Integration", "System Design"],
    highlights: [
      { icon: Database, text: "Data Architecture" },
      { icon: Users, text: "User MGMT" },
      { icon: Sparkles, text: "AI Features" },
    ],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7410621986688708609/",
    color: "bg-indigo-600",
  },
  {
    title: "Sprint Capacity Tracker",
    description:
      "An AI-assisted capacity planning tool that replaced Excel-based sprint planning. Provides real-time capacity visibility and commitment accuracy, now used in actual Agile delivery environments across multiple teams.",
    icon: BarChart3,
    tags: ["Agile Tools", "Capacity Planning", "Real-time Analytics", "Team Productivity"],
    highlights: [
      { icon: TrendingUp, text: "Predictability" },
      { icon: BarChart3, text: "Dashboards" },
      { icon: Sparkles, text: "AI-Planning" },
    ],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7413549383759265792/",
    color: "bg-primary",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0B0B0F] relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none tracking-tighter">
        PROJECTS
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-20 text-center">
             <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">/ PORTFOLIO</span>
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Featured <span className="text-muted-foreground italic font-serif opacity-50">Work</span></h2>
             <p className="text-xl text-muted-foreground max-w-2xl">
               Real-world applications demonstrating system thinking, AI integration, and practical problem-solving.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="group relative"
              >
                {/* Modern Card Design from Image */}
                <div className="bg-[#14141A] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 flex flex-col h-full">
                  <div className={`h-64 w-full ${project.color} relative overflow-hidden flex items-center justify-center p-10`}>
                     {/* Floating Icons Background */}
                     <project.icon className="absolute w-64 h-64 text-white/10 -bottom-12 -right-12" />
                     
                     {/* Highlight circles */}
                     <div className="relative z-10 flex flex-col items-center text-center">
                       <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-4 shadow-2xl">
                         <project.icon className="w-10 h-10 text-white" />
                       </div>
                       <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                     </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-base mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-semibold text-white/80 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button
                        className="w-full rounded-2xl h-12 text-base bg-white text-black hover:bg-white/90 group"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Case Study
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
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