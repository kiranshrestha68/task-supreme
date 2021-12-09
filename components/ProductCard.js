import React from "react";

import Image from "next/image";

const ProductCard = ({ picture, price }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "15% ",
        border: "1px solid #e6dddd",
        margin: "0 2% 2% 0",

        borderRadius: "8px",
        boxShadow: "2px 2px 5px #e6dddd"
      }}
    >
      <div className="productCard__images">
        <Image src={picture} alt={picture} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2% 4%",
        }}
      >
        <div style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}>
          {price}/-
        </div>
        <button className="btn btn-success" style={{ padding: "1.5% 12%" }}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
