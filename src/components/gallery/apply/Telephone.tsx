import React from "react";
import { FaPhone } from "react-icons/fa";
type TelephoneProps = {
  phoneNumber: string;
};
const Telephone = ({ phoneNumber }: TelephoneProps) => {
  return (
    <div
      style={{
        display: "flex",
        //justifyContent: "center",
        alignItems: "center",
        gap: "0.8rem",
        margin: "20px 0 0",

        verticalAlign: "top",
      }}
    >
      <FaPhone style={{ fontSize: 17 }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a
          style={{
            display: "inline-block",
            fontSize: 18,
            textAlign: "left",
            //color: "#747474",
          }}
          href={`tel:${phoneNumber}`}
        >
          {phoneNumber}
        </a>
        <span
          style={{
            display: "block",
            fontSize: 11,
            color: "#999",
            textAlign: "left",
          }}
        >
          受付時間 平日10:00～18:00
        </span>
      </div>
    </div>
  );
};

export default Telephone;
