import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSubmit,
}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    onSubmit(input.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  console.log(value, "there is");

  return (
    <form className="w-full mx-auto" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            name="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-l-lg bg-gray-50 border border-gray-300  dark:border-gray-400 rounded-lg dark:placeholder-gray-400 dark:focus:border-gray-500 outline-none"
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            value={value}
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white rounded-r-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-400 dark:hover:bg-gray-700"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
