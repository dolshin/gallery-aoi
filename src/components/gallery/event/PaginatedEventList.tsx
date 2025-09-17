import React from "react";
import { Pagination } from "../../common/slider/Pagination";
import PageLayout from "../../layouts/PageLayout";
import EventCategory from "./EventCategory";
import EventArchiveMenu from "./EventArchiveMenu";
import { Button } from "../../common";
import EventList from "./EventList";

type PaginatedEventListProps = {
  data: Queries.EventDataQuery;
  pageContext: {
    totalPages: number;
    currentPage: number;
    categoryName?: string;
    year?: string;
    month?: string;
  };
};

const PaginatedEventList: React.FC<PaginatedEventListProps> = ({
  data,
  pageContext,
}) => {
  const { categoryName, year, month } = pageContext;
  const eventTitle =
    year && month
      ? `${year}年${month}月`
      : year && !month
        ? `${year}年`
        : categoryName
          ? `${categoryName}`
          : "";

  return (
    <PageLayout title="イベント一覧" subTitle="">
      <h3
        style={{
          fontWeight: "normal",
          letterSpacing: "0.05em",
          //textAlign: "center",
        }}
      >
        {eventTitle}
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "40px",
          padding: "20px 0 0",
        }}
      >
        <EventCategory />
        <EventArchiveMenu />
      </div>
      <EventList data={data.allMicrocmsEvent.edges} />

      <Pagination
        pageSum={pageContext.totalPages}
        currentPage={pageContext.currentPage}
      />
      <div style={{ textAlign: "center", margin: "60px 0 0" }}>
        <Button to="/" label="トップページに戻る" arrowType="none" />
      </div>
    </PageLayout>
  );
};

export default PaginatedEventList;
