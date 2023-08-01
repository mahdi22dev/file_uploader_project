"use client";
import React from "react";
import styled from ".//pagination.module.css";
import { FetchAllPosts } from "@/lib/utils/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export default async function Pagination({ pageN, total }) {
  const itemsPerPage = 6;
  const pages = Math.ceil(total / itemsPerPage);
  const NewData = Array.from({ length: pages }, (_, idnex) => {
    const myindex = idnex + 1;
    return { pageid: myindex.toString() };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{
        opacity: 1,
        y: 0,
        ease: "linear",
        transition: {
          type: "spring",
          stiffness: 50,
          y: { duration: 0.5 },
          opacity: { duration: 0.9 },
        },
      }}
      className={styled.container}
    >
      {NewData.map((page) => {
        return (
          <Link
            key={page.pageid}
            className={
              pageN == page.pageid
                ? `${styled.pagination_btns} ${styled.active_btn}`
                : styled.pagination_btns
            }
            href={`/blog/${page.pageid}`}
          >
            {page.pageid}
          </Link>
        );
      })}
    </motion.div>
  );
}
