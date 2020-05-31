import React, { FC, useState, useEffect } from "react";
import { Productt } from "@/types/interfaces";
import styled from "styled-components";
import { addToCart } from "@shopify";

// Components
import Button from "@components/ui/Button";
import ButtonGroup from "@components/ui/ButtonGroup";
import ProductImage from "./ProductImage";
import ProductShortInfo from "./ProductShortInfo";

type T = {
  product: Product;
};

const ProductConfig: FC<T> = ({ product }) => {
  const [variant, setVariant] = useState<ShopifyBuy.ProductVariant>(Object);
  const [infoOption, setInfoOption] = useState("info");
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  useEffect(() => {
    const newVariant = product.variants.find(({ available }) => available);
    newVariant && setVariant(newVariant);
  }, [product]);

  const infoOptions = ["info", "sizing", "shipping & returns"];

  const handleAddToCartClick = async () => {
    const lineItems = [
      {
        variantId: variant.id,
        quantity: 1,
        customAttributes: [],
      },
    ];
    addToCart(lineItems);
  };

  return (
    <Container>
      <Col>
        <VisualContainer>
          <ProductImage productImage={selectedImage} />
          {product.images.length > 1 && (
            <div className="previews">
              {product.images.map((image) => (
                <div key={image.id} onClick={() => setSelectedImage(image)}>
                  <ProductImage
                    isPreview={true}
                    className="item"
                    productImage={image}
                  />
                </div>
              ))}
            </div>
          )}
        </VisualContainer>
      </Col>
      <Col>
        {/* Content */}
        <ProductShortInfo
          price={variant.price}
          productType={product.productType}
          title={product.title}
        />

        {/* Variable Content Navigation */}
        <nav className="info-nav">
          {infoOptions.map((str) => (
            <button
              className={infoOption === str ? "active" : ""}
              onClick={() => setInfoOption(str)}
              key={str}
            >
              {str}
            </button>
          ))}
        </nav>

        {infoOption === "info" && <p>{product.description}</p>}
        {infoOption === "sizing" && "sizing"}
        {infoOption === "shipping & returns" && "Shipping information"}

        {/* Sizes */}
        {product.variants.length > 1 && (
          <ButtonGroup>
            {product.variants.map((v, i) => (
              <Button
                key={i}
                hover={!v.available || variant !== v}
                disabled={!v.available}
                color={variant === v ? "primary" : "secondary"}
                aria-selected={variant === v}
                buttonStyle="solid"
                // className={variant === v ? "selected" : ""}
                onClick={() => setVariant(v)}
              >
                {v.title}
              </Button>
            ))}
          </ButtonGroup>
        )}

        {/* Buy button */}
        <Button
          onClick={() => handleAddToCartClick()}
          buttonStyle="solid"
          color="primary"
          className="block"
        >
          Add to cart
        </Button>
      </Col>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;

  .previews {
    display: flex;
  }

  .info-nav {
    display: flex;
    margin-bottom: 1em;

    button {
      flex-grow: 1;
      border: none;
      background: none;
      color: #fff;
      font-size: inherit;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.inactive};
      border-bottom: 1px solid ${({ theme }) => theme.colors.inactive};
      cursor: pointer;
      font-weight: bold;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
        border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

const Col = styled.div`
  flex: 1;
  padding: 0 15px;
  max-width: 600px;
`;
const VisualContainer = styled.div``;

// const SizePicker = styled.div`
//   display: flex;
//   margin-bottom: 1em;
// `;

export default ProductConfig;
