import React from "react";
import ProductCard from "./productCard";
import Test from "./test";

const Products = () => {
  const tet = [{ a: "asb" }, { a: "ff" }, { a: "fsds" }];
  const productList = [
    { title: "Carbide drill" },
    { title: "Carbide End Mill" },
    { title: "Carbide Reamer" },
    { title: "Cutomized tool" },
    { title: "Flat End Mill" },
    { title: "Indexable tool" },
  ];
  console.log(productList.length, "KKLKAM");
  console.log("KKLKAM");
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="font-bold text-[2.635rem]">
          <span>Explore Our Best </span>
          <span className="text-red">Product Categories</span>
        </p>
      </div>
      <div className="flex gap-10 justify-between flex-wrap px-36">
        {productList.map((item, i) => (
          <div key={`${item.title}_key_${i}`}>
            <Test title={item.title} />
          </div>
        ))}
        {tet.map((product) => {
          <ProductCard
          // key={`${product.a}_card`}
          // title={product.a}
          // url={"google.com"}
          />;
        })}
      </div>
    </div>
  );
};

export default Products;
