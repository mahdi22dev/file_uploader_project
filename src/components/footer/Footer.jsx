"use client";
import React from "react";
import styled from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const links = [
  { id: 1, name: "privacy", link: "/privacy" },
  { id: 2, name: "api", link: "/docs" },
  { id: 2, name: "contact us", link: "/contact" },
];
const social = [
  {
    id: 1,
    icon: FaFacebookF,
    name: "facebook",
    link: "https://www.facebook.com",
  },
  { id: 2, icon: FaTwitter, name: "twitter", link: "https://twitter.com/" },
];
const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styled.footer}>
      <div className={styled.info}>
        <div
          className={styled.logo}
          onClick={() => {
            router.push("/");
          }}
        >
          <div className={styled.image}>
            <Image src={"/logo.png"} fill />
          </div>
          <p className={styled.title}>Uploadupia</p>
        </div>

        <div className={styled.links}>
          {links.map((link) => {
            return (
              <Link className={styled.link} id={link.id} href={link.link}>
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styled.divider}></div>
      <div className={styled.social}>
        {social.map((icon) => {
          return (
            <div id={icon.id} className={styled.circle}>
              <Link
                target='_blank'
                key={icon.id}
                className={styled.link}
                href={icon.link}
              >
                <icon.icon />
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styled.copy}>
        <p>
          &copy; {new Date().getFullYear()} Uploadupia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
