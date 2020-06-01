import React, { FC } from "react";
import { Product } from "@/types/interfaces";

type T = {
  product: Product;
};

import ProductConfig from "@components/post/ProductConfig";
import Section from "./Section";

const ProductDetail: FC<T> = ({ product }) => {
  return (
    <Section>
      <ProductConfig product={product} />
    </Section>
  );
};

export default ProductDetail;
