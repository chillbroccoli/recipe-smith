import { useState } from "react";

export default function usePagination<T>({
  items,
  itemsPerPage,
}: {
  items: T[];
  itemsPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items?.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < Math.ceil(items?.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    currentItems,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  };
}
