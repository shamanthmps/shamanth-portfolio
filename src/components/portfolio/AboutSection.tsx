import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Brain } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Clarity First",
    description: "Breaking down complexity into clear, actionable outcomes that teams can rally behind.",
  },
  {
    icon: Users,
    title: "People-Centric Leadership",
    description: "Building trust, fostering psychological safety, and enabling teams to do their best work.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Embracing retrospection, experimentation, and iterative growth at every level.",
  },
  {
    icon: Brain,
    title: "AI-First Mindset",
    description: "Leveraging AI and automation to amplify human potential and drive productivity.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership Through Mindset
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass p-8 md:p-10 rounded-2xl mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Shamanth Kumar M is a purpose-driven Staff Technical Project Manager & Agile Delivery Leader
              with a passion for building high-performing teams and driving clarity in complex systems,
              with a strong belief that <span className="text-foreground font-medium">Sustained success is driven far more by mindset than by skill alone. </span>
              He blends technical excellence with emotional intelligence to deliver meaningful outcomes.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              He is deeply interested in leadership development, AI-driven productivity, and helping
              individuals and teams unlock their true potential through clarity, ownership, and continuous growth.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="glass p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
