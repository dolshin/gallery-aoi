import React from "react";
import EventListItem from "./EventListItem";

type EventListProps = {
  data: Queries.EventDataQuery["allMicrocmsEvent"]["edges"];
};

const EventList: React.FC<EventListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((data) => (
        <EventListItem event={data.node} key={data.node.eventId} />
      ))}
    </ul>
  );
};

export default EventList;
