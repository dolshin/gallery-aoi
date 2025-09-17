import React from "react";
import { Button } from "../../common";
import TopPageItemLayout from "../../layouts/TopPageItemLayout";
import { useEventData } from "../../../lib/hooks/useEventData";
import EventList from "./EventList";

const Event = () => {
  const events = useEventData();
  return (
    <TopPageItemLayout id="Event" subTitle="Event" title="イベント情報">
      <EventList data={events.allMicrocmsEvent.edges} />
      <div style={{ textAlign: "center", margin: "60px 0 0" }}>
        <Button to="/event/" label="一覧を見る" />
      </div>
    </TopPageItemLayout>
  );
};

export default Event;
