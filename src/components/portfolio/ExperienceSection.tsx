import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  "Leading high-performing Agile teams in complex enterprise environments",
  "Built and deployed an AI-assisted Sprint Capacity Tracker, replacing Excel-based planning",
  "Improved sprint commitment accuracy and predictability across multiple teams",
  "Championed Agile maturity and self-organization within the organization",
  "Introduced Jira dashboards and metrics-driven delivery practices",
  "Drove cross-functional alignment with Product, Architecture, and QA teams",
  "Led compliance tracking and strategic goal alignment initiatives",
  "Led convergence across varied stakeholders in complex deliveries",
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedAchievements = isExpanded ? achievements : achievements.slice(0, 4);

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0B0B0F] relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Design Layout: Big Header + Small Sub */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-12">
            <div>
              <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">/ EXPERIENCE</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Professional <br />
                <span className="text-muted-foreground italic font-serif opacity-50">Journey</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xl text-muted-foreground">
                I enjoy solving problems with clean scalable solutions. I have a genuine passion for inspiring design and agile leadership.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Stats Sidebar from Image */}
            <div className="lg:col-span-4 flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-bold text-primary">14+</span>
                <span className="text-sm font-semibold uppercase tracking-widest opacity-50">Years of Experience</span>
              </div>
              
              <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                    <p className="text-xs uppercase tracking-widest opacity-50">Current Role</p>
                    <p className="font-bold">Project Lead @ SAP</p>
                 </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="lg:col-span-8">
              <div className="bg-[#14141A] p-8 md:p-12 rounded-3xl border border-white/5 relative group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">SAP</h3>
                      <p className="text-lg text-primary font-medium tracking-tight">Senior Scrum Master & Project Lead</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      <span>Jan 2025 – Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <MapPin className="w-3 h-3" />
                      <span>Bengaluru, India</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                  {displayedAchievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center border-t border-white/5 pt-8">
                  <Button
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="rounded-full text-primary hover:bg-primary/10 px-8"
                  >
                    {isExpanded ? (
                      <><ChevronUp className="mr-2 w-4 h-4" /> Show Less</>
                    ) : (
                      <><ChevronDown className="mr-2 w-4 h-4" /> View All Responsibilities</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};