import React from "react";
import styled from ".//pagination.module.css";
import { FetchAllPosts } from "@/lib/utils/utils";
import Link from "next/link";

export default async function Pagination({ pageN }) {
  const data = await FetchAllPosts();
  const itemsPerPage = 4;
  const pages = Math.ceil(data.items.length / itemsPerPage);
  const NewData = Array.from({ length: pages }, (_, idnex) => {
    const myindex = idnex + 1;
    return { pageid: myindex.toString() };
  });

  return (
    <div className={styled.container}>
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
    </div>
  );
}
