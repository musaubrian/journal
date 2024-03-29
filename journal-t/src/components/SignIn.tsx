import { SignIn } from "@clerk/nextjs";

const Auth = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-2">
      <h1 className="my-2 text-2xl md:text-3xl font-bold">Welcome to OpenJournal</h1>
      <span className="mb-5 text-lg md:text-xl text-gray-700">Unleash Your Thoughts</span>
      <SignIn />
    </div>
  );
};

export default Auth;
