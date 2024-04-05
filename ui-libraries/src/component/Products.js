import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Products = () => {
  const Products = [
    {
      title: "Product 1",
      price: "2020",
    },
    {
      title: "Product 2",
      price: "2021",
    },
    {
      title: "Product 3",
      price: "2023",
    },
    {
      title: "Product 4",
      price: "2013",
    },
    {
      title: "Product 5",
      price: "2016",
    },
  ];
  return (
    <div>
      <Row>
        {Products.map((product, index) => {
          return (
            <Col sm={6} md={4} lg={3} className="mb-4"  key={index}>
              <NavLink to={"/detail"}>

              <Card
                color="light"
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody className="text-center">
                  <CardTitle tag="h5">{product.title}</CardTitle>
                  <CardText>{product.price}</CardText>
                </CardBody>
              </Card>
              </NavLink>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
