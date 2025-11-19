import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "booz-allen-hamilton",
    companyName: "Booz Allen Hamilton ",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4E0BAQFXBzVcVDSTOQ/company-logo_100_100/company-logo_100_100/0/1737465459820/booz_allen_hamilton_logo?e=1765411200&v=beta&t=1So2aVXlKXECv9Eem8KRWwiC1-gcX1iJ5IttsAK5BCA",
    positions: [
      {
        id: "lead-software-engineer",
        title: "Lead Software Engineer",
        employmentPeriod: {
          start: "04.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Lead sprint planning activities, Program Increments (PIs), and Agile Release Train (ART) ceremonies while collaborating with Product Owners to align technical execution with business objectives supporting critical FBI forensic and investigative systems.
- Design, develop, test, and manage complex application development projects across multi-enclave environments (Unclassified, Secret, and Top Secret) with emphasis on security engineering principles and performance optimization.
- Architect microservices-based solutions using modern full-stack technologies (React, TypeScript), containerization (Docker, Kubernetes) to ensure scalability and seamless integration.
- Designed and implemented a dynamic SQL-based query engine with GraphQL integration, advanced filtering, and data aggregation across multiple databases, achieving sub-second response times through optimized indexing strategies.
- Implement comprehensive DevSecOps practices using GitLab CI/CD pipelines, Infrastructure as Code (Terraform), automated testing frameworks, and security scanning tools deployed to AWS GovCloud environments.
- Built and published enterprise-grade component libraries and internal packages, establishing coding standards, best practices knowledge transfer, and documentation across multiple development teams.
- Participate in technical project milestone reviews and code architecture sessions, providing resource estimation and contributing to all aspects of the software development life cycle.`,
        skills: [
          "TypeScript",
          "React",
          "Angular",
          "GraphQL",
          "Microservices",
          "Docker",
          "Kubernetes",
          "GitLab CI/CD",
          "Terraform",
          "AWS GovCloud",
          "SQL Server",
          "PostgreSQL",
          "SAFe Agile",
          "Security Engineering",
          "Top Secret Clearance",
        ],
        isExpanded: true,
      },
      {
        id: "software-engineer",
        title: "Software Engineer",
        employmentPeriod: {
          start: "10.2023",
          end: "04.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed modular, enterprise-level applications using TypeScript/JavaScript and Angular/React frameworks with extensive SQL database integration, RESTful APIs, and GraphQL supporting government operations.
- Designed distributed system architecture with microservices approach, integrating third-party components and introducing custom capabilities to enable scalable development for mission-critical applications.
- Participated in SAFe Agile ceremonies including sprint planning, PI planning, reviews, and retrospectives while conducting technical requirements analysis, quality assurance, and comprehensive testing strategies.
- Automated operations and maintenance tasks through deployment pipelines and infrastructure-as-code practices using Docker containerization and AWS cloud services.
- Collaborated with cross-functional teams to ensure seamless integration and supported development efforts across multiple security enclaves.`,
        skills: [
          "TypeScript",
          "JavaScript",
          "Angular",
          "React",
          "SQL",
          "RESTful APIs",
          "GraphQL",
          "Microservices",
          "Docker",
          "AWS",
          "SAFe Agile",
          "DevSecOps",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "graham-tech",
    companyName: "Graham-Tech (USSOUTHCOM)",
    positions: [
      {
        id: "software-engineer-graham",
        title: "Software Engineer",
        employmentPeriod: {
          start: "08.2022",
          end: "10.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Designed, developed, tested, and managed mission-critical applications managing U.S. security cooperation funding with strict reliability, audit, and compliance requirements across all phases of the software development life cycle.
- Partnered with stakeholders and Product Owners to gather business requirements, analyze user needs, define technical specifications, and contribute to planning and quality assurance for government systems.
- Developed and maintained applications using C# .NET framework while modifying existing code, supporting legacy Visual Basic systems, and implementing process improvements for database integrations with SQL Server.
- Implemented security engineering protocols and conducted proactive code analysis to identify risks, optimize performance, and ensure compliance with federal security standards and best practices.`,
        skills: [
          "C#",
          ".NET",
          "Visual Basic",
          "SQL Server",
          "Security Engineering",
          "Agile",
          "Government Compliance",
        ],
      },
    ],
  },
  {
    id: "motionpoint",
    companyName: "MotionPoint",
    positions: [
      {
        id: "software-engineer-motionpoint",
        title: "Software Engineer",
        employmentPeriod: {
          start: "03.2022",
          end: "08.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Implemented automated testing solutions using Selenium framework and managed deployment processes to AWS cloud platform, contributing to DevSecOps practices and continuous integration.
- Migrated legacy Subversion repositories to Git-based version control systems, improving development workflow and enabling better collaboration across cross-functional development teams.
- Built Docker-based containerized development environments and created comprehensive documentation, reducing new developer onboarding time by 60% and establishing best practices.
- Participated in all aspects of agile development practices including planning, requirements gathering, testing, and quality assurance for production applications.`,
        skills: [
          "Selenium",
          "AWS",
          "Docker",
          "Git",
          "DevSecOps",
          "CI/CD",
          "Agile",
        ],
      },
    ],
  },
  {
    id: "orange-county",
    companyName: "Orange County Government",
    positions: [
      {
        id: "software-developer-orange",
        title: "Software Developer",
        employmentPeriod: {
          start: "09.2021",
          end: "03.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed and tested a Python-based application for large-scale data processing of storm sewer GIS data, consolidating fragmented datasets into a centralized system for improved data accessibility and analytics.
- Designed and implemented a unified user interface enabling stakeholders to query GIS data and generate automated email communications, integrating custom capabilities for storm sewer information management.
- Automated operations tasks through GIS data processing integration with email automation, streamlining communication workflows for county operations teams.
- Collaborated with cross-functional environmental and infrastructure teams to gather requirements, participate in planning activities, and ensure the application met operational needs throughout the software development life cycle.`,
        skills: [
          "Python",
          "GIS",
          "Data Processing",
          "Automation",
          "Email Integration",
        ],
      },
    ],
  },
  {
    id: "ussouthcom",
    companyName: "USSOUTHCOM",
    positions: [
      {
        id: "system-administrator",
        title: "System Administrator",
        employmentPeriod: {
          start: "01.2021",
          end: "09.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Managed and maintained SharePoint infrastructure supporting military command operations, ensuring 99% uptime and compliance with DoD security standards across government systems.
- Administered user permissions, site configurations, and content organization across multiple SharePoint environments, collaborating with cross-functional operational teams.
- Coordinated with stakeholders to implement site improvements, document libraries, and workflow automations, introducing new capabilities to enhance collaboration and information sharing.
- Automated maintenance tasks and performed regular system audits, security updates, and backup procedures to maintain data integrity and meet government compliance requirements.`,
        skills: [
          "SharePoint",
          "System Administration",
          "DoD Security Standards",
          "Automation",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "ucf",
        title: "University of Central Florida",
        employmentPeriod: {
          start: "08.2018",
          end: "08.2022",
        },
        icon: "education",
        description: `- Bachelor of Science in Information Technology
- CompTIA Security+ Certified
- Focus on software development, security, and information systems`,
        skills: [
          "Information Technology",
          "Software Development",
          "Security",
          "CompTIA Security+",
        ],
      },
    ],
  },
];
