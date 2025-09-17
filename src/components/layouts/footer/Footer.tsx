import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        marginBottom: "30px",
        //borderTop: "1px solid #dfdfdf",
        width: "100%",
      }}
    >
      <small
        style={{
          fontSize: "11px",
          padding: "0em 3em",
          letterSpacing: "0.1em",
        }}
      >
        &copy; {new Date().getFullYear()} Gallery AOI
      </small>{" "}
    </div>
  );
};

export default Footer;
