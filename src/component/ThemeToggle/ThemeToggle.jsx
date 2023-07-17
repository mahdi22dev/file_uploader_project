"use client";
import { useGlobalContext } from "@/context/ThemeContext";
import React from "react";

const ThemeToggle = () => {
  const { toogleMode } = useGlobalContext();
  return (
    <button
      // style={{ width: "200px", backgroundColor: "red" }}
      onClick={toogleMode}
    >
      change theme
    </button>
  );
};

export default ThemeToggle;
