"use client";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";
import React from "react";
import { BsFillMoonFill, BsLightbulbFill } from "react-icons/bs";
import styled from "./theme.module.css";

const ThemeToggle = () => {
  const { toggleMode, themeToggle } = useGlobalContext();
  return (
    <div onClick={toggleMode} className={styled.container}>
      {themeToggle == "dark" ? <BsLightbulbFill /> : <BsFillMoonFill />}
    </div>
  );
};

export default ThemeToggle;
