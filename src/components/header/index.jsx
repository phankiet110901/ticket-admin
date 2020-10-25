import React from "react";
import { Layout, Menu, Dropdown, Avatar, Typography } from "antd";
import {
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Redirect } from "react-router-dom";
import { LOG_OUT } from "./../../pages/login/constant";

const { Header, Content } = Layout;
const { SubMenu } = Menu;

export default function HeaderAdmin(props) {
  const userLoginState = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleMenuClick = (e) => {
    let { key } = e;
    switch (key) {
      case "1": {
        localStorage.clear();
        dispatch({
          type: LOG_OUT,
        });
        break;
      }
      default: {
      }
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Log out</Menu.Item>
    </Menu>
  );

  let { userLogin } = userLoginState;
  return (
    <Layout>
      {userLogin ? "" : <Redirect to="/login" />}
      <Header
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography.Title level={4} style={{ color: "#fff" }}>
          Admin page
        </Typography.Title>
        <Dropdown
          overlay={menu}
          placement="bottomCenter"
          icon={<UserOutlined />}
        >
          <Avatar
            style={{
              backgroundColor: "#87d068",
              cursor: "pointer",
            }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Header>
      <div style={{ display: "flex" }}>
        <Menu
          style={{ width: 256, height: "100vh" }}
          defaultOpenKeys={["sub1"]}
          theme="dark"
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title="Navigation Three"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
        <Content
          style={{
            padding: 15,
          }}
        >
          {props.children}
        </Content>
      </div>
    </Layout>
  );
}
