import React from "react";
import { Header } from "../../components";
import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "./../../pages/login/constant";

const AdminLayout = (props) => {
  const dispatch = useDispatch();
  if (!localStorage.getItem("accessToken")) {
    return <Redirect to="/login" />;
  } else {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: JSON.parse(localStorage.getItem("userLogin")),
    });
  }
  return (
    <>
      <Header>{props.children}</Header>
    </>
  );
};

export const AdminTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(componentProps) => {
        return (
          <AdminLayout>
            <Component {...componentProps} />
          </AdminLayout>
        );
      }}
    />
  );
};
