import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm mb-3">// let's connect</p>
          <h2 className="text-heading text-3xl sm:text-4xl lg:text-5xl">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-5 gap-10"
        >
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover-glow transition-all duration-300 flex items-center gap-2"
            >
              <Send size={16} />
              Let's Connect
            </button>
          </form>

          <div className="md:col-span-2 flex flex-col justify-center gap-6">
            <a href="mailto:hello@devops.dev" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="p-3 rounded-lg glassmorphism group-hover:border-primary/50 transition-all">
                <Mail size={20} />
              </div>
              <span className="text-sm">hello@devops.dev</span>
            </a>
            <a href="https://github.com/GY2AN" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="p-3 rounded-lg glassmorphism group-hover:border-primary/50 transition-all">
                <Github size={20} />
              </div>
              <span className="text-sm">github.com/GY2AN</span>
            </a>
            <a href="https://www.linkedin.com/in/gyan-prakash-71b081326/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="p-3 rounded-lg glassmorphism group-hover:border-primary/50 transition-all">
                <Linkedin size={20} />
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://x.com/pgyan237" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="p-3 rounded-lg glassmorphism group-hover:border-primary/50 transition-all">
                <Twitter size={20} />
              </div>
              <span className="text-sm">@pgyan237</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
