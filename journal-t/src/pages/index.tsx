import { type NextPage } from "next";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Head from "next/head";
import Auth from "~/components/SignIn";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";
import Link from "next/link";

const Home: NextPage = () => {
  const { data } = api.journal.getUsersEntries.useQuery();
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
        <div className="my-5 flex w-full flex-col items-center justify-center">
          {data?.map((note) => (
            <div
              key={note.id}
              className="my-3 w-5/6 rounded-md bg-slate-200 p-3 shadow-sm md:w-3/6"
            >
              <h1 className="my-2 text-center text-xl font-semibold capitalize underline">
                {note.title ?? "nothing here yet"}
              </h1>
              <p className="p-2 text-justify text-lg">{note.content}</p>
              <div className="inline-flex w-5/6 items-center justify-end text-gray-700">
                <span>
                  {note.tag?.includes("#") ? note.tag : `#${note.tag}`}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 right-0 mb-5 w-full justify-end">
          <Link
            href="/new"
            className="inline-flex justify-end rounded-full bg-blue-600 px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Link>
        </div>
      </SignedIn>
      <SignedOut>
        <Auth />
      </SignedOut>
    </>
  );
};

export default Home;
