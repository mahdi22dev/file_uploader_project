"use client";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";
import styled from "./navbar.module.css";
import { SlMenu, SlClose } from "react-icons/sl";
import { motion } from "framer-motion";
import { navbarVariants } from "@/variants/variants";

const Navbar = () => {
  const [activeNavbar, setActiveNvabar] = useState(false);

  const toggleNavbar = () => {
    setActiveNvabar(!activeNavbar);
  };

  return (
    <div className={styled.container}>
      <button
        onClick={toggleNavbar}
        className={`${styled.icon} ${styled.close}`}
      >
        {activeNavbar ? <SlClose /> : <SlMenu />}
      </button>

      <motion.div
        variants={navbarVariants}
        initial={"closed"}
        animate={activeNavbar ? "open" : "closed"}
        className={` ${styled.navbar_container}`}
      >
        <ul className={styled.nav_links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/docs"}>API</Link>
          <Link href={"/blog"}>blog</Link>
          <Link href={"/contact"}>contact</Link>
        </ul>
        <div className={styled.theme}>
          <ThemeToggle />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
