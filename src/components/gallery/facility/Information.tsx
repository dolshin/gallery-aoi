import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Information = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "80px",
          flexWrap: "wrap",
          maxWidth: "fit-content",
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
            overflow: "hidden",
            maxWidth: "520px",
          }}
        >
          <StaticImage
            src="../../../assets/images/sketch.jpg"
            alt="ギャラリー見取り図"
          />
        </figure>
      </div>
    </>
  );
};

export default Information;
