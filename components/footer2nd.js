import React from "react";

const FooterSecond = () => {
  return (
    <div>
      <div className="Footer__main" style={{ backgroundColor: "#161616" , borderBottom: "#161616" }}>
        <div className="Footer__item" style={{ fontSize: "13px" }}>
          <h3 style={{ fontSize: "15px" }}>Get to know us </h3>
          <span>About</span>
          <span>Careers</span>
          <span>Press Release</span>
          <span>Investment</span>
          <span>Offers</span>
        </div>

        <div className="Footer__item" style={{ fontSize: "13px" }}>
          <h3 style={{ fontSize: "15px" }}>Connect With Us</h3>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>{" "}
        </div>

        <div className="Footer__item" style={{ fontSize: "13px" }}>
          <h3 style={{ fontSize: "15px" }}> Make Money With Us</h3>
          <span> Sell on Amazon</span>
          <span>Affiliate Marketing</span>

          <span> Fullfillment Center</span>

          <span>Advertise Your Product</span>
          <span> Amazon Pay</span>
        </div>
        <div className="Footer__item" style={{ fontSize: "13px" }}>
          <h3 style={{ fontSize: "15px" }}>Let Us Help You</h3>
          <span> COVID 19</span>
          <span> Your Account</span>

          <span> Returns </span>

          <span> Funding </span>
          <span> Help </span>
        </div>
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#161616",
          color: "white",
          fontSize: "10px",
          padding: "2% 0",
          marginBottom: "0"
        }}
      >
        <i class="far fa-copyright"></i> 2021, REECHARGER
      </p>
    </div>
  );
};

export default FooterSecond;
