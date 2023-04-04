import Head from "next/head";
import NavBar from "./NavBar";
import type { ReactNode } from "react";

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
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
