export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank.png",
    InitialContent: ""
  },
  {
    id: "software-proposal",
    label: "Software dev proposal",
    imageUrl: "/software-proposal-2.png",
    InitialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>We propose the development of a scalable and secure web application designed to streamline workflow and improve productivity.</p>
      <h2>Objectives</h2>
      <ul>
        <li>Build a responsive web platform.</li>
        <li>Implement secure user authentication.</li>
        <li>Provide real-time collaboration features.</li>
      </ul>
      <h2>Timeline</h2>
      <ul>
        <li><strong>Phase 1:</strong> Requirement Analysis - 2 weeks</li>
        <li><strong>Phase 2:</strong> MVP Development - 6 weeks</li>
        <li><strong>Phase 3:</strong> Testing & Deployment - 2 weeks</li>
      </ul>
      <h2>Budget Estimate</h2>
      <ul>
        <li>Development: $15,000</li>
        <li>Testing & QA: $3,000</li>
        <li>Deployment & Support: $2,000</li>
      </ul>
      <h2>Contact</h2>
      <p>For questions or clarifications, please contact</p>
      <p><strong>John Doe</strong><br>Email: john@example.com<br>Phone: +1-234-567-8900</p>
    `
  },
  {
    id: "project-proposal",
    label: "Project dev proposal",
    imageUrl: "/software-proposal.png",
    InitialContent: `
      <h1>Project Development Proposal</h1>
      <h2>Introduction</h2>
      <p>This proposal outlines the strategy and plan for executing the <em>[Project Name]</em> from inception to delivery.</p>
      <h2>Goals</h2>
      <ul>
        <li>Achieve X, Y, Z objectives within the planned time and budget.</li>
        <li>Deliver a quality solution to stakeholders.</li>
      </ul>
      <h2>Deliverables</h2>
      <ul>
        <li>Requirement Document</li>
        <li>Functional Prototype</li>
        <li>Final Product with Documentation</li>
      </ul>
      <h2>Timeline</h2>
      <ul>
        <li>Kick-off: July 1</li>
        <li>Milestone 1: August 15</li>
        <li>Final Delivery: October 30</li>
      </ul>
      <h2>Team</h2>
      <ul>
        <li>Project Manager: Jane Smith</li>
        <li>Lead Developer: Alex Johnson</li>
      </ul>
      <h2>Approval</h2>
      <p>Please sign below to approve the project kickoff.</p>
      <p>Signature: ___________________________</p>
    `
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.png",
    InitialContent: `
      <p><strong>[Your Company Name]</strong><br>
      [Your Address]<br>
      [City, State ZIP Code]<br>
      [Email Address]<br>
      [Date]</p>

      <p><strong>[Recipient Name]</strong><br>
      [Recipient Title]<br>
      [Company Name]<br>
      [Company Address]<br>
      [City, State ZIP Code]</p>

      <p>Dear [Recipient Name],</p>

      <p>I am writing to formally [state purpose — e.g., introduce our new services, discuss partnership, etc.].</p>

      <p>[Body of the letter — keep it professional and concise.]</p>

      <p>Thank you for your time and consideration. Please feel free to reach out to me for any additional information.</p>

      <p>Sincerely,<br><strong>[Your Name]</strong><br>[Your Title]<br>[Your Contact Information]</p>
    `
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.png",
    InitialContent: `
      <h1>John Doe</h1>
      <p><strong>Email:</strong> john.doe@example.com | <strong>Phone:</strong> +1-234-567-8901<br>
      <strong>LinkedIn:</strong> linkedin.com/in/johndoe | <strong>GitHub:</strong> github.com/johndoe</p>

      <h2>Summary</h2>
      <p>Results-driven software engineer with 3+ years of experience building scalable web applications using React, Node.js, and MongoDB.</p>

      <h2>Experience</h2>
      <p><strong>Frontend Developer</strong> – XYZ Corp (2022–Present)</p>
      <ul>
        <li>Built and maintained large-scale React applications</li>
        <li>Improved page load performance by 30%</li>
      </ul>

      <p><strong>Web Developer Intern</strong> – ABC Ltd (2021–2022)</p>
      <ul>
        <li>Assisted in developing internal dashboard tools</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>JavaScript, TypeScript, React, Node.js</li>
        <li>REST APIs, MongoDB, Git</li>
      </ul>

      <h2>Education</h2>
      <p><strong>B.Tech in Computer Science</strong> – University of Somewhere (2017–2021)</p>
    `
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.png",
    InitialContent: `
      <p><strong>John Doe</strong><br>
      john.doe@example.com | +1-234-567-8901<br>
      [Date]</p>

      <p><strong>Hiring Manager</strong><br>
      [Company Name]<br>
      [Company Address]</p>

      <p>Dear Hiring Manager,</p>

      <p>I am excited to apply for the <strong>[Job Title]</strong> role at <strong>[Company Name]</strong>, as advertised on [Job Board/Company Website].</p>

      <p>With a background in software development and hands-on experience in building modern web apps, I believe I can make a meaningful contribution to your team.</p>

      <p>I am particularly impressed by your company’s commitment to innovation and quality, and I look forward to the opportunity to bring my skills in React and Node.js to your projects.</p>

      <p>Thank you for considering my application. I hope to speak with you soon.</p>

      <p>Sincerely,<br><strong>John Doe</strong></p>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letterhead.png",
    InitialContent: `
      <p>[Your Name]<br>
      [Your Address]<br>
      [City, State ZIP Code]<br>
      [Email Address]<br>
      [Date]</p>

      <p>Dear [Recipient Name],</p>

      <p>I hope this letter finds you well.</p>

      <p>[Your message goes here. You can write a personal, formal, or semi-formal message depending on the purpose.]</p>

      <p>Looking forward to hearing from you.</p>

      <p>Best regards,<br>[Your Name]</p>
    `
  }
];
