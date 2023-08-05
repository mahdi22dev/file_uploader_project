"use client";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";
import styled from "./navbar.module.css";
import { SlMenu, SlClose } from "react-icons/sl";
import { motion } from "framer-motion";
import { navbarVariants } from "@/variants/variants";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";
import Image from "next/image";
import logo from "./logo2.png";

const Navbar = () => {
  const [activeNavbar, setActiveNvabar] = useState(false);
  const { pathname } = useGlobalContext();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollY = window.scrollY;

    // Define the scroll threshold where you want to change the navbar color
    const scrollThreshold = 100;

    // Check if the user has scrolled past the threshold
    if (scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setActiveNvabar(!activeNavbar);
  };
  const closeNavbar = () => {
    setActiveNvabar(false);
  };
  return (
    <div
      className={
        scrolled ? `${styled.container} ${styled.fixed}` : styled.container
      }
    >
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
