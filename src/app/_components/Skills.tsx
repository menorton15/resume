"use client";

import Image from "next/image";
import { cardData } from "../skills/skillsData";
import { Card } from "./card";
import Link from "next/link";

const skillset = [
  "Python",
  "XML",
  "Redux",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Blockchain",
  "Golang",
  "Solidity",
  "Elixir",
  "Unreal",
  "Unity",
  "Agile",
];
const oop = ["C#", "C++,", "Java"];
const frontend = ["HTML", "CSS", "JavaScript", "React", "Next"];
const backend = ["PHP", "Python", "Golang", "Elixir", "NodeJS"];
const database = ["MySQL", "PostgreSQL", "MongoDB"];
const web3 = ["Solidity", "Ethereum", "Solana"];
const gamedev = ["Unity", "Unreal"];

const Skills = () => (
  <div className="skill-wrapper w-full">
    <h3 className="mb-40 text-center text-white lg:text-5xl md:text-3xl landscape:md:text-5xl sm:text-2xl">Skills</h3>
    {cardData.map((datum, index) => (
      <Card {...datum} key={index} />
    ))}
    <div className="mb-8 mt-[1px] flex w-4/5 py-2 max-sm:flex-col"></div>
    <div>
      <p className="text-center text-lg text-gray-300">
        Code examples can be found at{" "}
        <a
          className="underline"
          href={"https://github.com/menorton15"}
          target="_blank"
        >
          github.com/menorton15
        </a>{" "}
        and{" "}
        <a
          className="underline"
          href={"https://codepen.io/menorton15"}
          target="_blank"
        >
          codepen.io/menorton15
        </a>
      </p>
    </div>
    <div>
      <p className="text-center text-white mt-10">
        *Don&apos;t see a skill you&apos;re looking for?  I am a fast learner, so <Link className="underline" href={"/contact"}>contact me</Link> with details of your project to get a proposal.
      </p>
    </div>
  </div>
);

export default Skills;
