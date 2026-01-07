import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Executive Management Development Programme",
    field: "Business Management",
    institution: "Indian Institute of Management, Kozhikode",
    year: "2024",
    icon: Award,
    highlight: true,
  },
  {
    degree: "Bachelor of Engineering",
    field: "Engineering",
    institution: "Bapuji Institute of Engineering and Technology",
    subtitle: "Visvesvaraya Technological University, Karnataka",
    year: "2011",
    icon: GraduationCap,
    highlight: false,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Education</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Background
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Education Cards */}
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              >
                <div className={`glass rounded-2xl p-6 md:p-8 relative overflow-hidden ${
                  item.highlight ? "border-2 border-primary/20" : ""
                }`}>
                  {/* Highlight Badge */}
                  {item.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        Recent
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-xl ${
                      item.highlight 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                      <p className="text-primary font-medium mb-2">{item.field}</p>
                      <p className="text-muted-foreground">{item.institution}</p>
                      {item.subtitle && (
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
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
