import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, FileText, Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: BookOpen, href: "#", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glassmorphism shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-foreground font-bold text-xl tracking-tight font-mono">
            &lt;DevOps /&gt;
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="#"
              className="ml-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover-glow transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism border-t border-border/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-muted-foreground hover:text-foreground text-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} className="text-muted-foreground hover:text-primary">
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
