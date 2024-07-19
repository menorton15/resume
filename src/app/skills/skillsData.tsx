import type { CardData } from "../_components/cardData";

export const cardData: CardData[] = [
  {
    headline: 'Object-Oriented',
    panelOne: {
      content: ["C#", "C++", "Java"]
    },
    animationStart: true,
    animation: "images/Illustration-Personality.json",
    alt: 'OOP',
    logoImg: 'oop.svg',
    textSplit: false,
    descTransition: {
      rootMargin: '40px',
    },
  },
  {
    headline: 'Frontend',
    panelOne: {
      content: ["HTML", "CSS", "JavaScript", "React", "Next"]
    },
    animationStart: false,
    animation: "images/Illustration-Personality.json",
    alt: 'Frontend',
    logoImg: 'frontend.svg',
    textSplit: false,
    descTransition: {
      rootMargin: '40px',
    },
  },
  {
    headline: 'Backend',
    panelOne: {
      content: ["PHP", "Python", "Golang", "Elixir", "NodeJS"]
    },
    animationStart: true,
    animation: "images/Illustration-Quest.json",
    alt: 'Backend',
    logoImg: 'backend.svg',
    textSplit: false,
    descTransition: {
      rootMargin: '40px',
      animation: '',
      reverse: 'animate-out fade-out slide-out-from-right-16 duration-700'
    },
  },
  {
    headline: 'Database',
    panelOne: {
      content: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    animationStart: false,
    animation: "images/Illustration-Levels.json",
    alt: 'Database',
    logoImg: 'database.svg',
    textSplit: false,
    descTransition: {
      rootMargin: '40px',
    },
  },
  {
    headline: 'Web3',
    panelOne: {
      content: ["Solidity", "Ethereum", "Solana"]
    },
    animationStart: true,
    animation: "images/Illustration-Levels.json",
    alt: 'Web3',
    logoImg: 'web3.svg',
    textSplit: false,
    descTransition: {
      rootMargin: '40px',
    },
  },
  {
    headline: 'Game Dev',
    panelOne: {
      content: ["Unity", "Unreal"]
    },
    animationStart: false,
    animation: "images/Illustration-Levels.json",
    alt: 'Game Development',
    logoImg: 'gamedev.svg',
    textSplit: false,
    descTransition: {
      rootMargin: '40px',
    },
  }
];
