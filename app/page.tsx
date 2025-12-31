"use client"

import { useState, useEffect } from "react"
import { Github, Mail, MessageCircle, Linkedin } from "lucide-react"
import { ImageCanvas } from "@/components/image-canvas"

const HALFTONE_SIZE = 0.005
const CONTRAST = 1
const ACCENT_COLOR = "#CECFC7"
const MOUSE_RADIUS = 100
const REPULSION_STRENGTH = 1.5
const RETURN_SPEED = 0.6
const ACCENT_PROBABILITY = 0.2
const SIZE_VARIATION = 0.1

export default function Home() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setImage(img)
    }
    img.src = "/photo.jpg"
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                {image ? (
                  <ImageCanvas
                    image={image}
                    halftoneSize={HALFTONE_SIZE}
                    contrast={CONTRAST}
                    accentColor={ACCENT_COLOR}
                    mouseRadius={MOUSE_RADIUS}
                    repulsionStrength={REPULSION_STRENGTH}
                    returnSpeed={RETURN_SPEED}
                    accentProbability={ACCENT_PROBABILITY}
                    sizeVariation={SIZE_VARIATION}
                  />
                ) : (
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
                MOHAMADREZA<br />NAJARBASHI
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary mb-8 font-medium">
                Platform Engineer | Back-End Developer | Site Reliability Engineer
              </p>
              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground">
                <a
                  href="https://github.com/KeyMoad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Github className="w-5 h-5" />
                  KeyMoad
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamadreza-najarbashi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:mohamadreza.najarbashii@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="https://t.me/KeyMoad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <MessageCircle className="w-5 h-5" />
                  @KeyMoad
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              SUMMARY
            </h2>
            <p className="text-foreground leading-relaxed text-lg">
              Tech enthusiast with a passion for DevOps, Site Reliability Engineering (SRE) and AI, I blend software development with IT operations to enhance collaboration and software delivery. With expertise in coding languages like Python, I design and implement reliable systems that meet the needs of modern businesses. I stay up-to-date with the latest tech trends and actively contribute to innovative teams. As an AI enthusiast, I explore cutting-edge advancements to push the boundaries of technology and develop intelligent, scalable solutions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROFESSIONAL EXPERIENCE
            </h2>
            
            <div className="space-y-10">
              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Site Reliability Engineer
                  </h3>
                  <span className="text-primary font-medium text-lg">Jan 2023 - Present</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">LimooHost</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Linux Server Administration & Troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Infrastructure Design & Scalability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Deployment & Monitoring (Grafana-Prometheus, OpenSearch-Logstash)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Automation & Scripting (Bash, Python)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Configuration Management (Ansible)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Containerization & Orchestration (Docker, Docker Compose, Kubernetes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Helm & ArgoCD for GitOps and CI/CD-driven deployments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>CI/CD Pipelines (GitLab CI/CD)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Web Application Development (Python FastAPI backend, Vue.js Quasar + TypeScript frontend)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Load Balancing & Reverse Proxying (Nginx, Traefik)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Database Clustering (Percona XtraDB, PostgreSQL HA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Server Maintenance (Dedicated & Shared Servers, cPanel, DirectAdmin)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Synchronization & Reliability across distributed systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Design disaster recovery plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Automation Scripts for repetitive operational tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Monitoring, Alerting & Incident Response</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Automation Engineer
                  </h3>
                  <span className="text-primary font-medium text-lg">Jul 2023 - Dec 2023 · 6 mos</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">LimooHost</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Automation & Scripting (Bash, Python)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Automation Scripts for repetitive operational tasks</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Technical Support Specialist
                  </h3>
                  <span className="text-primary font-medium text-lg">Jul 2022 - Jun 2023</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">LimooHost</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Web Hosting Management (DirectAdmin, cPanel, WHM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Linux Server Administration & Troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Domain, DNS, and Email Configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Customer Technical Support & Ticketing Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Website Migration & Performance Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Network Configuration and Connectivity Issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>SSL Certificates & Security Hardening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Backup and Disaster Recovery Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Develop some small automation scripts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Monitoring and Incident Response</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROJECTS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    DevOps as a Service Proposal Generator
                  </h3>
                  <span className="text-primary font-medium">Oct 2025 - Nov 2025</span>
                </div>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Developed an automated proposal generation system using n8n, integrating API workflows to pull relevant data and AI integration to generate content.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Created dynamic document templates that auto-generate customized proposals, improving turnaround time and reducing manual errors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Automated client proposal generation workflows, enhancing team efficiency and improving client response times.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Product Crawler
                  </h3>
                  <span className="text-primary font-medium">Aug 2024 - May 2025</span>
                </div>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Developed a Python automation tool to retrieve and submit view for product in Digikala efficiently.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented data parsing and handling logic to structure product details for analysis and reporting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Designed the tool for scalability and reliability, ensuring consistent performance for repeated product monitoring tasks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented dynamic proxy rotation to make requests appear more human-like</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg md:col-span-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 md:mb-0">
                    Monitoring Mobile Application
                  </h3>
                  <span className="text-primary font-medium">Jan 2024 - Feb 2024</span>
                </div>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Developed a cross-platform remote monitoring system with a mobile client and server-side agent for real-time server management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented agent installation, update, and uninstallation scripts in Bash to simplify deployment and maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Built the backend in Python and frontend in Java, ensuring reliable performance and seamless communication between client and server components.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              VOLUNTEERING
            </h2>
            
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  Presenter - IRNOG 6
                </h3>
                <span className="text-primary font-medium">Jul 2024 · 1 mo</span>
              </div>
              <p className="text-foreground">
                Presented Kubernetes networking internals at IRNOG, focusing on CNI mechanics, packet flow, service mesh interactions, and troubleshooting real production scenarios.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              SKILLS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Flask", "Elastic Stack (ELK)", "Linux", "ArgoCD", "Bash", "Docker", "Ansible", "n8n", "Docker Compose", "CI/CD", "Troubleshooting"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Platforms & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "Prometheus", "Grafana", "PostgreSQL", "Helm Charts", "FastAPI"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Teamwork", "Documentation"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              EDUCATION
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Bachelor's degree, Computer Software Engineering
                  </h3>
                  <span className="text-primary font-medium">Oct 2024 - Present</span>
                </div>
                <p className="text-muted-foreground">Montazeri Technical College of Mashhad</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Associate's degree, Computer Systems Networking and Telecommunications
                  </h3>
                  <span className="text-primary font-medium">Sep 2021 - Feb 2023</span>
                </div>
                <p className="text-muted-foreground">Montazeri Technical College of Mashhad</p>
              </div>
            </div>
          </section>

          <section className="pb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              LANGUAGES
            </h2>
            
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
              <ul className="space-y-3 text-foreground list-none">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-lg">English</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-lg">Persian</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
