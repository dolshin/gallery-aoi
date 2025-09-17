import React from "react";
import { graphql, PageProps } from "gatsby";

import PaginatedEventList from "../components/gallery/event/PaginatedEventList";

const EventCategory = ({
  data,
  pageContext,
}: PageProps<
  Queries.EventByCategoryWithPaginationQuery,
  Queries.EventByCategoryWithPaginationQueryVariables & {
    totalPages: number;
    currentPage: number;
  }
>) => {
  return <PaginatedEventList data={data} pageContext={pageContext} />;
};

export default EventCategory;

export const EventByCategoryWithPagination = graphql`
  query EventByCategoryWithPagination(
    $categoryId: String!
    $skip: Int!
    $limit: Int!
  ) {
    allMicrocmsEvent(
      limit: $limit
      skip: $skip
      sort: { publishedAt: DESC }
      filter: { category: { id: { eq: $categoryId } } }
    ) {
      edges {
        node {
          category {
            name
          }
          eventId
          title
          body
          description
          startDate(formatString: "YYYY-MM-DD")
          endDate(formatString: "YYYY-MM-DD")
          organizer
          slug
          image {
            alt
            url
            width
            height
          }
        }
      }
    }
  }
`;
