import { type NextPage } from "next";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Auth from "~/components/SignIn";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data } = api.journal.getAll.useQuery();
  return (
    <>
      <SignedIn>
        <Head>
          <title>OpenJournal</title>
          <meta
            name="description"
            content="easily jot down your thoughts securely"
          />
        </Head>
        <NavBar />
        <div>
          {data?.map((note) => (
            <div key={note.id}>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </SignedIn>
      <SignedOut>
        <Auth />
      </SignedOut>
    </>
  );
};

export default Home;
