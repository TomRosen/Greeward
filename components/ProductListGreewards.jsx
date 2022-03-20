import Link from "next/link";
import React from "react";

const Product = (props) => {
  return (
    <div className="px-4 py-7 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-gray-900">Highlights</h1>
      <div className="bg-white">
        <div className="py-16">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.products?.map((product) => (
              <a
                key={product._id}
                href={`/greewards/${product._id}`}
                className="group"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-5">
                  <img
                    src={product.image}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.carrots}🥕
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
