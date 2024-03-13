import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";

interface SearchProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearchInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = useCallback(() => {
    setSearchInput(inputValue);
  }, [setSearchInput, inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex  gap-x-2">
      <div className="flex shadow-lg py-2 px-4 w-[350px] mb-5 gap-x-3 bg-neutral-700 rounded-3xl">
        <FaSearch size={20} />
        <input
          type="text"
          placeholder="Enter your movie"
          className="bg-transparent outline-none border-none text-white"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <Button
        className="w-[130px] h-[42px] rounded-2xl bg-green-700"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
