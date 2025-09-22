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
        alignItems: "center",
        gap: "0.8rem",
      }}
    >
      <FaPhone style={{ fontSize: 16 }} />
      <div>
        <a
          style={{
            display: "inline-block",
            fontSize: 18,
            letterSpacing: "0.12em",
            textAlign: "left",
          }}
          href={`tel:${phoneNumber}`}
        >
          {phoneNumber}
          <span style={{ fontSize: "16px" }}>（上村まで）</span>
        </a>
      </div>
    </div>
  );
};

export default Telephone;
