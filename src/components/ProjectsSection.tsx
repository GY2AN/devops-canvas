import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Cloud, Network } from "lucide-react";

const projects = [
  {
    title: "Kubernetes MongoDB & Mongo Express",
    description:
      "Kubernetes project deploying MongoDB and Mongo Express with ConfigMaps, Secrets, and service-based networking. Demonstrates production-ready container orchestration patterns.",
    highlights: [
      "ConfigMaps & Secrets management",
      "Service-based internal networking",
      "Declarative K8s manifests",
    ],
    stack: ["Kubernetes", "Docker", "MongoDB", "Mongo Express", "YAML"],
    github: "https://github.com/GY2AN/k8s-mongodb-express-deployment",
    icon: Network,
  },
  {
    title: "AWS Microservices Platform",
    description:
      "A production-grade, cloud-native e-commerce backend built on AWS using a microservices architecture. Fully provisioned with Terraform and automated through CI/CD pipelines.",
    highlights: [
      "Terraform-provisioned infrastructure",
      "CI/CD automated deployments",
      "Microservices architecture on AWS",
    ],
    stack: ["AWS", "Terraform", "Docker", "CI/CD", "Microservices"],
    github: "https://github.com/GY2AN/aws-microservices-platform",
    icon: Cloud,
  },
  {
    title: "AWS 3-Tier HA Architecture",
    description:
      "Highly available, scalable, and secure 3-tier web application on AWS. Flask backend on EC2 in private subnets, Amazon RDS database, ALB routing, and auto-scaling based on CPU utilization.",
    highlights: [
      "Multi-AZ high availability",
      "Auto Scaling with ALB",
      "Private subnets & security groups",
    ],
    stack: ["AWS", "EC2", "RDS", "ALB", "Flask", "VPC"],
    github: "https://github.com/GY2AN/aws-resume-killer-project",
    icon: Server,
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex flex-col glassmorphism rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 hover-glow"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-heading text-lg sm:text-xl leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-body text-sm mb-5 flex-grow">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-secondary/80 border border-border/40 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-sm font-medium text-primary hover:bg-primary/20 transition-all"
                >
                  <Github size={16} /> View on GitHub
                  <ExternalLink size={13} className="opacity-50" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
