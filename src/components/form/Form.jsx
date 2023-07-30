"use client";
import React, { useEffect, useState } from "react";
import styled from "../../app/contact/contact.module.css";
import Sent from "./Sent";
import { useRouter } from "next/navigation";
const Form = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const router = useRouter();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setSent(true);
  };
  useEffect(() => {
    let timeoutId;
    const redirect = () => {
      setSent(false);
      router.refresh();
    };
    if (sent) {
      timeoutId = setTimeout(redirect, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [sent]);

  return (
    <form onSubmit={handleSubmit} netlify>
      {sent ? (
        <Sent />
      ) : (
        <>
          <div className={styled.form_control}>
            <label className={styled.label} htmlFor='name'>
              Name:
            </label>
            <input
              className={styled.input}
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styled.form_control}>
            <label className={styled.label} htmlFor='email'>
              Email:
            </label>
            <input
              className={styled.input}
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div lassName={styled.form_control}>
            <label className={styled.label} htmlFor='message'>
              Message:
            </label>
            <textarea
              className={styled.textarea}
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={10}
              required
            />
          </div>
          <button className={styled.button}>
            <span>Contact</span>
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
