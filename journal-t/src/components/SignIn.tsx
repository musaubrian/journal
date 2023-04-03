import { SignIn } from "@clerk/nextjs";
import { NextPage } from "next";
import { api } from "~/utils/api";

const Auth: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Auth;
