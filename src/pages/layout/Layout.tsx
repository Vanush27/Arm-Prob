import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3", "4", "999"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const icons = [
  LaptopOutlined,
  NotificationOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
]; // Массив иконок

const items2: MenuProps["items"] = [
  {
    key: "sub1",
    label: (
      <span>
        <UserOutlined style={{ marginRight: 8 }} /> subnav 1888
      </span>
    ),
    children: new Array(5).fill(null).map((_, j) => ({
      key: `1-${j + 1}`,
      label: `option ${j + 1}`,
      icon: React.createElement(icons[j % icons.length]), // Берем иконку из массива
    })),
  },
];
const LayoutScreen: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      {/* <Header style={{ display: "flex", alignItems: "center" }}> */}
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
      {/* </Header> */}
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        {/* <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout> */}
      </Layout>
    </Layout>
  );
};

export default LayoutScreen;
