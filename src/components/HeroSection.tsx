import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";

const techBadges = ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Jenkins", "Ansible", "Linux"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 md:pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism text-xs font-mono text-success">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
              Available for opportunities
            </div>

            <h1 className="text-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              Building Scalable Systems
              <br />
              <span className="gradient-text">&amp; Automating Everything</span>
            </h1>

            <p className="text-body text-lg max-w-lg">
              DevOps Engineer with hands-on experience in AWS, containerization, and CI/CD automation.
              Skilled in building, deploying, and maintaining scalable infrastructure using modern DevOps tools and best practices.
            </p>

            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono glassmorphism text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover-glow transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg glassmorphism text-foreground font-semibold hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right - Profile area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] scale-110" />
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-[60px] scale-105" />

              {/* Profile image placeholder */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glassmorphism animate-float">
                <img
                  src={profileImg}
                  alt="Gyan Prakash - DevOps Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Floating bubble */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-0 px-4 py-2 rounded-xl glassmorphism text-sm font-medium text-foreground shadow-lg"
              >
                Hire me 😄
              </motion.div>

              {/* Tech floating badges */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg glassmorphism text-xs font-mono text-success"
              >
                ● pipeline passing
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg glassmorphism text-xs font-mono text-primary"
              >
                kubectl ready
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
