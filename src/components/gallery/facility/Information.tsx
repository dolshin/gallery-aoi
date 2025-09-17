import React from "react";
import Interia from "../../../assets/images/sketch.jpg";
import { Image } from "../../common";

const Information = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "80px",
          flexWrap: "wrap",
          //alignItems: "center",
          maxWidth: "fit-content",
          //margin: "0 auto",
        }}
      >
        <ul
          style={{
            lineHeight: 2.5,
            marginLeft: "1.4em",
            textAlign: "left",
          }}
        >
          <li
            style={{
              listStyle: "disc",
              letterSpacing: "0.15em",
              fontSize: "16px",
            }}
          >
            会場面積：約67.2㎡{" "}
          </li>
          <li
            style={{
              listStyle: "disc",
              letterSpacing: "0.15em",
              fontSize: "16px",
            }}
          >
            壁の長さ：約46.3m
          </li>
          <li
            style={{
              listStyle: "disc",
              letterSpacing: "0.15em",
              fontSize: "16px",
            }}
          >
            天井高：2.7m
          </li>
        </ul>{" "}
        <figure
          style={{
            margin: "-50px 0 0",
            //paddingTop: "20px",
            // paddingRight: "8vw",
            overflow: "hidden",
            maxWidth: "520px",
          }}
        >
          <Image
            src={Interia}
            alt="ギャラリー見取り図"
            width="100%"
            height="auto"
          />
        </figure>
      </div>
    </>
  );
};

export default Information;
