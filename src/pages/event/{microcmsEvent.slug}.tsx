import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import EventDetail from "../../components/gallery/event/EventDetail";
import { SEO } from "../../components/common/Seo";
import { SITE_URL } from "../../components/layouts/constants";

const EventPage: React.FC<
  PageProps<
    Queries.MicrocmsEventQueryQuery,
    Queries.MicrocmsEventQueryQueryVariables
  >
> = ({ data }) => <EventDetail data={data} />;

export const query = graphql`
  query MicrocmsEventQuery($id: String) {
    microcmsEvent(id: { eq: $id }) {
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
`;

export default EventPage;

export const Head: HeadFC<Queries.MicrocmsEventQueryQuery> = ({ data }) => (
  <SEO
    title={data.microcmsEvent?.title || "イベントタイトル"}
    description={
      data.microcmsEvent?.body?.slice(0, 120) || "イベントの詳細情報"
    }
    pathname={`/event/${data.microcmsEvent?.slug}`}
    imagePath={data.microcmsEvent?.image?.url || `${SITE_URL}/default-ogp.png`}
    isRelativeImagePath={false}
    robots={{ index: true, follow: true }}
  />
);
