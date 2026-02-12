
import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowLeft, Star, Trophy, Users, Award, X, Clock, MapPin, ArrowUpRight,
  Code, Layout, Shield, Database, Search as SearchIcon, Cloud, Sparkles, Rocket,
  CheckCircle2, MessageSquare, Quote, StarHalf, Terminal, Cpu, HardDrive, Globe,
  ShieldAlert, BrainCircuit, Microscope, HelpCircle, ChevronLeft, ChevronRight
} from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  image: string;
}

interface ProjectLevel {
  title: string;
  description: string;
  tags: string[];
}

interface CourseData {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  icon: any;
  modules: { name: string; details: string; image: string }[];
  tools: string[];
  career: string;
  related: string[];
  accent: string;
  accentBg: string;
  color: string;
  projects: {
    normal: ProjectLevel[];
    mid: ProjectLevel[];
    head: ProjectLevel[];
    realtime: ProjectLevel[];
  };
  reviews: Testimonial[];
}

interface CourseDetailProps {
  courseId: string;
  onBack: () => void;
  onNavigateToCourse: (id: string) => void;
  theme?: 'light' | 'dark';
}

const commonReviews: Testimonial[] = [
  { name: "Amit Sharma", rating: 5, comment: "The transition from a student to a microservices engineer was incredible. The hands-on labs are unmatched.", image: "https://i.pravatar.cc/150?u=amit" },
  { name: "Priya Das", rating: 5, comment: "The Real-Time projects are what got me through the interviews at top firms. Highly recommended.", image: "https://i.pravatar.cc/150?u=priya" },
  { name: "Kavya S", rating: 5, comment: "The placement team is tireless. I had 3 interviews lined up within a week of finishing my project phase.", image: "https://i.pravatar.cc/150?u=kavya" },
  { name: "Manoj T", rating: 4.5, comment: "Practical exposure is the key. The mock drills helped me gain the confidence I needed for global MNC interviews.", image: "https://i.pravatar.cc/150?u=manoj" },
  { name: "Sunita G", rating: 5, comment: "The mentorship is truly 1:1. Whenever I got stuck in a project, there was always someone expert to guide me back.", image: "https://i.pravatar.cc/150?u=sunita" }
];

const courseData: Record<string, CourseData> = {
  "java-full-stack": {
    title: "Java Full Stack Development",
    subtitle: "Enterprise-Grade Engineering",
    description: "Architect high-performance distributed systems. We take you from Core Java fundamentals to deploying complex microservices architectures with React frontends on AWS.",
    duration: "4 Months",
    level: "Beginner to Architect",
    icon: Code,
    modules: [
      { name: "Core Java & OOPS", details: "Deep dive into Multithreading, Collections, JVM internals, and Advanced Design Patterns.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" },
      { name: "Modern Frontend", details: "Building pixel-perfect, responsive UIs with React JS, Hooks, and high-end state management.", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" },
      { name: "Backend Mastery", details: "Spring Boot architecture, Spring Security, Hibernate ORM, and Robust RESTful APIs.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400" },
      { name: "Cloud & Microservices", details: "Containerization with Docker, Kubernetes orchestration, and AWS cloud deployment strategies.", image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=400" }
    ],
    tools: ["openjdk", "springboot", "react", "mysql", "docker", "amazonwebservices", "hibernate", "git"],
    career: "Full Stack Lead, Backend Architect, Senior Java Engineer",
    related: ["devops-aws-cloud", "software-testing", "data-science-ai"],
    accent: "text-blue-600 dark:text-blue-400",
    accentBg: "bg-blue-600",
    color: "from-blue-500/10 to-blue-600/10",
    projects: {
      normal: [
        { title: "Personal Budget Tracker", description: "Manage daily expenses with Java Collections and File I/O.", tags: ["Java SE", "IO"] },
        { title: "Student Management Console", description: "JDBC based application to manage student records.", tags: ["JDBC", "SQL"] },
        { title: "Quiz Application", description: "Interactive swing based quiz with scoring logic.", tags: ["Java Swing", "Events"] },
        { title: "Library Catalog System", description: "Search and borrow books using multi-dimensional arrays.", tags: ["Java Core", "Arrays"] },
        { title: "Currency Converter", description: "API-less converter using predefined exchange rates.", tags: ["Java Core", "Math"] }
      ],
      mid: [
        { title: "Blogging Platform API", description: "RESTful services for posts and comments using Spring Boot.", tags: ["REST", "Spring Boot"] },
        { title: "Weather Forecast Dashboard", description: "React frontend fetching data from OpenWeather API.", tags: ["React", "Axios"] },
        { title: "User Authentication Module", description: "Secure login/signup using Spring Security and JWT.", tags: ["Security", "JWT"] },
        { title: "Employee Salary Portal", description: "Manage payroll and deductions with Hibernate ORM.", tags: ["Hibernate", "MySQL"] },
        { title: "Task Manager Pro", description: "Drag-and-drop task board built with React and Redux.", tags: ["Redux", "React"] }
      ],
      head: [
        { title: "Distributed Netflix Architecture", description: "High-scale microservices system with API Gateway.", tags: ["Microservices", "Docker"] },
        { title: "Real-time Chat Engine", description: "WebSocket based messaging system with high concurrency.", tags: ["WebSockets", "Java"] },
        { title: "E-Commerce Micro-Frontend", description: "Modular frontend architecture with independent deployment.", tags: ["Architecture", "React"] },
        { title: "Stock Market Tracker", description: "Async processing of live stock data using Spring WebFlux.", tags: ["Reactive", "WebFlux"] },
        { title: "Enterprise Identity Provider", description: "OAuth2 and OIDC server for multi-tenant apps.", tags: ["OAuth2", "Security"] }
      ],
      realtime: [
        { title: "Global FinTech Ledger", description: "Production-grade banking transaction engine on AWS.", tags: ["AWS", "Kafka", "React"] },
        { title: "Medical Record Grid", description: "HIPAA compliant record management for large hospitals.", tags: ["HIPAA", "Spring Boot"] },
        { title: "Supply Chain Tracker", description: "End-to-end logistics monitoring with real-time mapping.", tags: ["Logistics", "Google Maps"] },
        { title: "Airlines Booking Engine", description: "Complex seat reservation system with race condition handling.", tags: ["Distributed Systems", "SQL"] },
        { title: "Social Media Backend", description: "Scalable feed generation and notification system.", tags: ["Redis", "PostgreSQL"] }
      ]
    },
    reviews: commonReviews
  },
  "salesforce-crm": {
    title: "Salesforce CRM Mastery",
    subtitle: "Cloud Implementation Expert",
    description: "Master the world's leading CRM. From Admin to Lightning Web Components, build scalable enterprise solutions for global businesses.",
    duration: "3.5 Months",
    level: "All Levels",
    icon: Layout,
    modules: [
      { name: "Admin Foundations", details: "Security models, Data Architecture, and Declarative Process Automation.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400" },
      { name: "Apex Programming", details: "Trigger frameworks, Batch Apex, and Object-Oriented development on the cloud.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" },
      { name: "LWC Development", details: "Modern JavaScript components and reactive UI frameworks for the Salesforce ecosystem.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400" },
      { name: "Cloud Integration", details: "Building bridges between Salesforce and external systems using high-speed REST APIs.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400" }
    ],
    tools: ["salesforce", "javascript", "visualstudiocode", "github", "postman"],
    career: "Salesforce Architect, Tech Lead, CRM Consultant",
    related: ["java-full-stack", "devops-aws-cloud"],
    accent: "text-sky-600 dark:text-sky-400",
    accentBg: "bg-sky-600",
    color: "from-sky-500/10 to-sky-600/10",
    projects: {
      normal: [
        { title: "Lead Management Flow", description: "Automated qualification rules using Flow Builder.", tags: ["Flows", "Admin"] },
        { title: "Custom Recruitment App", description: "Declarative app to track job applications and interviews.", tags: ["Data Modeling", "UX"] },
        { title: "Approval Process Engine", description: "Multi-step discount approval system for sales teams.", tags: ["Automation", "Admin"] },
        { title: "Validation Guard", description: "Complex business logic using Validation Rules and Formulae.", tags: ["Admin", "Security"] },
        { title: "Data Import Hub", description: "Cleaning and importing legacy data using Data Loader.", tags: ["Data", "Admin"] }
      ],
      mid: [
        { title: "Apex Trigger Framework", description: "Implementing a scalable, handler-based trigger pattern.", tags: ["Apex", "Best Practices"] },
        { title: "Customer Search LWC", description: "Reactive search component with SOSL integration.", tags: ["LWC", "SOSL"] },
        { title: "Batch Invoice Generator", description: "Scheduled Apex to generate thousands of PDF invoices.", tags: ["Batch Apex", "PDF"] },
        { title: "REST API Integration", description: "Connecting Salesforce to external stock market data.", tags: ["REST", "Apex"] },
        { title: "Unit Testing Suite", description: "Achieving 95%+ coverage with Mocking Frameworks.", tags: ["Testing", "Apex"] }
      ],
      head: [
        { title: "Banking CRM Console", description: "High-performance LWC dashboard for retail bankers.", tags: ["LWC", "Service Cloud"] },
        { title: "OAuth Connect Hub", description: "External Services integration using Named Credentials.", tags: ["Security", "Integration"] },
        { title: "Async Event Manager", description: "Using Platform Events for real-time decoupled processing.", tags: ["Events", "Architecture"] },
        { title: "Custom Salesforce Mobile", description: "Optimizing the CRM experience for field agents.", tags: ["Mobile", "UX"] },
        { title: "Dynamic Metadata Engine", description: "Building data-driven UIs using Metadata API.", tags: ["Metadata", "Architecture"] }
      ],
      realtime: [
        { title: "Global Logistics Sync", description: "Omnichannel supply chain management with custom LWC.", tags: ["LWC", "Experience Cloud"] },
        { title: "Telecom Order Orchestrator", description: "Complex order management system for telco clients.", tags: ["Industry Cloud", "Apex"] },
        { title: "Insurance Claim Portal", description: "Self-service portal for policy holders to file claims.", tags: ["Experience Cloud", "Flows"] },
        { title: "FinTech Compliance Guard", description: "Real-time auditing and logging system for bank transactions.", tags: ["Security", "Compliance"] },
        { title: "Retail Inventory Bridge", description: "Bi-directional sync between Salesforce and SAP.", tags: ["MuleSoft", "Integration"] }
      ]
    },
    reviews: commonReviews
  },
  "devops-aws-cloud": {
    title: "DevOps + AWS Cloud",
    subtitle: "Automation & Infrastructure Architect",
    description: "Scale applications globally. Learn the full DevOps lifecycle, Infrastructure as Code, and production-grade AWS Cloud management.",
    duration: "4 Months",
    level: "Professional",
    icon: Cloud,
    modules: [
      { name: "Linux Administration", details: "Mastering the shell and operating system fundamentals for high-performance servers.", image: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=400" },
      { name: "Container Orchestration", details: "Deep dive into Docker images and production-grade Kubernetes clusters.", image: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=400" },
      { name: "Automation Pipelines", details: "Building CI/CD workflows with Jenkins, GitLab, and Terraform for multi-cloud deployments.", image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=400" },
      { name: "AWS Solutions Architect", details: "Designing scalable, fault-tolerant systems using AWS EC2, S3, RDS, and Lambda.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" }
    ],
    tools: ["amazonwebservices", "docker", "kubernetes", "jenkins", "terraform", "ansible", "linux"],
    career: "DevOps Lead, Cloud Architect, Site Reliability Engineer",
    related: ["cybersecurity-vapt", "java-full-stack"],
    accent: "text-orange-600 dark:text-orange-400",
    accentBg: "bg-orange-600",
    color: "from-orange-500/10 to-orange-600/10",
    projects: {
      normal: [
        { title: "Static S3 Site", description: "Deploying a personal portfolio using S3 and CloudFront.", tags: ["AWS S3", "CDN"] },
        { title: "User Automation Script", description: "Bash script to manage 100+ linux users and permissions.", tags: ["Linux", "Bash"] },
        { title: "VPC Network Setup", description: "Designing a secure private network with public/private subnets.", tags: ["VPC", "Networking"] },
        { title: "Server Performance Monitor", description: "Python script to track CPU/RAM and alert via Email.", tags: ["Python", "Ops"] },
        { title: "Simple Docker Image", description: "Containerizing a Node.js web server with multi-stage builds.", tags: ["Docker", "Node"] }
      ],
      mid: [
        { title: "Jenkins CI/CD Flow", description: "Automated build and test pipeline for a Java app.", tags: ["Jenkins", "CI/CD"] },
        { title: "Ansible Config Manager", description: "Automating server patches and software updates.", tags: ["Ansible", "Automation"] },
        { title: "Docker Swarm Cluster", description: "Orchestrating services across multiple cloud instances.", tags: ["Swarm", "Orchestration"] },
        { title: "CloudWatch Alarm Hub", description: "Advanced monitoring with custom metrics and dashboards.", tags: ["AWS", "Monitoring"] },
        { title: "AWS Lambda Image Processor", description: "Event-driven resizing of images uploaded to S3.", tags: ["Lambda", "Serverless"] }
      ],
      head: [
        { title: "Autoscaling K8s Grid", description: "Production cluster with HPA and Cluster Autoscaler.", tags: ["Kubernetes", "EKS"] },
        { title: "Terraform Multi-Cloud Hub", description: "Provisioning infrastructure on AWS and Azure simultaneously.", tags: ["Terraform", "Cloud"] },
        { title: "Vault Secret Manager", description: "Centralized secret management for microservices.", tags: ["Vault", "Security"] },
        { title: "ELK Logging Stack", description: "Centralized log aggregation for 50+ microservices.", tags: ["ELK", "Logging"] },
        { title: "Istio Service Mesh", description: "Securing service-to-service communication with mTLS.", tags: ["Istio", "Service Mesh"] }
      ],
      realtime: [
        { title: "Zero-Downtime Pipeline", description: "End-to-end Blue/Green deployment using Terraform.", tags: ["Terraform", "AWS"] },
        { title: "FinTech Compliance Cloud", description: "Hardened infrastructure meeting PCI-DSS standards.", tags: ["Security", "Compliance"] },
        { title: "Global CDN Optimization", description: "Global content delivery for a high-traffic media site.", tags: ["CloudFront", "WAF"] },
        { title: "Disaster Recovery Hub", description: "Cross-region replication and automated failover strategy.", tags: ["DR", "Availability"] },
        { title: "Cost Optimization Engine", description: "Analyzing cloud spend and automating resource termination.", tags: ["Cost", "Automation"] }
      ]
    },
    reviews: commonReviews
  },
  "cybersecurity-vapt": {
    title: "Cybersecurity & VAPT",
    subtitle: "Digital Defense Specialist",
    description: "Protect enterprise assets. Master ethical hacking, vulnerability assessments, and penetration testing using industry-standard tools.",
    duration: "3 Months",
    level: "Advanced",
    icon: ShieldAlert,
    modules: [
      { name: "Ethical Hacking", details: "Footprinting, Reconnaissance, and scanning networks for vulnerabilities.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
      { name: "Web App Security", details: "OWASP Top 10, SQL injection, XSS, and broken authentication testing.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400" },
      { name: "Network VAPT", details: "Attacking wireless networks, privilege escalation, and lateral movement.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400" },
      { name: "SOC Operations", details: "Incident response, log analysis with Splunk, and threat hunting.", image: "https://images.unsplash.com/photo-1510511459019-5dee99c48db9?auto=format&fit=crop&q=80&w=400" }
    ],
    tools: ["kalilinux", "wireshark", "metasploit", "splunk", "python", "nmap", "burpsuite"],
    career: "SOC Analyst, Pentester, Security Architect",
    related: ["devops-aws-cloud", "java-full-stack"],
    accent: "text-red-600 dark:text-red-400",
    accentBg: "bg-red-600",
    color: "from-red-500/10 to-red-600/10",
    projects: {
      normal: [
        { title: "Network Scanner", description: "Python based tool to detect open ports and services.", tags: ["Python", "Nmap"] },
        { title: "Hash Cracker", description: "Simple brute force tool for common encryption algorithms.", tags: ["Python", "Cryptography"] },
        { title: "Packet Sniffer", description: "Capturing and analyzing local network traffic.", tags: ["Wireshark", "Networking"] },
        { title: "Keylogger for Labs", description: "Understanding input interception for educational purposes.", tags: ["Security", "Python"] },
        { title: "Firewall Ruleset", description: "Configuring iptables for a basic linux server.", tags: ["Linux", "Iptables"] }
      ],
      mid: [
        { title: "SQLi Vulnerability Lab", description: "Setting up and exploiting a vulnerable web database.", tags: ["SQLi", "Web"] },
        { title: "Wireless Pentest", description: "Cracking WEP/WPA2 handshakes in a controlled lab.", tags: ["Aircrack", "WiFi"] },
        { title: "Metasploit Payload", description: "Generating and deploying custom reverse shells.", tags: ["Metasploit", "Exploitation"] },
        { title: "SIEM Dashboard", description: "Building a monitoring dashboard in Splunk for logs.", tags: ["Splunk", "SOC"] },
        { title: "Malware Analysis", description: "Static and dynamic analysis of known trojans in a sandbox.", tags: ["Sandbox", "Malware"] }
      ],
      head: [
        { title: "Enterprise VAPT Audit", description: "Full security audit of a mock corporate network.", tags: ["Audit", "VAPT"] },
        { title: "Active Directory Attack", description: "Privilege escalation and golden ticket attacks.", tags: ["Windows", "AD"] },
        { title: "Reverse Engineering", description: "Decompiling binaries to find hidden vulnerabilities.", tags: ["Assembly", "Ghidra"] },
        { title: "Cloud Security Posture", description: "Auditing an AWS environment for misconfigurations.", tags: ["AWS", "CloudSec"] },
        { title: "Incident Response Plan", description: "Building an end-to-end response workflow for a data breach.", tags: ["SOC", "Governance"] }
      ],
      realtime: [
        { title: "Global Threat Map", description: "Real-time visualization of network attacks using ELK.", tags: ["ELK", "GeoIP"] },
        { title: "Banking App Pentest", description: "Strict security testing of a mock mobile banking app.", tags: ["Mobile", "Financial"] },
        { title: "Ransomware Defense", description: "Implementing canary files and behavioral blocking.", tags: ["Defensive", "EDR"] },
        { title: "Automated Pentest Bot", description: "Continuous security scanning for CI/CD pipelines.", tags: ["DevSecOps", "Bot"] },
        { title: "Dark Web Crawler", description: "Monitoring for leaked credentials using Python.", tags: ["OSINT", "Python"] }
      ]
    },
    reviews: commonReviews
  },
  "data-science-ai": {
    title: "Data Science & AI",
    subtitle: "Predictive Intelligence Expert",
    description: "Unlock the power of data. Learn Python, Machine Learning, and Deep Learning to build next-generation intelligent systems.",
    duration: "4 Months",
    level: "All Levels",
    icon: BrainCircuit,
    modules: [
      { name: "Python for Data", details: "NumPy, Pandas, and Matplotlib for high-end data manipulation.", image: "https://images.unsplash.com/photo-1551288560-12939103c80a?auto=format&fit=crop&q=80&w=400" },
      { name: "Machine Learning", details: "Supervised and unsupervised learning, regressions, and clustering.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400" },
      { name: "Deep Learning", details: "Neural Networks, CNNs for Vision, and RNNs for Sequential data.", image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400" },
      { name: "AI Applications", details: "NLP, Computer Vision, and Generative AI implementation strategies.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" }
    ],
    tools: ["python", "tensorflow", "pytorch", "tableau", "jupyter", "scikitlearn", "pandas"],
    career: "Data Scientist, AI Engineer, ML Lead",
    related: ["java-full-stack", "devops-aws-cloud"],
    accent: "text-purple-600 dark:text-purple-400",
    accentBg: "bg-purple-600",
    color: "from-purple-500/10 to-purple-600/10",
    projects: {
      normal: [
        { title: "Iris Classifier", description: "The classic ML project using Scikit-Learn.", tags: ["ML", "Basics"] },
        { title: "Titanic Survival", description: "Predicting survival rates using logistic regression.", tags: ["Data", "Stats"] },
        { title: "House Price Estimator", description: "Linear regression on real estate datasets.", tags: ["ML", "Regression"] },
        { title: "Sales Visualization", description: "Interactive dashboard using Matplotlib/Seaborn.", tags: ["Viz", "Python"] },
        { title: "Simple Web Scraper", description: "Extracting data from news sites for analysis.", tags: ["Scraping", "Data"] }
      ],
      mid: [
        { title: "Spam Mail Detector", description: "NLP based classification of emails.", tags: ["NLP", "NaiveBayes"] },
        { title: "Stock Price Tracker", description: "TimeSeries analysis using ARIMA or LSTM.", tags: ["TimeSeries", "LSTM"] },
        { title: "Credit Card Fraud", description: "Anomaly detection in large financial datasets.", tags: ["ML", "Fraud"] },
        { title: "Movie Recommender", description: "Content-based and collaborative filtering system.", tags: ["RecSys", "Data"] },
        { title: "Customer Segmentation", description: "K-Means clustering for marketing insights.", tags: ["Unsupervised", "Clustering"] }
      ],
      head: [
        { title: "Object Detection App", description: "Real-time detection using YOLO and OpenCV.", tags: ["Vision", "YOLO"] },
        { title: "Sentiment Analysis Hub", description: "Deep learning model analyzing Twitter live feeds.", tags: ["NLP", "DeepLearning"] },
        { title: "Speech to Text Engine", description: "Using advanced RNNs for audio transcription.", tags: ["Audio", "RNN"] },
        { title: "Medical Diagnosis AI", description: "Predicting diseases from X-ray imagery.", tags: ["Health", "CNN"] },
        { title: "AutoML Pipeline", description: "Automated hyperparameter tuning for ML models.", tags: ["Ops", "Automation"] }
      ],
      realtime: [
        { title: "Autonomous Vehicle Sim", description: "Lane detection and path planning in simulation.", tags: ["AI", "Vision"] },
        { title: "Financial Forecast Bot", description: "High-frequency trading strategy simulation.", tags: ["Finance", "RL"] },
        { title: "Generative Chatbot", description: "Building a custom LLM interface using Transformers.", tags: ["GenAI", "NLP"] },
        { title: "Agriculture Yield AI", description: "Predicting crop success from satellite data.", tags: ["Satellite", "Data"] },
        { title: "Retail Inventory AI", description: "Global supply chain optimization using demand forecasting.", tags: ["SupplyChain", "ML"] }
      ]
    },
    reviews: commonReviews
  },
  "software-testing": {
    title: "Software Testing",
    subtitle: "Quality Assurance Leader",
    description: "Ensure flawless software delivery. Master manual testing, automated Selenium suites, and API testing for modern apps.",
    duration: "3 Months",
    level: "Beginner to Pro",
    icon: SearchIcon,
    modules: [
      { name: "Manual Testing", details: "SDLC, STLC, Test cases, and Defect life cycle fundamentals.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" },
      { name: "Selenium Automation", details: "Java based automation for cross-browser web application testing.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" },
      { name: "API Testing", details: "Testing RESTful services using Postman and RestAssured.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400" },
      { name: "Performance Testing", details: "Load testing and stress testing using Apache JMeter.", image: "https://images.unsplash.com/photo-1551288560-12939103c80a?auto=format&fit=crop&q=80&w=400" }
    ],
    tools: ["selenium", "postman", "apachejmeter", "jenkins", "openjdk", "github", "testng"],
    career: "QA Automation Engineer, Test Lead, SDET",
    related: ["java-full-stack", "devops-aws-cloud"],
    accent: "text-emerald-600 dark:text-emerald-400",
    accentBg: "bg-emerald-600",
    color: "from-emerald-500/10 to-emerald-600/10",
    projects: {
      normal: [
        { title: "Manual Banking Suite", description: "Writing 100+ test cases for a mock bank app.", tags: ["Manual", "Cases"] },
        { title: "Login Page Automation", description: "Simple Selenium script for auth verification.", tags: ["Selenium", "Basics"] },
        { title: "Defect Tracking Report", description: "End-to-end report generation in Jira.", tags: ["Jira", "Process"] },
        { title: "UI Element Scraper", description: "Detecting broken links on a website.", tags: ["Selenium", "Crawler"] },
        { title: "Static Site Review", description: "Adherence testing for design specifications.", tags: ["Review", "QA"] }
      ],
      mid: [
        { title: "E-Commerce Test Suite", description: "Full checkout flow automation with Selenium.", tags: ["Selenium", "E-Comm"] },
        { title: "REST API Test Kit", description: "Validating JSON responses using Postman.", tags: ["API", "Postman"] },
        { title: "Data Driven Framework", description: "Using Excel files to drive automation tests.", tags: ["TestNG", "ApachePOI"] },
        { title: "Mobile UI Testing", description: "Testing responsive layouts across devices.", tags: ["Mobile", "QA"] },
        { title: "Database Integrity", description: "Validating frontend data against SQL records.", tags: ["SQL", "Testing"] }
      ],
      head: [
        { title: "Page Object Model Hub", description: "Implementing POM for a large enterprise app.", tags: ["Architecture", "Java"] },
        { title: "Hybrid Test Framework", description: "Combining Keyword and Data driven approaches.", tags: ["Framework", "Pro"] },
        { title: "Performance Stress Test", description: "Testing a server under 1000 simultaneous users.", tags: ["JMeter", "Performance"] },
        { title: "CI/CD Test Pipeline", description: "Integrating Selenium into Jenkins workflows.", tags: ["Jenkins", "DevOps"] },
        { title: "Visual Regression", description: "Pixel-perfect screenshot comparison testing.", tags: ["Visual", "QA"] }
      ],
      realtime: [
        { title: "Global Flight Booking", description: "Complex multi-step reservation testing.", tags: ["Airlines", "Complex"] },
        { title: "Financial Ledger Sync", description: "Real-time data consistency testing.", tags: ["FinTech", "API"] },
        { title: "Healthcare Security QA", description: "HIPAA compliance testing for data privacy.", tags: ["Health", "Security"] },
        { title: "Retail POS Simulator", description: "Testing point of sale integration in retail.", tags: ["POS", "Testing"] },
        { title: "SaaS Multi-tenant QA", description: "Validating data isolation in cloud apps.", tags: ["Cloud", "SaaS"] }
      ]
    },
    reviews: commonReviews
  }
};

const CourseDetail: React.FC<CourseDetailProps> = ({ courseId, onBack, onNavigateToCourse, theme }) => {
  const data = courseData[courseId] || courseData["java-full-stack"];
  const [activeProjectTab, setActiveProjectTab] = useState<'normal' | 'mid' | 'head' | 'realtime'>('realtime');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal, .module-reveal, .project-reveal, .review-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [courseId]);

  // Auto-scroll logic for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % data.reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.reviews.length]);

  const renderRating = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < Math.floor(rating)) return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
          if (i < rating) return <StarHalf key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
          return <Star key={i} className="w-4 h-4 text-slate-300" />;
        })}
      </div>
    );
  };

  const formatToolName = (name: string) => {
    const custom: Record<string, string> = {
      'amazonwebservices': 'AWS Cloud',
      'openjdk': 'Java Core',
      'visualstudiocode': 'VS Code',
      'springboot': 'Spring Boot',
      'mysql': 'MySQL DB',
      'apachejmeter': 'Apache JMeter',
      'scikitlearn': 'SciKit Learn',
      'react': 'React JS'
    };
    return custom[name] || name.charAt(0).toUpperCase() + name.slice(1);
  };

  const filteredCourses = Object.entries(courseData).filter(([id, course]) => {
    const q = searchQuery.toLowerCase();
    if (!q) return true;
    return (
      course.title.toLowerCase().includes(q) ||
      course.subtitle.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      course.career.toLowerCase().includes(q)
    );
  });

  const nextReview = () => setCurrentReviewIndex((prev) => (prev + 1) % data.reviews.length);
  const prevReview = () => setCurrentReviewIndex((prev) => (prev - 1 + data.reviews.length) % data.reviews.length);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pb-24 overflow-x-hidden selection:bg-teal-500/30">
      
      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col p-6 sm:p-20 transition-all duration-500 overflow-y-auto">
           <div className="max-w-4xl mx-auto w-full">
              <div className="flex justify-between items-center mb-10">
                 <div className="flex items-center gap-4">
                    <Sparkles className="w-10 h-10 text-teal-500 animate-pulse" />
                    <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white italic">Elite Search Hub</h2>
                 </div>
                 <button onClick={() => { setShowSearch(false); setSearchQuery(""); }} className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-red-500 transition-all shadow-2xl">
                    <X className="w-7 h-7" />
                 </button>
              </div>
              
              <div className="relative mb-12 flex items-center group">
                 <div className="absolute left-4 w-16 h-16 flex items-center justify-center bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-900 rounded-full border-[3px] border-slate-900 dark:border-teal-400 z-10 shadow-lg">
                    <SearchIcon className="w-7 h-7" />
                 </div>
                 <input 
                    type="text" 
                    placeholder="Type to search (e.g. Java, Cloud, Testing)..." 
                    value={searchQuery}
                    autoFocus
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-24 pr-8 py-8 rounded-full bg-white dark:bg-slate-900 border-[3px] border-slate-900 dark:border-teal-500 focus:border-teal-600 focus:ring-8 focus:ring-teal-500/10 focus:outline-none text-3xl transition-all shadow-2xl font-display italic placeholder:text-slate-300 text-slate-900 dark:text-white"
                 />
                 <div className="absolute inset-0 rounded-full border border-teal-500/20 pointer-events-none" />
              </div>
              
              <div className="space-y-12">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                   <p className="text-[12px] uppercase tracking-[0.5em] text-teal-600 font-bold">
                     {searchQuery ? `Search Results (${filteredCourses.length})` : "Our Premium Programs"}
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
                   {filteredCourses.map(([id, course]) => (
                      <button 
                        key={id} 
                        onClick={() => { onNavigateToCourse(id); setShowSearch(false); setSearchQuery(""); }} 
                        className="flex flex-col gap-6 p-10 rounded-[48px] bg-slate-50 dark:bg-slate-900 border-[2px] border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all group relative overflow-hidden text-left"
                      >
                         <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 blur-3xl rounded-full -mr-24 -mt-24 group-hover:bg-teal-500/10 transition-colors" />
                         <div className="flex items-center gap-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg"><course.icon className="w-8 h-8" /></div>
                            <div>
                               <h4 className="font-bold text-slate-900 dark:text-white text-2xl group-hover:text-teal-600 transition-colors">{course.title}</h4>
                               <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">{course.duration} • {course.level}</p>
                            </div>
                         </div>
                         <p className="text-slate-500 dark:text-slate-400 text-sm font-light italic leading-relaxed line-clamp-2 relative z-10">{course.subtitle}</p>
                         <div className="flex items-center gap-2 text-teal-600 font-bold text-[10px] uppercase tracking-widest mt-2 relative z-10">
                            Explore Curriculum <ArrowUpRight className="w-4 h-4" />
                         </div>
                      </button>
                   ))}
                </div>
              </div>
           </div>
        </div>
      )}

      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 w-full z-[90] glass-effect py-4 px-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
         <button onClick={onBack} className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            <span className="hidden sm:inline">Back to Hub</span>
          </button>
          
          <div className="flex items-center gap-4">
             <button 
                onClick={() => setShowSearch(true)} 
                className="w-12 h-12 rounded-full bg-[#020617] flex items-center justify-center text-white transition-all shadow-xl active:scale-90"
                title="Search Courses"
             >
                <SearchIcon className="w-6 h-6" />
             </button>
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-3.5 teal-gradient text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-all">
                Enroll Now
             </button>
          </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="relative pt-20 pb-12 px-6 sm:px-12 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal active">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm text-teal-600 dark:text-teal-400 font-bold text-[10px] tracking-[0.3em] uppercase">
              <Star className="w-4 h-4 fill-teal-600" />
              Elite Training Series
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[0.9] italic tracking-tighter">
                {data.title}
              </h1>
              <p className="text-xl text-slate-400 font-serif italic font-light">{data.subtitle}</p>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl border-l-4 border-teal-500 pl-8">
              {data.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                 <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Duration</p>
                 <p className="text-slate-900 dark:text-white font-bold text-lg">{data.duration}</p>
              </div>
              <div className="space-y-1">
                 <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Level</p>
                 <p className="text-slate-900 dark:text-white font-bold text-lg">{data.level}</p>
              </div>
              <div className="space-y-1">
                 <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Mode</p>
                 <p className="text-slate-900 dark:text-white font-bold text-lg">Hybrid / Live</p>
              </div>
            </div>
          </div>
          <div className="relative reveal active hidden lg:block">
            <div className="aspect-[4/3] rounded-[48px] overflow-hidden border-[10px] border-slate-50 dark:border-slate-800 shadow-xl transition-transform hover:scale-[1.02] duration-1000">
              <img src={data.modules[0].image} alt="Training" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tech Stack */}
      <section className="py-12 px-6 sm:px-12 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 reveal">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-400 font-bold">Enterprise Tools</h2>
              <h3 className="text-4xl sm:text-6xl font-display font-bold italic tracking-tighter">Technology Stack.</h3>
            </div>
            <p className="text-slate-400 text-lg font-light max-w-md border-l-4 border-teal-500 pl-6">Hover over icons to see technical specifics.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 reveal">
            {data.tools.map((tool, i) => (
              <ToolIcon key={i} tool={tool} name={formatToolName(tool)} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Curriculum */}
      <section className="py-12 px-6 sm:px-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 reveal">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold mb-3">Syllabus Highlights</h2>
            <h3 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white italic tracking-tighter">Course Path.</h3>
            <div className="h-1 w-16 bg-teal-500 mt-6" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {data.modules.map((mod, idx) => (
              <div key={idx} className="module-reveal group p-6 sm:p-10 rounded-[48px] bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:border-teal-500/30 hover:shadow-xl transition-all duration-700 flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-40 h-36 rounded-[32px] overflow-hidden shadow-lg shrink-0 border-4 border-white dark:border-slate-700 group-hover:scale-105 transition-transform duration-700">
                  <img src={mod.image} alt={mod.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold text-xs shadow-md">{idx + 1}</div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{mod.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-light text-base leading-relaxed">{mod.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Projects */}
      <section className="py-12 px-6 sm:px-12 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 reveal active">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-400 font-bold mb-3">Hands-on Growth</h2>
            <h3 className="text-4xl sm:text-6xl font-display font-bold italic mb-8">Project Roadmap.</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {(['normal', 'mid', 'head', 'realtime'] as const).map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveProjectTab(tab)}
                  className={`px-8 py-4 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all duration-500 ${activeProjectTab === tab ? 'bg-teal-500 text-slate-900 shadow-lg' : 'bg-white/5 text-teal-400 border border-teal-500/20 hover:bg-white/10'}`}
                >
                  {tab === 'head' ? 'Advanced' : tab === 'realtime' ? 'Real-Time' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.projects[activeProjectTab].map((proj, idx) => (
              <div key={idx} className="project-reveal group p-8 rounded-[40px] bg-slate-900 border border-white/5 hover:border-teal-500/30 transition-all duration-700 flex flex-col h-full luxury-hover">
                <div className="flex items-center justify-between mb-6">
                   <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                      {activeProjectTab === 'normal' ? <Terminal className="w-6 h-6" /> : activeProjectTab === 'mid' ? <Cpu className="w-6 h-6" /> : activeProjectTab === 'head' ? <HardDrive className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                   </div>
                   <div className="flex gap-2">
                      {proj.tags.slice(0, 2).map((tag, i) => <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-[8px] font-bold text-teal-400 uppercase tracking-widest">{tag}</span>)}
                   </div>
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-4 italic leading-tight">{proj.title}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-grow">{proj.description}</p>
                <div className="flex items-center gap-3 text-teal-500 font-bold text-[9px] uppercase tracking-widest pt-4 border-t border-white/5">
                   <CheckCircle2 className="w-4 h-4" /> Professional Grade
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Student Reviews with Carousel */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 reveal">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold">Verified Success</h2>
              <h3 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white italic">Graduate Feedback.</h3>
            </div>
            
            <div className="flex items-center gap-4">
               <button 
                  onClick={prevReview} 
                  className="w-14 h-14 rounded-full border-2 border-slate-900 dark:border-teal-500 flex items-center justify-center hover:bg-slate-900 hover:text-white dark:hover:bg-teal-500 dark:hover:text-slate-900 transition-all shadow-xl active:scale-90"
               >
                  <ChevronLeft className="w-6 h-6" />
               </button>
               <button 
                  onClick={nextReview} 
                  className="w-14 h-14 rounded-full border-2 border-slate-900 dark:border-teal-500 flex items-center justify-center hover:bg-slate-900 hover:text-white dark:hover:bg-teal-500 dark:hover:text-slate-900 transition-all shadow-xl active:scale-90"
               >
                  <ChevronRight className="w-6 h-6" />
               </button>
            </div>
          </div>

          <div className="relative">
             <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}>
                {data.reviews.map((rev, idx) => (
                   <div key={idx} className="w-full flex-shrink-0 px-4">
                      <div className="review-reveal p-10 sm:p-14 rounded-[48px] bg-slate-50 dark:bg-slate-800 border-[3px] border-slate-900 dark:border-slate-700 hover:border-teal-500 hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)] transition-all duration-700 group relative">
                        <Quote className="absolute top-8 right-10 w-24 h-24 text-teal-600/5 group-hover:text-teal-600/10 transition-all" />
                        <p className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 italic font-light leading-relaxed mb-12 relative z-10 max-w-4xl">"{rev.comment}"</p>
                        <div className="flex items-center gap-6 border-t-2 border-slate-100 dark:border-slate-700 pt-10">
                          <div className="relative">
                             <img src={rev.image} alt={rev.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-[28px] border-4 border-white dark:border-slate-700 shadow-2xl group-hover:scale-110 transition-transform" />
                             <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white border-2 border-white"><CheckCircle2 className="w-4 h-4" /></div>
                          </div>
                          <div>
                            <h5 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">{rev.name}</h5>
                            <div className="flex items-center gap-4 mt-1">
                               {renderRating(rev.rating)}
                               <span className="text-[10px] uppercase tracking-widest font-bold text-teal-600">Verified Alumnus</span>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                ))}
             </div>
             
             <div className="flex justify-center gap-3 mt-12">
                {data.reviews.map((_, i) => (
                   <button 
                      key={i} 
                      onClick={() => setCurrentReviewIndex(i)}
                      className={`h-2 rounded-full transition-all duration-500 ${currentReviewIndex === i ? 'w-12 bg-teal-500' : 'w-2 bg-slate-200 dark:bg-slate-800 hover:bg-teal-500/50'}`} 
                   />
                ))}
             </div>
          </div>
        </div>
      </section>

      <style>{`
        .reveal.active, .module-reveal.active, .project-reveal.active, .review-reveal.active { opacity: 1; transform: translateY(0) scale(1); }
        .reveal, .module-reveal, .project-reveal, .review-reveal { opacity: 0; transform: translateY(20px) scale(0.98); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
};

const ToolIcon: React.FC<{ tool: string; name: string }> = ({ tool, name }) => {
  const [error, setError] = useState(false);
  return (
    <div className="aspect-square bg-white/5 rounded-[32px] flex flex-col items-center justify-center p-6 hover:bg-white transition-all duration-700 border border-white/5 group shadow-xl relative overflow-hidden">
      {!error ? (
        <img 
          src={`https://cdn.simpleicons.org/${tool}/2dd4bf`} 
          alt={name} 
          onError={() => setError(true)}
          className="w-12 h-12 object-contain filter brightness-150 group-hover:brightness-100 transition-all mb-2" 
        />
      ) : (
        <div className="w-12 h-12 flex items-center justify-center text-teal-500 group-hover:text-teal-600 transition-colors mb-2">
          <HelpCircle className="w-10 h-10" />
        </div>
      )}
      <span className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-[10px] font-bold uppercase tracking-widest text-teal-600 text-center px-2">
        {name}
      </span>
    </div>
  );
};

export default CourseDetail;
