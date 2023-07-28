import { FetchAllPosts, FetchPaginationPosts } from "@/lib/utils/utils";
import styled from "./posts.module.css";
import PostCard from "@/component/blog/post_card/PostCard";
import { notFound } from "next/navigation";
import pagination from "../../../component/pagination/pagination.module.css";
import Link from "next/link";
import Pagination from "@/component/pagination/Pagination";

export const dynamicParams = false;

export async function generateStaticParams({ params }) {
  const data = await FetchAllPosts();
  const itemsPerPage = 4;
  const pages = Math.ceil(data.items.length / itemsPerPage);
  const NewData = Array.from({ length: pages }, (_, idnex) => {
    const myindex = idnex + 1;
    return { pageid: myindex.toString() };
  });
  return NewData;
}

export default async function Page({ params }) {
  const id = params.pageid;
  const itemsPerPage = 4;
  let skip = itemsPerPage * id - 4;

  const data = await FetchPaginationPosts(skip, id);
  if (!data || !params.pageid) {
    return notFound();
  }

  return (
    <>
      <main className={styled.container}>
        <div className={styled.posts}>
          {data?.items.map((post) => {
            return <PostCard key={post.fields.slug} post={post} />;
          })}
        </div>
        {/* pagination component */}
        <Pagination pageN={params.pageid} />
      </main>
    </>
  );
}
