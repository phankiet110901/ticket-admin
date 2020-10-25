import React from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";

export default function modal(props) {
  const { title, message, isOpen } = props;

  if (isOpen) {
    Modal.error({
      title: title,
      content: message,
    });
  }
  return <></>;
}
