import { FetchAllPosts, FetchPaginationPosts } from "@/lib/utils/utils";
import styled from "./posts.module.css";
import PostCard from "@/component/blog/post_card/PostCard";
import { notFound } from "next/navigation";
import pagination from "../../../component/pagination/pagination.module.css";
import Link from "next/link";
import Pagination from "@/component/pagination/Pagination";

export const dynamicParams = true;

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
  const itemsPerPage = 4;
  let skip = itemsPerPage * params.pageid;

  console.log(skip);
  const data = await FetchPaginationPosts(skip);

  return (
    <>
      <main className={styled.container}>
        <div className={styled.posts}>
          {data.total == 0
            ? notFound()
            : data?.items.map((post) => {
                return <PostCard key={post.fields.slug} post={post} />;
              })}
        </div>

        {/* pagination component */}
        <Pagination pageN={params.pageid} />
      </main>
    </>
  );
}
