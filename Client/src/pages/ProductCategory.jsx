// Client/src/pages/ProductCategory.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { products, searchQuery } = useAppContext();

  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  const splitText = searchCategory?.text.split(" ");
  const text1 = splitText?.[0] || "";
  const text2 = splitText?.slice(1).join(" ") || "";

  return (
    <div className="mt-16">
      {searchQuery && (
        <div className="flex flex-col items-end w-max">
          {searchCategory && <Title text1={text1} text2={text2} />}
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h[60vh]">
          <p className="text-2xl font-medium text-primary">
            No Products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
