import { useState, useMemo } from "react";

export const usePagination = <T>(items: T[], itemsPerPage: number = 5) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = useMemo<number>(() => {
    return Math.ceil(items.length / itemsPerPage);
  }, [items, itemsPerPage]);

  const currentItems = useMemo<T[]>(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  };
};
