import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { convertToInt, convertToRupiah } from "../utils/converter";

const ProductCard = ({ product, onAddToCart }) => {
  const maxLength = 20;
  const shortenedTitle =
    product.name.length > maxLength
      ? product.name.substring(0, maxLength) + "..."
      : product.name;

  return (
    <Card className="mb-3">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <Card.Img
          variant="top"
          src={product.photo}
          alt={product.name}
          className="img-fluid"
          style={{
            objectFit: "contain",
            maxHeight: "100%",
          }}
        />
      </div>
      <Card.Body style={{ backgroundColor: "#FF0F0F" }}>
        <Card.Title>
          {shortenedTitle}{" "}
          {/* <Badge pill bg="secondary">
            {product.category}
          </Badge> */}
        </Card.Title>
        <Card.Text>{convertToRupiah(convertToInt(product.price))}</Card.Text>
        <Button className="btn-red" onClick={() => onAddToCart(product)}>
          Add to Cart <BsCartPlus className="ml-4" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
