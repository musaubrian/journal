import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Auth from "~/components/SignIn";
import { api } from "~/utils/api";

const NewEntry: NextPage = () => {
  const router = useRouter();

  const user = useUser();

  const { mutate } = api.journal.new.useMutation();
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [isUploading, setUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setUploading(true);
    e.preventDefault();
    mutate({ title, tag, content });
    setTimeout(() => {
      toast.success("Uploaded note successfully!!");
      void router.push("/");
      setUploading(false);
    }, 1500);
  };

  return (
    <>
      <SignedIn>
        <div className="flex w-full items-center justify-center px-3 py-10 text-lg">
          <form
            onSubmit={handleSubmit}
            className="flex h-full w-full flex-col items-center justify-center rounded-md bg-slate-100 px-4 sm:h-full md:w-5/6"
          >
            <h1 className="my-5 text-2xl font-semibold text-gray-900">
              What will it be{" "}
              <span className="font-bold text-gray-700 ">
                {user && user ? user.user?.firstName : `stranger`}
              </span>
            </h1>
            <label className="my-2 inline-flex w-full items-center justify-start font-semibold text-gray-700 md:w-4/6">
              Title:
            </label>
            <input
              type="text"
              className="mb-4 w-full rounded-md bg-slate-50 p-4 shadow-md outline-none md:w-4/6"
              placeholder="Note to self"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className=" my-2 inline-flex w-full items-center justify-start font-semibold text-gray-700 md:w-4/6">
              Tag:
            </label>
            <input
              type="text"
              className="mb-4 w-full rounded-md bg-slate-50 p-4 shadow-md outline-none md:w-4/6"
              placeholder="#noice"
              required
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <label className=" my-2 inline-flex w-full items-center justify-start font-semibold text-gray-700 md:w-4/6">
              Note:
            </label>
            <textarea
              className="mb-4 h-52 w-full rounded-lg bg-slate-50 p-4 shadow-md outline-none md:h-48 md:w-4/6"
              placeholder="What would you like to say?"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            {!isUploading ? (
              <button
                type="submit"
                className="mb-5 rounded-md bg-blue-400 p-3 text-xl"
              >
                Add note
              </button>
            ) : (
              <button
                disabled
                className="mb-5 rounded-md bg-blue-400 p-3 text-xl"
              >
                Uploading...
              </button>
            )}
          </form>
        </div>
      </SignedIn>
      <SignedOut>
        <Auth />
      </SignedOut>
    </>
  );
};

export default NewEntry;
