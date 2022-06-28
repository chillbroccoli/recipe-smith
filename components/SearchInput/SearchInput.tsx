import { Search } from "tabler-icons-react";

export default function SearchInput() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="search-query"
          id="search-query"
          className="focus:ring-teal-500 focus:border-teal-500 block w-full py-2 px-4 pr-10 bg-gray-200 border-gray-300 text-sm rounded-md"
          placeholder="List of ingredients separated by commas..."
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
