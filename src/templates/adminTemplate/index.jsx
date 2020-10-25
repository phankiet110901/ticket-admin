import React from "react";
import { Header, Footer } from "../../components";
import { Redirect, Route } from "react-router-dom";

const AdminLayout = (props) => {
  if(!localStorage.getItem("accessToken")) return <Redirect to="/login" />
  return (
    <>
      <Header />
        {props.children}
      <Footer />
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

