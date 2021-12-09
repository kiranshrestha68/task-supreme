import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import CarouselOK from "../components/Carousel";
import Topbar from "../components/Topbar";
import styles from "../styles/Home.module.css";
import ProductCard from "../components/ProductCard";
import product1 from "../images/product_images/product1.jpeg";
import product2 from "../images/product_images/product02.png";

import product3 from "../images/product_images/product3.jpeg";

import product4 from "../images/product_images/product5.jpeg";

import product5 from "../images/product_images/product01.png";

import product6 from "../images/product_images/product03.png";
import product7 from "../images/product_images/product2.jpeg";

import product8 from "../images/product_images/product1.jpeg";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import FooterSecond from "../components/footer2nd";

export default function Home() {
  const [show, setShow] = useState(false);

  const productList = [
    {
      pic: product1,
      price: "Rs.150.00",
    },
    {
      pic: product2,
      price: "Rs.650.00",
    },
    {
      pic: product3,
      price: "Rs.550.00",
    },
    {
      pic: product4,
      price: "Rs.750.00",
    },
    {
      pic: product5,
      price: "Rs.150.00",
    },
    {
      pic: product6,
      price: "Rs.150.00",
    },
    {
      pic: product7,
      price: "Rs.850.00",
    },
    {
      pic: product8,
      price: "Rs.900.00",
    },
  ];

  return (
    <div>
      <div>
        <Topbar show={show} setShow={setShow} />
      </div>
      <div onClick={(e) => setShow(false)}>
        <CarouselOK />
      </div>
      <div className="index__displayNature" onClick={(e) => setShow(false)}>
        {productList.map((p) => {
          {
            /* console.log(p); */
          }
          return <ProductCard price={p.price} picture={p.pic} />;
        })}
      </div>
      <BackToTop />

      <Footer />
      <Logo />
      <FooterSecond />
    </div>
  );
}
