import { graphql, useStaticQuery } from "gatsby";

export const useEventData = () => {
  const data = useStaticQuery<Queries.EventDataQuery>(graphql`
    query EventData {
      allMicrocmsEvent(limit: 5, sort: { publishedAt: DESC }) {
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
  `);
  return data;
};
