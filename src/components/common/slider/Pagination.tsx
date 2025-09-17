import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type PaginationProps = {
  pageSum: number;
  currentPage: number;
};

const StyledLink = styled(Link)`
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
`;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageSum,
}) => {
  const isExistingNextPage = currentPage < pageSum;
  const isExistingPrevPage = currentPage > 1;
  const nextPage = `/news/${currentPage + 1}`;
  const prevPage = currentPage === 2 ? `/news/` : `/news/${currentPage - 1}`;
  if (pageSum === 1) return null;
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "80px 0",
      }}
    >
      {isExistingPrevPage && (
        <li>
          <StyledLink to={prevPage}>
            <FaAngleLeft />
          </StyledLink>
        </li>
      )}

      {new Array(pageSum).fill(0).map((_, idx) => {
        return (
          <li key={idx}>
            <StyledLink
              to={idx === 0 ? `/news` : `/news/${idx + 1}`}
              className={idx + 1 === currentPage ? "selected" : ""}
            >
              {idx + 1}
            </StyledLink>
          </li>
        );
      })}
      {isExistingNextPage && (
        <li>
          <StyledLink to={nextPage}>
            <FaAngleRight />
          </StyledLink>
        </li>
      )}
    </ul>
  );
};
