type PaginationProps = {
  totalPages: number;
  currentPage: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  goToNextPage,
  goToPreviousPage,
}: PaginationProps) {
  return (
    <nav
      className="bg-teal-500/20 px-4 py-3 flex flex-col items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-xs lg:text-sm text-gray-700 pb-4">
          Showing <span className="font-medium">{currentPage}</span> of{" "}
          <span className="font-medium">{totalPages}</span> pages
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center sm:justify-end">
        <button
          onClick={goToPreviousPage}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-teal-400/40"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          className="ml-3 relative w-full inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-teal-400/40"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
