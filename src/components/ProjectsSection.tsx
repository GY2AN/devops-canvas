import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud-Native CI/CD Platform",
    problem: "Legacy deployment process took 4+ hours with frequent failures and manual interventions.",
    solution: "Built an automated CI/CD pipeline using GitHub Actions, Docker, and Kubernetes, reducing deployment time to under 15 minutes with zero-downtime releases.",
    impact: "90% faster deployments · 99.9% uptime · Zero manual intervention",
    stack: ["Docker", "Kubernetes", "GitHub Actions", "AWS EKS", "Terraform"],
    github: "#",
    demo: "#",
  },
  {
    title: "Infrastructure as Code Framework",
    problem: "Manual infrastructure provisioning led to configuration drift and inconsistent environments.",
    solution: "Designed a modular Terraform framework with reusable modules for VPC, EKS, RDS, and monitoring stack across multiple AWS regions.",
    impact: "100% infrastructure parity · 70% reduction in provisioning time",
    stack: ["Terraform", "AWS", "Ansible", "CloudWatch", "Prometheus"],
    github: "#",
    demo: "#",
  },
  {
    title: "Observability & Monitoring Stack",
    problem: "No centralized monitoring — issues were discovered by customers before the engineering team.",
    solution: "Implemented a full observability stack with Prometheus, Grafana, and ELK for metrics, logs, and alerting across 50+ microservices.",
    impact: "MTTR reduced by 80% · Proactive alerting · Full traceability",
    stack: ["Prometheus", "Grafana", "ELK Stack", "Docker", "Kubernetes"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">// what I've built</p>
          <h2 className="text-heading text-3xl sm:text-4xl lg:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              <div style={{ direction: "ltr" }} className="space-y-5">
                <h3 className="text-heading text-2xl sm:text-3xl">{project.title}</h3>
                <div className="space-y-3 text-body text-sm">
                  <p>
                    <span className="text-destructive font-semibold">Problem: </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="text-success font-semibold">Solution: </span>
                    {project.solution}
                  </p>
                </div>
                <p className="text-primary font-mono text-xs">{project.impact}</p>
              </div>

              <div style={{ direction: "ltr" }} className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md text-xs font-mono glassmorphism text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glassmorphism text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    <Github size={16} /> Source
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-sm text-primary hover:bg-primary/20 transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
