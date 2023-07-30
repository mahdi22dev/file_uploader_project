import React from "react";
import { SiSpeedtest, SiGnuprivacyguard } from "react-icons/si";
import { SlLock } from "react-icons/sl";
import styled from "./infosection.module.css";
import Info from "./Info";

const info = [
  {
    id: 1,
    title: "Fast",
    icon: SiSpeedtest,
    text: "Experience blazing-fast file transfers and limitless download speeds with our cutting-edge servers and high-capacity network infrastructure.",
    color: "#C51605",
  },
  {
    id: 2,
    title: "Secure",
    icon: SlLock,
    text: "we use the latest in encryption technology to keep your files and data safe. All pages and file transfers are encrypted ",
    color: "#75C2F6",
  },
  {
    id: 3,
    title: "Privacy",
    icon: SiGnuprivacyguard,
    text: "At our core, we prioritize the privacy of our users, adhering to a strict policy of never storing or selling any personal data",
    color: "#fff5cc",
  },
];

const InfoSection = () => {
  return (
    <section className={styled.container}>
      <div className={styled.info_container}>
        {info.map((item) => {
          return <Info key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default InfoSection;
