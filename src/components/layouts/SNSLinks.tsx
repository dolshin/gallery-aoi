import React from "react";
import { SNS_LINKS } from "./footer/constants";

type SNSLinksProps = {
  style?: React.CSSProperties;
  className?: string;
};
const SNSLinks = ({ style, className }: SNSLinksProps) => {
  return (
    <div className={className} style={style}>
      {SNS_LINKS.map((Link) => {
        return (
          <span key={Link.url}>
            <a href={Link.url}>{<Link.icon />}</a>
          </span>
        );
      })}
    </div>
  );
};

export default SNSLinks;
