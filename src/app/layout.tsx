import "~/styles/globals.css";
import { Navbar } from "./_components/navbar";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Matthew Norton | Software Engineer",
  description: "A professional and experienced software developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <header className="mt-5">
          <Navbar></Navbar>
        </header>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
