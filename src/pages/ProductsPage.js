import React, { useEffect, useState } from "react";
import ProductBg from "../assets/arrowcut_banner.png";
import ContactInfo from "../components/contactinfo";
import mailUsImg from "../assets/contact_img.svg";
import callUsImg from "../assets/mail_us_img.svg";
import ProductsPageProducts from "../components/productsPageProducts";
import ProductPageDesc from "../components/productPageDesc";
import { useLocation } from "react-router-dom";
import Products from "../components/products";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const loc = useLocation();

  const [productList, setProductList] = useState([
    {
      categoryIndex: 0,
      category: "Carbide drill",
      isClicked: false,
      items: [
        {
          title: "Solid Carbide Drill",
          image: "/img/carbidedrillImg.png",
        },
        {
          title: "Though Coolant Drill",
          image: "/img/carbidedrillImg.png",
        },
        {
          title: "Step Drill",
          image: "/img/carbidedrillImg.png",
          bannerImage: "/img/step-drill-product-img-large.png",
          desc: "The advanced PVD coating process combines Si, A1, Ti and other metal elements to form a multi-layer nano protective film, which makes the drill bit resistant to corrosion and high temperature during processing, anti-blocking, improving surface finish, and increasing service life. Use high-quality tungsten material, high-precision imported Germany Wlater,Australia ANCA CNC machine processing, so,the drills can get a stable dimensional accuracy and good surface quality; suitable for processing system excellent rigidity occasions. Carbide drill Step and piont angle 140° Special edge increase drill life Large-size chip flutes, finely polished, avoid sticking to the knife, greatly improve work efficiency Universal chamfered round handle, improved compatibility and avoid slippage Support customized",
          subT1: {
            heading: "Production Process",
            imgs: [
              {
                title: "Design Drawings",
                img: { path: "/img/step-drill/1.png" },
              },
              {
                title: "Processing 1",
                img: { path: "/img/step-drill/2.png" },
              },
              {
                title: "Processing 2",
                img: { path: "/img/step-drill/3.png" },
              },
              {
                title: "Detection 1",
                img: { path: "/img/step-drill/4.png" },
              },
              {
                title: "Detection 2",
                img: { path: "/img/step-drill/5.png" },
              },
              {
                title: "The Workshop",
                img: { path: "/img/step-drill/6.png" },
              },
            ],
          },

          subT2: {
            heading: "Products Function",
            list: [
              {
                head: "HRC",
                detail:
                  "HRC45 HRC55 HRC58 HRC60 HRC65 2.Coated: AlTiN, TiAlN, TiAISI,TiSiN, TiN, DLC,Nano, Diamond 3.Could be used for the processing of copper, cast iron, carbon steel, mould steel, stainless steel, titanium alloy, tool steel, and heat-treated steel",
              },
              {
                head: "Coated",
                detail: "AlTiN, TiAlN, TiAISI,TiSiN, TiN, DLC,Nano, Diamond",
              },
              {
                head: "Could be used for the processing of ",
                detail:
                  "copper, cast iron, carbon steel, mould steel, stainless steel, titanium alloy, tool steel, and heat-treated steel, stainless steel, titanium alloy, tool steel, and heat-treated steel",
              },
            ],
          },
          pack: {
            heading: "Package",
            steps: [
              "Milling cutter has been finished and sent to warehouse",
              "One cutter put in a plastic pipe, 10 pieces per group bind with a rubber band",
              "Use the air bubble paper to encase the plastic paper",
              "Put the goods encased with air bubble paper in a small packing cartons",
              "Put another air bubble paper on the goods and packaged",
              "Sent by logistics company or express according to customer&apos;s need.",
            ],
            imgs: [
              {
                title: "Drillbitcity",
                img: { path: "/img/step-drill/p1.png" },
              },
              {
                title: "expo-drills",
                img: { path: "/img/step-drill/p2.png" },
              },
            ],
          },
        },
        {
          title: "Spotting Drill",
          image: "/img/carbidedrillImg.png",
        },
        {
          title: "Deep Hole Drilling",
          image: "/img/carbidedrillImg.png",
        },
        {
          title: "Carbide Centre Drill",
          image: "/img/carbidedrillImg.png",
        },
      ],
    },
    {
      categoryIndex: 1,
      category: "Carbide End Mill",
      isClicked: false,
      items: [],
    },
    {
      categoryIndex: 2,
      category: "Carbide Reamer",
      isClicked: false,
      items: [],
    },
    {
      categoryIndex: 3,
      category: "Cutomized tool",
      isClicked: false,
      items: [],
    },
    {
      categoryIndex: 4,
      category: "Flat End Mill",
      isClicked: false,
      items: [],
    },
    {
      categoryIndex: 5,
      category: "Indexable tool",
      isClicked: false,
      items: [],
    },
  ]);

  const [currentProduct, setCurrentProduct] = useState(productList[0]);
  const [currentItem, setCurrentItem] = useState(null);

  const productBtnStyle = {
    width: "387px",
    height: "68px",
    background: "#FFF",
  };
  const [clickCounter, setClickCounter] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     setCurrentProduct(productList[0]);
  //   };
  // });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `url(${ProductBg})`,
          backgroundSize: "100%",
          backgroundColor: "#161616",
          display: "flex",
          alignItems: "center",
          paddingLeft: "8.3rem",
        }}
      >
        <p className="text-[1rem] md:text-[1.8rem] lg:text-[2.635rem] lg:leading-[3.438rem]">
          <span className="text-red font-extrabold">Our</span>
          <span className="text-white font-bold"> Products</span>
        </p>
      </div>
      <div
        style={{
          width: "100%",
          // height: "50rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", paddingY: "10rem", width: "85%" }}>
          <div
            style={{
              width: "40%",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "26.82px",
                textAlign: "left",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderBottom: "3px solid #F92424",
                width: "200px",
              }}
            >
              All Products
            </div>
            <div
              style={{
                backgroundColor: "#F8F8F8",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "540px",
                gap: "1rem",
              }}
            >
              {productList.map((product, i) => {
                return (
                  <button
                    key={`${i}_${product.category}`}
                    onClick={() => {
                      setClickCounter((clickCounter) => clickCounter + 1);
                      let tempProductList = [...productList];
                      tempProductList.forEach(
                        (item) => (item.isClicked = false)
                      );
                      tempProductList[i].isClicked = true;
                      setCurrentProduct(tempProductList[i]);
                      setProductList(tempProductList);
                      setCurrentItem(null);
                    }}
                    style={productBtnStyle}
                  >
                    {product.isClicked ? (
                      <span className="font-bold text-red">
                        {product.category}
                      </span>
                    ) : product.category == "Carbide drill" &&
                      clickCounter == 0 ? (
                      <span className="font-bold ">{product.category}</span>
                    ) : (
                      <span> {product.category}</span>
                    )}
                  </button>
                );
              })}
            </div>
            <button
              style={{
                marginTop: "2rem",
                width: "400px",
                height: "100px",
                background: "#282828",
                borderRadius: "6px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  letterSpacing: "-0.022em",
                  color: "#FFF",
                  textDecoration: "underline",
                }}
              >
                Download Our Brochure
              </p>
            </button>
            <div
              style={{
                marginTop: "2rem",
                width: "400px",
                height: "371px",
                backgroundColor: "#F8F8F8",
                borderRadius: "6px",
                padding: "30px 40px 20px 35px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "55px",
                  textAlign: "left",
                }}
              >
                Send Us An Inqury
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "17.07px",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elfv it, sed
                do eiusmod terwrmpor incididunt ut labore et dolore magna
                aliqua. enim ad minim veniam, qxxscsgbne ffuis nostrud
                exercitation ullamco laboris nisi ut aliquip exkeea commodo
                consequat. Duis
              </p>
              <div className="mt-9 w-full flex items-center rounded">
                <div className="flex items-center">
                  <img
                    src={callUsImg}
                    alt="contact_img"
                    className="aspect-[3/3] w-10"
                  />
                  <span className="font-bold font-poppins text-[14px] px-[0.625rem]">
                    Call Us
                  </span>
                  <span className="text-sm">+001 6547 6589</span>
                </div>
              </div>
              <div className="mt-6 w-full flex items-center rounded ">
                <div className="flex items-center">
                  <img
                    src={mailUsImg}
                    alt="mail_us_img"
                    className="aspect-[3/3] w-10"
                  />
                  <span className="font-bold font-poppins text-[14px] px-[0.625rem]">
                    Mail Us
                  </span>
                </div>
                <span className="text-sm">saasup@gmail.co</span>
              </div>
            </div>
          </div>
          <div style={{ width: "60%" }}>
            {!currentItem ? (
              <ProductsPageProducts
                productList={productList}
                currentProduct={currentProduct}
                setCurrentItem={setCurrentItem}
              />
            ) : (
              <ProductPageDesc currentItem={currentItem} />
            )}
          </div>
        </div>
      </div>
      <Products loc={loc} />
      <ContactInfo />
    </motion.div>
  );
};

export default ProductsPage;
