import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import Header from "../../app/_components/Header";
import Contact from "../../app/_components/Contact";
import Education from "../../app/_components/Education";
import Skills from "../../app/_components/Skills";
import CareerObjective from "../../app/_components/CareerObjective";
import WorkExperience from "../../app/_components/WorkExperience";
import Projects from "../../app/_components/Projects";
import { Navbar } from "./../_components/navbar";
import ContactForm from "../_components/ContactForm";
import { experienceData } from "./experienceData";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="justify-top flex min-h-screen flex-col items-center">
        <div className="container flex w-full flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="mb-20 text-center text-white lg:text-5xl md:text-3xl landscape:md:text-5xl sm:text-2xl">Work Experience</h1>
          <WorkExperience experience={experienceData} />
          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}
