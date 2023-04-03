import { type NextPage } from "next";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import Auth from "~/components/SignIn";

const Home: NextPage = () => {
  return (
    <>
      <SignedIn>
        <Head>
          <title>Journal | SignIn</title>
        </Head>
        <nav className="static top-0 inline-flex w-full items-center justify-end p-3 backdrop-blur-md">
          <ul className="ml-5 inline-flex w-3/6 items-end justify-end">
            <li>
              <UserButton />
            </li>
          </ul>
        </nav>
      </SignedIn>
      <SignedOut>
        <Auth />
      </SignedOut>
    </>
  );
};

export default Home;
