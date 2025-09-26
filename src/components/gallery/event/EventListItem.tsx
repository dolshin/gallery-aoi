import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import EventHoldingPeriod from "./EventHoldingPeriod";
import { Image } from "../../common";
import { md } from "../../layouts/breakpoints";

const List = styled.li`
  list-style: none;
  border-bottom: 1px solid #e0e0e0;
  &:hover {
    background-color: #f1f4ff;
    img {
      //transform: scale(1.05);
    }
  }
`;

const StyledLink = styled(Link)`
  padding-top: 16px;
  display: inline-block;
`;

const Title = styled.h3`
  text-align: left;
  font-size: 20px;
  font-family: "'Montserrat Variable', sans-serif";
  font-weight: 500;
  margin: 20px 0 20px;
  letter-spacing: 0.17em;
  @media ${md.up("lg")} {
    font-size: 20px;
    letter-spacing: 0.17em;
  }
  @media ${md.between("md", "lg")} {
    font-size: 19px;
    letter-spacing: 0.17em;
  }
  @media ${md.between("sm", "md")} {
    font-size: 18px;
    letter-spacing: 0.17em;
  }
  @media ${md.down("sm")} {
    font-size: 17px;
    letter-spacing: 0.17em;
  }
`;

const Date = styled.time`
  display: block;
  line-height: 1.33;
  //text-align: left;
  font-size: 16px;
  letter-spacing: 0.14em;
  margin: 0;
  padding: 9px 0 0;
  color: #000000;
  @media ${md.down("sm")} {
    letter-spacing: 0.05em;
  }
`;
const Organizer = styled.p`
  display: block;
  line-height: 1.5;
  //text-align: left;
  font-size: 16px;
  letter-spacing: 0.22em;
  margin: 0;
  padding: 0;
  color: #000;
`;

type EventListProps = {
  event: Queries.EventDataQuery["allMicrocmsEvent"]["edges"][number]["node"];
};

const EventListItem: React.FC<EventListProps> = ({ event }) => {
  return (
    <List>
      <StyledLink to={`/event/${event.slug}`}>
        <div
          style={{
            display: "flex",
            columnGap: "32px",
            flexWrap: "wrap",
            //alignItems: "center",
            //justifyContent: "space-between",
            padding: "1.4em 0 1.4em 1.2em",
          }}
        >
          <figure
            style={{
              margin: "0 1em 0.8em 0.1em",
              //margin: 0,
              overflow: "hidden",
              borderRadius: "12px",
              maxWidth: "320px",
            }}
          >
            <Image src={event.image?.url} alt={event.title ?? ""} />{" "}
          </figure>
          <div>
            <Date>
              <EventHoldingPeriod
                startDate={event.startDate}
                endDate={event.endDate}
              />
            </Date>
            <Title>{event.title}</Title>
            <Organizer>{event.organizer}</Organizer>
          </div>
        </div>
      </StyledLink>
    </List>
  );
};

export default EventListItem;
