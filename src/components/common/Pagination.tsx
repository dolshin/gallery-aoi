import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 8px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 18px 0;

  margin: 0 10px 0 0;
  line-height: 1rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  color: #fff;
  background-color: #547390;
  &.selected {
    background-color: ${(props) => props.theme.colors.main};
  }
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.active ? "#1565c0" : "#f1f5f9")};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Ellipsis = styled.span`
  padding: 8px 14px;
  color: #6b7280;
`;
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
};
export const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  return (
    <PaginationWrapper>
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </PageButton>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <Ellipsis key={`ellipsis-${index}`}>…</Ellipsis>
        ) : (
          <PageButton
            key={page}
            active={currentPage === page}
            onClick={() => handlePageChange(page as number)}
          >
            {page}
          </PageButton>
        ),
      )}

      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </PageButton>
    </PaginationWrapper>
  );
};
