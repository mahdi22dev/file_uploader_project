"use client";
import React, { useContext, useState } from "react";
import styles from "./context.module.css";
import { usePathname } from "next/navigation";

const GlobalContext = React.createContext();
const ContextProvidor = ({ children }) => {
  const pathname = usePathname();
  const [themeToggle, setThemeToggle] = useState("dark");
  const [fileContext, setFileContext] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setThemeToggle((prev) => {
      return prev == "dark" ? "white" : "dark";
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        setThemeToggle,
        toggleMode,
        themeToggle,
        fileContext,
        setFileContext,
        loading,
        setLoading,
        pathname,
      }}
    >
      {/* theme providor */}
      <main
        className={`${styles.theme} ${
          themeToggle === "dark" ? styles.dark : styles.white
        }`}
      >
        {children}
      </main>
    </GlobalContext.Provider>
  );
};

// make sure use the global context for less code

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, ContextProvidor };
