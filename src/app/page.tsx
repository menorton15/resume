import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Image from "next/image";

import Header from "../app/_components/Header";
import Contact from "../app/_components/Contact";
import Education from "../app/_components/Education";
import Skills from "../app/_components/Skills";
import CareerObjective from "../app/_components/CareerObjective";
import WorkExperience from "../app/_components/WorkExperience";
import Projects from "../app/_components/Projects";
import { Navbar } from "./_components/navbar";

export default async function Home() {
  //const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  //void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="justify-top flex min-h-screen flex-col items-center">
        <div className="container flex w-3/4 flex-col items-center justify-center gap-12 px-4 py-16">
          <Header />
          <div className="my-16 flex lg:flex-row sm:flex-col w-full rounded-full items-center">
            <Image
              className="rounded-full max-sm:w-100 max-sm:h-100"
              src={"/profile.JPG"}
              alt={"profile"}
              width={500}
              height={500}
            />
            <div className="lg:mx-16 flex w-full flex-col items-center text-white">
              <h3 className="text-xl my-16 text-center">About Me</h3>
              <p className="my-5">
                Hi, I&apos;m Matthew Norton, a skilled Software Engineer with
                extensive experience in software development. My
                expertise spans across multiple programming languages and
                technologies, including Python, Golang, C#, C++,
                JavaScript, React, and various databases. I have a strong
                background in developing web3 and blockchain platforms, internal tools,
                and web applications.
              </p>
              <p className="my-5">
                With a solid foundation in Software Engineering from Brigham
                Young University Idaho, coupled with an Associate of Applied
                Sciences in Business Administration from Provo College, I have
                honed my technical skills and understanding of business
                processes. I am passionate about solving complex problems and
                continuously learning new technologies to stay ahead in the
                ever-evolving tech landscape.
              </p>
              <p className="my-5">
                Throughout my career, I have collaborated with talented teams at
                Merkle Root, Goldman Sachs, and other organizations to deliver
                high-quality software solutions. I have a proven track record of
                improving efficiency, reducing costs, and enhancing user
                experiences through innovative software engineering practices.
              </p>
              <p className="my-5">
                When I&apos;m not coding, I enjoy exploring the latest advancements
                in technology, contributing to open-source projects, and
                engaging with the tech community. I am currently seeking a
                remote role where I can leverage my diverse skill set to build
                professional-grade applications and drive impactful results.
              </p>
              </div>
          </div>
        </div>
        <p className="my-5 mb-14 text-white"><a className="underline" href={"/skills"}>Click here</a> for a full list of my skills.</p>
            
      </main>
    </HydrateClient>
  );
}
