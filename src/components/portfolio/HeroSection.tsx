import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Briefcase, Sparkles, Clock, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import shamanthPhoto from "@/assets/shamanth-photo.png";

const stats = [
  { icon: Clock, label: "14+ Years Experience", color: "bg-blue-500/20" },
  { icon: Briefcase, label: "Staff TPM @ GE Healthcare", color: "bg-yellow-500/20" },
  { icon: Sparkles, label: "AI-Driven Systems Leader", color: "bg-orange-500/20" },
];

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#0B0B0F]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="circle-glow top-1/4 left-1/4 bg-primary" />
        <div className="circle-glow bottom-1/4 right-1/4 bg-yellow-600" />

        {/* Floating Rings */}
        <motion.div
          className="circle-border w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="circle-border w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Content Left */}
          <div className="text-center lg:text-left flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Shamanth <br />
                <span className="text-muted-foreground opacity-50 italic font-serif">Kumar M</span>
              </h1>

              <div className="flex flex-col gap-4 mb-8">
                <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                  Staff TPM • Agile Delivery Leader • AI-Enabled Builder.
                  <span className="block mt-2 font-medium text-foreground">
                    "Clarity. Ownership. Impact."
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white min-h-12 text-lg"
                >
                  Explore Works
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-white/10 hover:bg-white/5 min-h-12 text-lg"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/shamanthkumarm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className={`p-2 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex-1 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Circles from Design */}
              <motion.div
                className="circle-border w-24 h-24 -top-8 -left-8 bg-blue-500 text-white z-20 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Build with<br />Purpose
              </motion.div>

              <motion.div
                className="circle-border w-32 h-32 bottom-12 -right-8 bg-primary text-white z-20 shadow-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                Lead with<br />Empathy
              </motion.div>

              {/* Main Photo Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-full blur-3xl opacity-50" />
                <div className="relative h-full w-full rounded-full overflow-hidden border-8 border-[#1A1A1F] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={shamanthPhoto}
                    alt="Shamanth Kumar M"
                    className="w-full h-full object-cover scale-105 object-top"
                  />
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation Cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-2">Scroll for more</span>
          <ArrowDown className="w-5 h-5 mx-auto opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};