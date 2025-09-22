import React from "react";
import styled from "styled-components";
import TopPageItemLayout from "../../layouts/TopPageItemLayout";
import Telephone from "./Telephone";
import { FaParking } from "react-icons/fa";
import { md } from "../../layouts/breakpoints";

const MapWrapper = styled.div`
  @media ${md.up("lg")} {
    margin-top: 30px;
    max-width: 700px;
    height: 400px;
    border-radius: 12px;
  }
  @media ${md.down("lg")} {
    margin-top: 30px;
    max-width: 100%;
    height: 350px;
    border-radius: 12px;
  }
`;

const Access: React.FC = () => (
  <TopPageItemLayout id="Access" title="アクセス" subTitle="Access">
    <p style={{ letterSpacing: "0.18em", lineHeight: 2.5, margin: 0 }}>
      近鉄『大和西大寺』駅から徒歩7分
      <br />
      奈良県奈良市西大寺新田町1-11
      <br />
    </p>{" "}
    <p
      style={{
        display: "flex",
        //justifyContent: "center",
        alignItems: "center",
        gap: "0.8rem",
        margin: "0.4em 0",
        letterSpacing: "0.18em",
        lineHeight: 2.5,

        verticalAlign: "middle",
      }}
    >
      {" "}
      <FaParking size={17} />
      駐車場：10台（無料）
    </p>
    <Telephone phoneNumber="090-5066-5882" />
    <MapWrapper>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.3679013257206!2d135.77531797547886!3d34.695899483470846!2m3!1f0!2f0!3f0!3m2!1i1024!2i960!4f13.1!3m3!1m2!1s0x60013b659eb0e355%3A0xc679c7b8d6f3e40d!2z44CSNjMxLTA4MzIg5aWI6Imv55yM5aWI6Imv5biC6KW_5aSn5a-65paw55Sw55S677yR4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1747115212447!5m2!1sja!2sjp"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapWrapper>
  </TopPageItemLayout>
);

export default Access;
