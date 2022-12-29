import React from "react";
import { Col, Divider, Row } from "antd";
import {
  DashboardOutlined,
  FileProtectOutlined,
  CustomerServiceOutlined,
  TranslationOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Avatar, List } from "antd";
import "./styles.css";

const Home = () => {
  const data = [
    {
      text: "Dashboard",
      icon: <DashboardOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <FileProtectOutlined />,
    },
    {
      text: "Customers",
      icon: <CustomerServiceOutlined />,
    },
    {
      text: "Transactions",
      icon: <TranslationOutlined />,
    },
    {
      text: "Geography",
      icon: <MessageOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      //   icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      //   icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      //   icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      //   icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      //   icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      //   icon: <TrendingUpOutlined />,
    },
  ];
  return (
    <>
      <Row>
        <Col flex={1}>
          <div className="sideBar">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{justifyContent: "space-evenly"}}>
                  <div>{item.icon}</div>
                  <div>{item.text}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col flex={4}>
          <div className="topBar">4 / 5</div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
