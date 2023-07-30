import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styled from "../../app/contact/contact.module.css";
const Sent = () => {
  return (
    <>
      <div className={styled.sent}>
        <FaCheckCircle />
        <p>thank you for this email we will reach soon as possible</p>
      </div>
    </>
  );
};

export default Sent;
