import React from "react";
import { Form, Input, Button, Row, Col, Divider, Typography } from "antd";
import { Redirect } from "react-router-dom";
import { actLogin } from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import { Loading, Modal } from "./../../components";
import "antd/dist/antd.css";

const { Title } = Typography;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 8 },
};

export default function Login() {
  const dispatch = useDispatch();
  const stateLogin = useSelector((state) => state.login);

  const onFinish = (values) => {
    dispatch(actLogin(values));
  };

  if (stateLogin.isLoading) return <Loading />;

  if (stateLogin.userLogin) {
    localStorage.setItem("accessToken", stateLogin.userLogin.accessToken);
    localStorage.setItem("userLogin", JSON.stringify(stateLogin.userLogin));
    return <Redirect to="/" />;
  }

  return (
    <>
      <Modal
        title="Error"
        message="Wrong username or password"
        isOpen={stateLogin.isShowErr}
      />
      <Modal
        isOpen={stateLogin.isShowErrNotAdmin}
        title="Ops !!!"
        message="You are not admin"
      />
      <Row align="middle" style={{ height: "100vh" }}>
        <Col span={8} offset={8}>
          <Divider>
            <Title level={4}>Login Admin</Title>
          </Divider>
          <Form {...layout} name="basic" onFinish={onFinish}>
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
