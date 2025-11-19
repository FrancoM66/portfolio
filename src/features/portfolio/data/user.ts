import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Francisco",
  lastName: "Morales",
  displayName: "Francisco Morales",
  username: "FrancoM66",
  gender: "male",
  pronouns: "he/him",
  bio: "Lead Software Engineer specializing in full-stack development and security engineering.",
  flipSentences: [
    "Lead Software Engineer @ Booz Allen Hamilton",
    "Full-Stack Developer",
    "Security Engineering Specialist",
  ],
  address: "Washington, D.C.",
  phoneNumber: "Nzg2OTE0NzUyOA==", // E.164 format, base64 encoded (786-914-7528)
  email: "Zm1vcmFsZXM5MTcyQGdtYWlsLmNvbQ==", // base64 encoded (fmorales9172@gmail.com)
  website: "https://github.com/FrancoM66",
  jobTitle: "Lead Software Engineer",
  jobs: [
    {
      title: "Lead Software Engineer",
      company: "Booz Allen Hamilton",
      website: "https://www.boozallen.com",
    },
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
- **Lead Software Engineer** at **Booz Allen Hamilton** with **Top Secret Clearance**
- **3+ years of experience** building enterprise-level applications for government and defense sectors
- Expertise in **C#/.NET**, **TypeScript**, **React**, **Angular**, and modern full-stack technologies
- Specialized in **DevSecOps**, **microservices architecture**, and **multi-enclave environments** (Unclassified, Secret, Top Secret)
- Strong background in **security engineering**, **database optimization**, and **CI/CD pipelines**
- Led development of enterprise visitor management system processing **100,000+ registrations** with **99.9% uptime**
- Proficient in **SAFe Agile** methodologies, Program Increments (PI), and Agile Release Train (ART) ceremonies
- Built dynamic SQL-based query engines achieving **sub-second response times** through optimized indexing
- Published enterprise-grade component libraries and established coding standards across multiple teams
`,
  avatar: "/audio/franco2.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1763205174",
  namePronunciationUrl: "/audio/Francisco_Morales.mp3",
  timeZone: "America/New_York",
  keywords: [
    "Francisco Morales",
    "FrancoM66",
    "Lead Software Engineer",
    "Booz Allen Hamilton",
    "Software Engineer",
    "Top Secret Clearance",
    "Full Stack Developer",
    "DevSecOps",
    "TypeScript Developer",
    "React Developer",
    "C# .NET Developer",
  ],
  dateCreated: "2025-01-19", // YYYY-MM-DD
};
