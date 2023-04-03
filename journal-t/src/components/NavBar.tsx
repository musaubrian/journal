import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <>
      <nav className="static top-0 inline-flex w-full items-center justify-end border-b-2 p-3 shadow-sm backdrop-blur-md">
        <ul className="ml-5 inline-flex w-3/6 items-end justify-end">
          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
