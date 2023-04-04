import Head from "next/head";
import NavBar from "./NavBar";
import type { ReactNode } from "react";
import { SignedIn } from "@clerk/nextjs";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>OpenJournal</title>
        <meta name="description" content="Let your thoughts free" />
      </Head>
      <SignedIn>
        <NavBar />
      </SignedIn>

      <main>{children}</main>
    </>
  );
};

export default Layout;
