import React from "react";
import { Image, Chip, Button } from "../../common";
import EventHoldingPeriod from "./EventHoldingPeriod";
import PageLayout from "../../layouts/PageLayout";

type EventDetailProps = { data: Queries.MicrocmsEventQueryQuery };

const EventDetail: React.FC<EventDetailProps> = ({ data }) => {
  const event = data.microcmsEvent;
  return (
    <PageLayout title="イベント情報" subTitle="">
      <div
        style={{
          marginTop: "30px",
          marginBottom: "40px",
          borderBottom: "1px solid rgb(221, 221, 221)",
        }}
      >
        {" "}
        <Chip
          label={event?.category?.name}
          style={{
            color: "#7b7b7b",
            borderRadius: "3px",
            border: "1px solid #7b7b7b",
          }}
        />
        <p
          style={{
            textAlign: "left",
            fontSize: "22px",
            //fontFamily: "'Montserrat Variable', sans-serif",
            //fontWeight: "bold",
            margin: ".6em 0 .8em",
          }}
        >
          {event?.title}
        </p>
        <p
          style={{
            margin: "2px 0 0 0",
            fontSize: "15px",
            color: "#7b7b7b",
          }}
        >
          主催者：{event?.organizer}
        </p>
        <p
          style={{
            margin: "2px 0 0 0",
            fontSize: "15px",
            color: "#7b7b7b",
          }}
        >
          開催時期：
          <EventHoldingPeriod
            startDate={event?.startDate}
            endDate={event?.endDate}
          />
        </p>
      </div>
      <figure
        style={{
          margin: "0 1em 0.8em 0",
          overflow: "hidden",

          maxWidth: "800px",
        }}
      >
        <Image
          src={event?.image?.url}
          alt={event?.title ?? ""}
          width={event?.image?.width || 280}
          height={event?.image?.height || 200}
        />
      </figure>

      <div
        dangerouslySetInnerHTML={{ __html: event?.body ?? "" }}
        style={{
          fontSize: "17px",
        }}
      />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Button to="/event" label="一覧へもどる" arrowType="none" />
      </div>
    </PageLayout>
  );
};

export default EventDetail;
