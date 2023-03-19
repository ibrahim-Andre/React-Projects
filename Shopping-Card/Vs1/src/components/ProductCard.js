import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = (props) => {
  const reference = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{reference.title}</Card.Title>
        <Card.Title>${reference.price}</Card.Title>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
