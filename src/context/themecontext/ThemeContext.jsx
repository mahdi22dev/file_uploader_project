"use client";
import React, { useContext, useState } from "react";
import styles from "./context.module.css";
import { usePathname } from "next/navigation";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

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
        <ProgressBar
          height='4px'
          color='#fffd00'
          options={{ showSpinner: false }}
          shallowRouting
        />
        {children}
      </main>
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, ContextProvidor };
