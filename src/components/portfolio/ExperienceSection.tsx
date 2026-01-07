import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  "Leading high-performing Agile teams in complex enterprise environments",
  "Built and deployed an AI-assisted Sprint Capacity Tracker, replacing Excel-based planning",
  "Improved sprint commitment accuracy and predictability across multiple teams",
  "Championed Agile maturity and self-organization within the organization",
  "Introduced Jira dashboards and metrics-driven delivery practices",
  "Drove cross-functional alignment with Product, Architecture, and QA teams",
  "Led compliance tracking and strategic goal alignment initiatives",
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedAchievements = isExpanded ? achievements : achievements.slice(0, 4);

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50" />
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">SAP</h3>
                      <p className="text-lg font-medium text-primary">
                        Senior Scrum Master & Project Lead
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2025 – Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                {displayedAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              {achievements.length > 4 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-primary hover:text-primary/80"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="ml-1 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More <ChevronDown className="ml-1 w-4 h-4" />
                    </>
                  )}
                </Button>
              )}

              {/* Highlight Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20"
              >
                <p className="text-sm font-medium text-primary mb-1">Key Highlight</p>
                <p className="text-foreground">
                  Built and deployed an <span className="font-semibold">AI-assisted Sprint Capacity Tracker</span> that 
                  replaced manual Excel-based planning, significantly improving sprint predictability and team efficiency.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
