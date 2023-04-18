import { type NextPage } from "next";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { api } from "~/utils/api";
import Link from "next/link";
import Auth from "~/components/SignIn";
import Loading from "~/components/Spinner";
import { useState } from "react";
import {type Entry } from "@prisma/client";
import Notes from "~/components/Notes";
import SearchTag from "~/components/Search";

const Home: NextPage = () => {
  const { data } = api.journal.getUsersEntries.useQuery();

  const [search, setSearch] = useState("");

  const filterNotes = (unfiltered: Entry[], tag: string) => {
    if (tag === "") return unfiltered;
    const filteredData = unfiltered.filter((note) => note.tag === tag);
    return filteredData;
  };

  if (!data) {
    return (
      <>
        <SignedIn>
          <Loading />
        </SignedIn>
        <SignedOut>
          <Auth />
        </SignedOut>
      </>
    );
  }

  return (
    <>
      <SignedIn>
        <div className="mb-20 mt-5 flex w-full flex-col items-center justify-center">
          <SearchTag
            searchValue={search}
            onChange={(newValue) => {
              setSearch(newValue);
            }}
          />
          <Notes notes={filterNotes(data, search)} />
        </div>
        <div className="fixed bottom-5 right-4 mb-5 inline-flex h-10 w-full justify-end px-3 md:hidden">
          <Link
            href="/new"
            className="inline-flex items-center justify-end rounded-full bg-blue-500 px-3 py-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-6 w-6 text-gray-50"
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
