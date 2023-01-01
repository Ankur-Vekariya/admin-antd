import React, { useState, useEffect } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import axios from "axios";
import { Col, Row } from "antd";
import "./styles.css";

const Products = () => {
  const { Meta } = Card;
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProductsData(response.data.products);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {productsData.map((item, index) => (
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={item.images[index]} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <h2>{item.title}</h2>
          <h4>{item.description}</h4>
          <Row>
            <Col span={12}>
              <h3>Price:{item.price}</h3>
            </Col>
            <Col span={12}>
              <h3>{item.rating}</h3>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default Products;
