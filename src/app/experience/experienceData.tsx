export type Experience = {
  title: string;
  company: string;
  dateEmployed: string;
  responsibilities: string[];
};

export const experienceData: Experience[] = [
  {
    title: "Software Engineer",
    company: "Merkle Root",
    dateEmployed: "March 2022 - March 2024",
    responsibilities: [
      "Attended 100+ weekly stand-up meetings across 4 projects, collaborating with 10+ software engineers to receive tasks and instruction for weekly goals and to brainstorm and implement ideas and feedback",
      "Built npcai.studio marketing website showcasing Merkle Root's AI integration products and opening the company to the $184.00bn AI market",
      "Engineered 2 blockchain platforms including an NFT asset bridge between Ethereum and Solana chains and a Twitter clone that stores tweets on chain as NFTs",
    ],
  },
  {
    title: "Engineering Analyst",
    company: "Goldman Sachs",
    dateEmployed: "Oct 2019 - Jan 2022",
    responsibilities: [
      "Built internal tool using python to consolidate 3 client onboarding platforms and automate related reports",
      "Gathered user requirements, and built and maintained code for the tool, saving employees 100 monthly hours in labor",
      "Tested software for bugs and onboarding speed, fixing bugs and documenting processes to increase efficiency by 80%",
      "Analyzed 2,000+ code-related issues and defects",
    ],
  },
  {
    title: "Systems Administrator",
    company: "Medicenter",
    dateEmployed: "May 2019 - October 2019",
    responsibilities: [
      "Standardized 15 job tasks and trained junior team members on industry best practices and standards",
      "Implemented corrective plans of action for employee performance issues to improve efficiency by 17%",
      "Analyzed latest technology innovations and made recommendations regarding infrastructure overhauls to reduce costs by 13%",
    ],
  },
  {
    title: "Support Technician I",
    company: "Henry Schein Practice Solutions",
    dateEmployed: "August 2016 - May 2019",
    responsibilities: [
      "Reduced the average time to resolution by 19% by triaging incoming calls and escalating if necessary",
      "Maintained a professional, friendly, understanding demeanor with customers, receiving 100+ positive customer reviews and reducing the likelihood of negative reviews by 60%",
      "Earned 100% performance ratings for listening, communication, and problem-solving skills",
    ],
  },
  {
    title: "Lead Developer",
    company: "SunEdison",
    dateEmployed: "May 2015 - May 2016",
    responsibilities: [
      "Developed in-house web app using C#, AJAX, XML, and HTML/CSS, that allowed 3 divisions to view and manage productivity reports",
      "Gathered user requirements, and built and maintained code for the tool, saving employees 14 monthly hours in labor in report generation and increasing sales efficiency by 6%",
    ],
  },
];
