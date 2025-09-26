import React from "react";
import { graphql, PageProps } from "gatsby";

import PaginatedEventList from "../components/gallery/event/PaginatedEventList";

const EventListTemplate = ({
  data,
  pageContext,
}: PageProps<
  Queries.EventPaginationQueryQuery,
  Queries.EventPaginationQueryQueryVariables & {
    // context defined by gatsby-node
    totalPages: number;
    currentPage: number;
  }
>) => {
  return <PaginatedEventList data={data} pageContext={pageContext} />;
};

export default EventListTemplate;

export const EventPaginationQuery = graphql`
  query EventPaginationQuery($skip: Int!, $limit: Int!) {
    allMicrocmsEvent(limit: $limit, skip: $skip, sort: { publishedAt: DESC }) {
      edges {
        node {
          category {
            name
          }
          eventId
          title
          body
          startDate(formatString: "YYYY-MM-DD")
          endDate(formatString: "YYYY-MM-DD")
          organizer
          slug
          image {
            url
            width
            height
          }
        }
      }
    }
  }
`;
