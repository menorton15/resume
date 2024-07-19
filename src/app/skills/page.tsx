import Link from "next/link";

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

export default async function Home() {
  //const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  //void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-top">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <Skills />
        </div>
      </main>
    </HydrateClient>
  );
}
