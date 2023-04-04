import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="static left-0 top-0 inline-flex w-full items-center justify-end p-3  shadow-md backdrop-blur-md">
        <Link
          href="/"
          className="inline-flex w-3/6 items-center justify-start p-2 text-xl font-bold"
        >
          OpenJournal
        </Link>
        <ul className="ml-5 inline-flex w-3/6 items-center justify-end">
          <li className="hidden rounded-md bg-blue-300 px-4 py-2 md:inline-block">
            <Link href="/new">Write</Link>
          </li>
          <li className="px-2 md:px-4">
            <UserButton />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
