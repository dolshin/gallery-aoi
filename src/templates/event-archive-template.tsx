import React from "react";
import { graphql, PageProps } from "gatsby";
import PaginatedEventList from "../components/gallery/event/PaginatedEventList";

const EventArchiveTemplate = ({
  data,
  pageContext,
}: PageProps<
  Queries.EventArchivePagedQuery,
  Queries.EventArchivePagedQueryVariables & {
    year: string;
    month: string;
    startMonth: Date; // "YYYY-MM-DDTHH:mm:ss+09:00"
    endMonth: Date; // "YYYY-MM-DDTHH:mm:ss+09:00"
    totalPages: number;
    currentPage: number;
  }
>) => {
  return <PaginatedEventList data={data} pageContext={pageContext} />;
};

export default EventArchiveTemplate;

export const EventArchivePagedQuery = graphql`
  query EventArchivePaged(
    $startMonth: Date!
    $endMonth: Date!
    $limit: Int!
    $skip: Int!
  ) {
    allMicrocmsEvent(
      filter: { startDate: { gte: $startMonth, lt: $endMonth } }
      sort: { publishedAt: DESC }
      limit: $limit
      skip: $skip
    ) {
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
