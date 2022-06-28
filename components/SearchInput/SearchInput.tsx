import React from "react";
import { Search } from "tabler-icons-react";

type SearchInputProps = {
  searchQuery: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
};

export default function SearchInput({
  searchQuery,
  handleSearchChange,
  handleSubmit,
}: SearchInputProps) {
  return (
    <div className="w-full">
      <div className="mt-1 relative rounded-md shadow-sm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search-query"
            id="search-query"
            className="focus:ring-teal-500 focus:border-teal-500 block w-full py-2 px-4 pr-10 bg-gray-200 border-gray-300 text-sm rounded-md"
            placeholder="List of ingredients separated by commas..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </form>
      </div>
    </div>
  );
}
