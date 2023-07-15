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
      toggle dark mode
    </button>
  );
};

export default ThemeToggle;
