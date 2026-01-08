import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  GitBranch, 
  Wrench, 
  Heart, 
  Sparkles,
  BarChart3,
  Users,
  Settings,
  Brain,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Agile & Delivery",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    skills: ["Scrum", "Agile Coaching", "Scaled Delivery", "Sprint Planning", "Predictability", "Metrics"],
  },
  {
    title: "DevOps & Project Management",
    icon: GitBranch,
    color: "from-green-500 to-emerald-500",
    skills: ["Delivery Orchestration", "Cross-functional Coordination", "Release Management", "CI/CD Awareness"],
  },
  {
    title: "Technical & Tools",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    skills: ["Jira", "Dashboards", "Automation", "System Thinking", "Data-Driven Decisions"],
  },
  {
    title: "Leadership & Mindset",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    skills: ["Emotional Intelligence", "Ownership Culture", "Purpose-Driven Leadership", "Team Development"],
  },
  {
    title: "AI & Automation",
    icon: Sparkles,
    color: "from-yellow-500 to-amber-500",
    skills: ["AI-Assisted Tools", "Workflow Automation", "Practical AI", "Productivity Enhancement"],
  },
];

const iconMap: Record<string, React.ElementType> = {
  "Scrum": Target,
  "Predictability": BarChart3,
  "Cross-functional Coordination": Users,
  "Automation": Settings,
  "Emotional Intelligence": Brain,
  "AI-Assisted Tools": Zap,
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Capabilities
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIndex) => (
                      <motion.span
                        key={sIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + sIndex * 0.05, duration: 0.3 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
