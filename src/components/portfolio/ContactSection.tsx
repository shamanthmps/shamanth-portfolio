import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Linkedin, Mail, ArrowRight, MessageCircle } from "lucide-react";

// Custom LinkedIn Icon for dark theme
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { Button } from "@/components/ui/button";

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
                
                <div className="flex gap-4">
                  <motion.a 
                    href="https://linkedin.com/in/shamanthkumarm" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <LinkedInIcon className="w-6 h-6 text-white" />
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

            {/* Right Contact Card */}
            <div className="bg-[#14141A] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="space-y-8">
                {/* Icon and Title */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Start a Conversation</h3>
                  <p className="text-muted-foreground">Reach out via email or LinkedIn</p>
                </div>
                
                {/* Contact Buttons */}
                <div className="space-y-4">
                  <Button 
                    className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold group"
                    asChild
                  >
                    <a href="mailto:shamanthcareers@gmail.com">
                      Email Me
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-14 rounded-2xl border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/80 text-lg font-bold group text-[#0A66C2] hover:text-[#0A66C2]"
                    asChild
                  >
                    <a href="https://linkedin.com/in/shamanthkumarm" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                      <LinkedInIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
                
                {/* Additional Info */}
                <div className="text-center pt-4 border-t border-white/5">
                  <p className="text-sm text-muted-foreground opacity-70">
                    Open to meaningful leadership conversations and strategic collaborations.
                  </p>
                </div>
              </div>
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