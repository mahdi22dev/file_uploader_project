"use client";
import React, { useContext, useState } from "react";
import styles from "./theme.module.css";

const ThemeContext = React.createContext();
const ThemeProvider = ({ children }) => {
  const [themeToggle, setThemeToggle] = useState("dark");
  const toogleMode = () => {
    setThemeToggle((prev) => {
      return prev == "dark" ? "white" : "dark";
    });
  };
  return (
    <ThemeContext.Provider
      value={{
        setThemeToggle,
        toogleMode,
      }}
    >
      <main
        className={`${styles.theme} ${
          themeToggle === "dark" ? styles.dark : styles.white
        }`}
      >
        {children}
      </main>
    </ThemeContext.Provider>
  );
};

// make sure use the global context for less code

export const useGlobalContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider };
