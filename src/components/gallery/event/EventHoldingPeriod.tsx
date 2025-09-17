import React from "react";
import { formatDate } from "../../../lib/date/functions";

type EventHoldingPeriodProps = {
  startDate: string | null | undefined;
  endDate: string | null | undefined;
};
const EventHoldingPeriod = ({
  startDate,
  endDate,
}: EventHoldingPeriodProps) => {
  if (!startDate || !endDate) {
    return null;
  }
  const holdingPeriod =
    startDate === endDate ? (
      formatDate(startDate)
    ) : (
      <>
        {formatDate(startDate)} 〜 {formatDate(endDate)}
      </>
    );
  return <span style={{}}>{holdingPeriod}</span>;
};

export default EventHoldingPeriod;
