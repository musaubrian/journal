import { SignIn, SignedIn, useUser } from "@clerk/nextjs";
import { NextPage } from "next";
import React, { useState } from "react";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";

const NewEntry: NextPage = () => {
  const { mutate } = api.journal.new.useMutation();
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ title, tag, content });
  };

  const { isLoaded } = useUser();
  if (!isLoaded) {
    return <SignIn />;
  }

  return (
    <>
      <NavBar />

      <SignedIn>
        <div className="flex w-full items-center justify-center px-3 py-10 text-lg">
          <form
            onSubmit={handleSubmit}
            className="flex h-full w-full flex-col items-center justify-center rounded-md bg-slate-100 sm:h-full md:w-5/6"
          >
            <h1 className="my-5 text-2xl font-bold text-gray-900">
              Express yourself
            </h1>
            <label className="my-2 inline-flex w-5/6 items-center justify-start font-semibold text-gray-700 md:w-4/6">
              Title:
            </label>
            <input
              type="text"
              className="mb-4 w-5/6 rounded-md bg-slate-50 p-4 shadow-md md:w-4/6"
              placeholder="Title goes here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className=" my-2 inline-flex w-5/6 items-center justify-start font-semibold text-gray-700 md:w-4/6">
              Tags:
            </label>
            <input
              type="text"
              className="mb-4 w-5/6 rounded-md bg-slate-50 p-4 shadow-md md:w-4/6"
              placeholder="#tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <label className=" my-2 inline-flex w-5/6 items-center justify-start font-semibold text-gray-700 md:w-4/6">
              Entry:
            </label>
            <textarea
              className="mb-4 h-52 w-5/6 rounded-lg bg-slate-50 p-4 shadow-md md:h-48 md:w-4/6"
              placeholder="Dear diary..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button className="mb-5 rounded-md bg-blue-400 p-3 text-xl font-semibold">
              Add entry
            </button>
          </form>
        </div>
      </SignedIn>
    </>
  );
};

export default NewEntry;
