import { type NextPage } from "next";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Head from "next/head";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";
import Link from "next/link";
import Auth from "~/components/SignIn";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { data } = api.journal.getUsersEntries.useQuery();
  const { mutate } = api.journal.deleteEntry.useMutation();
  const deleteEntry = (postID: string) => {
    mutate({ id: postID });
    setTimeout(() => {
      toast.success("Deleted entry successfully!", { position: "top-left" });
      router.reload();
    }, 2500);
  };
  return (
    <>
      <SignedIn>
        <Head>
          <title>OpenJournal</title>
          <meta name="description" content="Let your thoughts free" />
        </Head>
        <NavBar />
        <div className="my-5 flex w-full flex-col items-center justify-center">
          {data && data.length > 1 ? (
            data?.map((note) => (
              <div
                key={note.id}
                className="my-3 w-5/6 rounded-md bg-slate-200 p-3 shadow-sm md:w-3/6"
              >
                <h1 className="my-2 text-center text-xl font-semibold capitalize underline">
                  {note.title}
                </h1>
                <p className="p-2 text-justify text-lg">{note.content}</p>
                <div className="inline-flex w-5/6 items-center justify-end text-gray-700">
                  <span>{note.tag && note.tag}</span>
                  <button onClick={() => deleteEntry(note.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mx-5 h-5 w-5 text-orange-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="my-3 flex w-5/6 flex-col items-center justify-center rounded-md bg-slate-200 p-3 shadow-sm md:w-3/6">
              <h1 className="my-2 text-center text-xl font-semibold capitalize">
                Nothing here yet
              </h1>
              <span className="my-4 inline-flex w-3/6 items-center justify-center rounded-md bg-blue-400 p-3">
                <Link href="/new">Write sth?</Link>
              </span>
            </div>
          )}
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
