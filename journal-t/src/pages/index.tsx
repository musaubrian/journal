import { type NextPage } from "next";
import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Head from "next/head";
import Auth from "~/components/SignIn";

const { isLoaded, user } = useUser();
if (isLoaded) {
  console.log(user?.firstName, user?.id);
}

const Home: NextPage = () => {
  return (
    <>
      <SignedIn>
        <Head>
          <title>Journal | SignIn</title>
        </Head>
        <nav className="inline-flex w-full items-center justify-end p-3">
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
