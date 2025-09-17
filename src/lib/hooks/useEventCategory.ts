import { graphql, useStaticQuery } from "gatsby";

export const useEventCategory = () => {
  const data = useStaticQuery<Queries.AllEventCategoryQuery>(graphql`
    query AllEventCategory {
      allMicrocmsEventCategory {
        nodes {
          eventCategoryId
          slug
          name
        }
      }
    }
  `);

  return data.allMicrocmsEventCategory.nodes;
};
