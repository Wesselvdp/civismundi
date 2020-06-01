import React, { FC } from "react";
import { shopifyClient } from "@components/post/node_modules/@shopify";
import { GetStaticProps } from "next";

import Collection from "@components/sections/Collection";

type T = any;

const ProductsPage: FC<T> = ({ allProducts }) => {
  const products: Product[] = JSON.parse(allProducts);

  return (
    <div>
      <Collection products={products} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await shopifyClient.product.fetchAll();
  return {
    props: {
      allProducts: JSON.stringify(products),
    },
  };
};

export default ProductsPage;
