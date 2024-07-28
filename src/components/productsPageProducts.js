import React from "react";
import ProductCard from "./productsPageCard";
import { motion } from "framer-motion";

const ProductsPageProducts = ({
  currentProduct,
  setCurrentItem,
  productList,
}) => {
  return (
    <motion.div
      initial={{ width: 0, transition: { duration: 0.3 } }}
      animate={{ width: "auto" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
      className="flex flex-col items-center "
      style={{ paddingRight: "100px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[24px] w-full mx-auto pt-[61.21px]">
        {currentProduct.items.map((product, index) => (
          <ProductCard
            key={`${index}_${product.title}`}
            index={index}
            title={product.title}
            image={product.image}
            currentProduct={currentProduct}
            setCurrentItem={setCurrentItem}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsPageProducts;
