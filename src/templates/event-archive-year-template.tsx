import React from "react";
import { graphql, PageProps } from "gatsby";

import PaginatedEventList from "../components/gallery/event/PaginatedEventList";
type PageContext = {
  totalPages: number;
  currentPage: number;
  startYear: Date; // "YYYY-MM-DDTHH:mm:ss+09:00"
  endYear: Date; // "YYYY-MM-DDTHH:mm:ss+09:00"
  year: string;
  months: string[]; // ["01", "02", "03", ...]
};

const EventArchiveYearTemplate: React.FC<
  PageProps<
    Queries.EventArchivePagedQuery,
    Queries.EventArchivePagedQueryVariables & PageContext
  >
> = ({ data, pageContext }) => {
  return <PaginatedEventList data={data} pageContext={pageContext} />;
};

export default EventArchiveYearTemplate;

export const EventArchivePagedQuery = graphql`
  query EventArchivePaged(
    $startYear: Date!
    $endYear: Date!
    $limit: Int!
    $skip: Int!
  ) {
    allMicrocmsEvent(
      filter: { publishedAt: { gte: $startYear, lt: $endYear } }
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
