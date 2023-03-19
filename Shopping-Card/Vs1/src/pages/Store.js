import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../productsStore";

const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the Store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((reference, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={reference} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
