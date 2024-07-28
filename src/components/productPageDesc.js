import React from "react";
import { motion } from "framer-motion";

const ProductPageDesc = ({ currentItem }) => {
  return (
    <motion.div
      initial={{ width: 0, transition: { duration: 0.25 } }}
      animate={{ width: "722px" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
      className="pt-[61.21px] max-w-[722px]"
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "36px",
            letterSpacing: "-0.022em",
            textAlign: "left",
          }}
        >
          {currentItem.title}
        </span>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            letterSpacing: "-2.2%",
            color: "#F92424",
            textDecoration: "underline",
          }}
        >
          Contact Us
        </span>
      </div>
      <img
        className="pt-4"
        src={currentItem?.bannerImage}
        alt={`${currentItem.title.trim()}_alt`}
      />
      <p className="pt-4">{currentItem?.desc}</p>
      <div>
        <p
          className="pt-6"
          style={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "-2.2%",
            color: "#18191F",
          }}
        >
          {currentItem?.subT1?.heading}
        </p>

        <aside
          className=" flex justify-center items-center h-[350px]
        "
        >
          <div className="w-full flex flex-col">
            <div className=" flex justify-between justify-self-start">
              {currentItem?.subT1?.imgs?.slice(0, 3).map((item, i) => {
                return (
                  <div
                    className="w-full flex pb-2"
                    key={`${item?.heading}_${i}`}
                  >
                    <div className="bg-white">
                      <img
                        src={`${item?.img?.path}`}
                        alt={`${item?.subT1?.heading}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" flex items-center justify-evenly ">
              {currentItem?.subT1?.imgs?.slice(3).map((item, i) => {
                return (
                  <div
                    className="w-full flex pt-2"
                    key={`${item?.heading}_${i}`}
                  >
                    <img
                      src={`${item?.img?.path}`}
                      alt={`${item?.subT1?.heading}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "-2.2%",
            color: "#18191F",
          }}
        >
          {currentItem?.subT2?.heading}
        </p>
        <p>
          <ul>
            {currentItem?.subT2?.list.map((li, i) => {
              return (
                <li>
                  <p>
                    <span className="font-bold">{`${i + 1}. ${li?.head}`}</span>
                    {i !== 2 && <span className="font-bold">: </span>}
                    {`${li?.detail}`}
                  </p>
                </li>
              );
            })}
          </ul>
        </p>
        <p
          className="pt-6"
          style={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "-2.2%",
            color: "#18191F",
          }}
        >
          {currentItem?.pack?.heading}
        </p>
        <p>
          <ul>
            {currentItem?.pack?.steps.map((li, i) => {
              return (
                <li>
                  <p>
                    <span className="font-bold">{`Step ${i + 1}:`}</span>
                    <span>{` ${li}`}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="pt-6"
        >
          {currentItem?.pack?.imgs?.map((item, i) => {
            return (
              <div className="w-[45%] bg-red " key={`${item?.title}_${i}`}>
                <img
                  style={{ alignSelf: "flex-start" }}
                  src={`${item?.img?.path}`}
                  alt={`${item?.subT1?.title}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPageDesc;
