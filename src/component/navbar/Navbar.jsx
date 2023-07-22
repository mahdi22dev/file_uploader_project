"use client";
import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";
import styled from "./navbar.module.css";
import { SlMenu, SlClose } from "react-icons/sl";
import { motion } from "framer-motion";
import { navbarVariants } from "@/variants/variants";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";
import Image from "next/image";
import logo from "./logo.png";

const Navbar = () => {
  const [activeNavbar, setActiveNvabar] = useState(false);
  const { pathname } = useGlobalContext();
  const toggleNavbar = () => {
    setActiveNvabar(!activeNavbar);
  };
  const closeNavbar = () => {
    setActiveNvabar(false);
  };
  return (
    <div className={styled.container}>
      <button
        onClick={toggleNavbar}
        className={`${styled.icon} ${styled.close}`}
      >
        {activeNavbar ? <SlClose /> : <SlMenu />}
      </button>
      <div className={styled.logo}>
        <Link href={"/"} onClick={closeNavbar}>
          <Image
            unoptimized={true}
            width={100}
            hieght={50}
            src={logo}
            alt='website logo'
          ></Image>
        </Link>
      </div>
      <motion.div
        variants={navbarVariants}
        initial={"closed"}
        animate={activeNavbar ? "open" : "closed"}
        className={` ${styled.navbar_container}`}
      >
        <ul className={styled.nav_links}>
          <Link
            href={"/"}
            className={pathname == "/" && styled.color}
            onClick={closeNavbar}
          >
            Home
          </Link>
          <Link
            href={"/docs"}
            className={pathname == "/docs" && styled.color}
            onClick={closeNavbar}
          >
            API
          </Link>
          <Link
            href={"/blog"}
            className={pathname == "/blog" && styled.color}
            onClick={closeNavbar}
          >
            blog
          </Link>
          <Link
            href={"/contact"}
            className={pathname == "/contact" && styled.color}
            onClick={closeNavbar}
          >
            contact
          </Link>
        </ul>
        <div className={styled.theme}>
          <ThemeToggle />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
