import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0B0B0F] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Header */}
            <div>
              <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">/ CONTACT</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Let's <ArrowRightIcon className="inline-block w-12 h-12 md:w-20 md:h-20 text-primary" /> <br />
                Connect.
              </h2>
              
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground max-w-md">
                  Have a project in mind or just want to chat leadership and AI? Drop a message.
                </p>
                
                <div className="text-sm text-muted-foreground opacity-70">
                  Open to meaningful leadership conversations and strategic collaborations.
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href="https://linkedin.com/in/shamanthkumarm" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a 
                    href="mailto:shamanthcareers@gmail.com" 
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-[#14141A] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-50 font-bold">Your name:</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-transparent border-0 border-b border-white/10 rounded-none h-12 focus-visible:ring-0 focus-visible:border-primary px-0 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-50 font-bold">Your email address:</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-transparent border-0 border-b border-white/10 rounded-none h-12 focus-visible:ring-0 focus-visible:border-primary px-0 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-50 font-bold">Tell about the project:</label>
                  <Textarea 
                    placeholder="I'd like to talk about..." 
                    className="bg-transparent border-0 border-b border-white/10 rounded-none min-h-[120px] focus-visible:ring-0 focus-visible:border-primary px-0 text-lg resize-none"
                  />
                </div>
                
                <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);