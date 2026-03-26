import { Github, Linkedin, Twitter, FileText, Heart } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/GY2AN" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gyan-prakash-71b081326/" },
  { icon: Twitter, href: "https://x.com/pgyan237" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-foreground font-bold text-lg font-mono">Gyan</a>
            <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart size={12} className="text-destructive" /> for DevOps
            </p>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {link.label}
              </a>
            ))}
            <a href="/GyanPrakashDevOps.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-1">
              <FileText size={14} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="text-muted-foreground hover:text-primary transition-colors">
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Gyan Prakash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
