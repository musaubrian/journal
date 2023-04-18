import React from "react";

interface Isearch {
  searchValue: string;
  onChange: (newValue: string) => void;
}

const SearchTag = ({ searchValue, onChange }: Isearch) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="mb-2 inline-flex w-5/6 items-center justify-center rounded-full bg-slate-100 text-lg text-gray-700 shadow-xl md:w-2/6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.0}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="search"
        name=""
        id=""
        className="w-5/6 bg-transparent p-3 text-lg outline-none"
        placeholder="Search using tag"
        value={searchValue.toLowerCase()}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchTag;
