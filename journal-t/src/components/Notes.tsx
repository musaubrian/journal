import {type Entry } from "@prisma/client";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

interface INotes {
  notes: Entry[];
}
const Notes = ({ notes }: INotes) => {
  const router = useRouter();
  const { mutate } = api.journal.deleteEntry.useMutation();
  const deleteEntry = (postID: string) => {
    mutate({ id: postID });
    toast.success("Deleted note successfully!");
    setTimeout(() => {
      router.reload();
    }, 500);
  };

  return (
    <>
      {notes && notes.length > 0 ? (
        notes?.map((note) => (
          <div
            key={note.id}
            className="my-3 w-5/6 rounded-md bg-slate-200 p-3 shadow-md md:w-3/6"
          >
            <h1 className="my-2 text-center text-2xl font-bold capitalize">
              {note.title}
            </h1>

            <span className="inline-flex w-full items-center justify-center text-sm text-gray-500">
              {dayjs(note.createdAt).format("MMM DD, YYYY hh:mm A")}
            </span>
            <span className="inline-flex w-full items-center justify-center text-sm text-gray-600">
              {dayjs(note.createdAt).format("dddd")}
            </span>
            <p className="p-2 text-justify text-lg">{note.content}</p>
            <div className="my-2 inline-flex w-5/6 items-center justify-end text-gray-700">
              <span>{note.tag && `#${note.tag}`}</span>
              <button onClick={() => deleteEntry(note.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mx-5 h-5 w-5  text-red-500 transition-all hover:text-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="my-3 flex w-5/6 flex-col items-center justify-center rounded-md bg-slate-200 p-3 shadow-md md:w-3/6">
          <h1 className="my-2 text-center text-xl font-semibold capitalize">
            Nothing here yet
          </h1>
          <Link
            href="/new"
            className="my-4 inline-flex w-3/6 items-center justify-center rounded-md bg-blue-300 p-3"
          >
            Write sth?
          </Link>
        </div>
      )}
    </>
  );
};

export default Notes;
