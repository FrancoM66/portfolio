import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "enterprise-visitor-management",
    title: "Enterprise Visitor Management System",
    period: {
      start: "06.2025",
    },
    link: "https://www.sombrasol.tech/",
    logo: "/audio/logo/sombrasol.ico",
    skills: [
      "Company Project",
      "TypeScript",
      "SQL Server",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "Hardware Integration",
      "Barcode Scanning",
      "Mobile Responsive",
      "Legacy System Integration",
      "DBF Import",
    ],
    description: `Designed, prototyped, and implemented a comprehensive visitor management platform for [SombraSol](https://www.sombrasol.tech/) deployed across 6+ facilities, processing 100,000+ registrations with 99.9% uptime.

**Key Features:**

- **Hardware Integration**: Barcode/ID scanners with real-time data validation and automated license parsing
- **Security & Access Control**: JWT authentication with role-based permissions and comprehensive audit trails
- **Legacy System Support**: DBF file imports and bulk data migration for seamless transition
- **Mobile Optimization**: Responsive interface optimized for tablets and mobile devices, improving field operations efficiency by 35%
- **High Availability**: Enterprise-grade reliability with 99.9% uptime across multiple facilities

**Technical Achievements:**

- Processed 100,000+ visitor registrations
- Deployed across 6+ facilities
- 35% improvement in field operations efficiency
- Comprehensive security compliance with audit trails`,
    isExpanded: true,
  },
  {
    id: "Dynamic SQL Query Engine",
    title: "Dynamic SQL Query Engine",
    period: {
      start: "10.2023",
    },
    skills: [
      "React",
      "TypeScript",
      "GraphQL",
      "Microservices",
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
      "Terraform",
      "AWS GovCloud",
      "Multi-Enclave Architecture",
      "Security Engineering",
    ],
    description: `Lead development of mission-critical applications supporting operations across multi-enclave environments (Unclassified, Secret, Top Secret).

**Key Contributions:**

- **Dynamic Query Engine**: Built SQL-based query engine with GraphQL integration achieving sub-second response times
- **Microservices Architecture**: Designed scalable microservices using React, TypeScript, Docker, and Kubernetes
- **DevSecOps Pipeline**: Implemented comprehensive CI/CD with GitLab, Terraform, and AWS GovCloud
- **Component Libraries**: Published enterprise-grade libraries establishing coding standards across teams
- **Security Engineering**: Ensured compliance with government security standards across multiple enclaves

**Technical Leadership:**

- Led SAFe Agile ceremonies (PI Planning, Sprint Planning, ART)
- Conducted code architecture sessions and technical milestone reviews
- Established best practices and knowledge transfer across development teams`,
  },
  {
    id: "security-cooperation-funding",
    title: "U.S. Security Cooperation Funding System",
    period: {
      start: "08.2022",
      end: "10.2023",
    },
    skills: [
      "C#",
      ".NET",
      "SQL Server",
      "Visual Basic",
      "Security Engineering",
      "Government Compliance",
    ],
    description: `Designed and managed mission-critical applications for U.S. security cooperation funding with strict reliability, audit, and compliance requirements.

**Responsibilities:**

- Developed and maintained C# .NET applications for funding management
- Supported legacy Visual Basic systems and database integrations
- Implemented security engineering protocols and proactive code analysis
- Ensured compliance with federal security standards and best practices`,
  },
  {
    id: "gis-data-processing",
    title: "Storm Sewer GIS Data Processing System",
    period: {
      start: "09.2021",
      end: "03.2022",
    },
    skills: [
      "Python",
      "GIS",
      "Data Processing",
      "Automation",
      "Email Integration",
    ],
    description: `Developed Python-based application for large-scale processing of storm sewer GIS data for Orange County Government.

**Key Features:**

- Consolidated fragmented datasets into centralized system
- Unified UI for querying GIS data and generating automated emails
- Automated communication workflows for county operations teams
- Improved data accessibility and analytics capabilities`,
  },
];
