import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Understanding Kubernetes Networking from Scratch",
    summary: "A deep dive into pod networking, services, ingress controllers, and CNI plugins — explained with real diagrams.",
    date: "Mar 2026",
    tag: "Kubernetes",
  },
  {
    title: "Building Zero-Downtime CI/CD Pipelines",
    summary: "How I designed rolling deployments with canary releases using ArgoCD and GitHub Actions.",
    date: "Feb 2026",
    tag: "CI/CD",
  },
  {
    title: "Terraform at Scale: Lessons from Managing 200+ Resources",
    summary: "Modular patterns, state management strategies, and drift detection for large infrastructure codebases.",
    date: "Jan 2026",
    tag: "Terraform",
  },
  {
    title: "Docker Multi-Stage Builds: Shrinking Images by 80%",
    summary: "Practical techniques to optimize Docker images for production with security and size in mind.",
    date: "Dec 2025",
    tag: "Docker",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-success font-mono text-sm mb-3">// learning in public</p>
          <h2 className="text-heading text-3xl sm:text-4xl lg:text-5xl">
            DevOps <span className="gradient-text-success">Journal</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl glassmorphism hover:border-primary/40 transition-all duration-300 block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors flex items-start gap-2">
                {post.title}
                <ArrowUpRight size={16} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-body text-sm">{post.summary}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
