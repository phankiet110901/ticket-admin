import React from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 99999
      }}
    >
      <Spin size="large"/>
    </div>
  );
}
