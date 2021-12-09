import Image from "next/image";
import React from "react";
import banner from "../images/favicon.gif";

const Logo = () => {
  return (
    <div className="logo__main">
      <div style={{ width: "1%", height: "3%" }}>
        <Image src={banner} alt="logo" />
      </div>
      <span
        style={{
          fontSize: "12px",
          color: "white",
          fontWeight: "bold",
          letterSpacing: "0.5px",
          marginLeft: "10px",
        }}
      >
        {" "}
        REECHARGER
      </span>
    </div>
  );
};

export default Logo;
