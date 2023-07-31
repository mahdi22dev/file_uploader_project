import { FetchAllPosts, FetchPaginationPosts } from "@/lib/utils/utils";
import styled from "./posts.module.css";
import PostCard from "@/components/blog/post_card/PostCard";
import { notFound } from "next/navigation";
import Pagination from "@/components/pagination/Pagination";

export const dynamicParams = false;

export async function generateStaticParams({ params }) {
  const data = await FetchAllPosts();
  const itemsPerPage = 6;
  const pages = Math.ceil(data.items.length / itemsPerPage);

  const NewData = Array.from({ length: pages }, (_, idnex) => {
    const myindex = idnex + 1;
    return { pageid: myindex.toString() };
  });
  return NewData;
}

export default async function Page({ params }) {
  const id = params.pageid;
  const itemsPerPage = 6;
  let skip = itemsPerPage * id - 6;
  let limit = 6;

  const data = await FetchPaginationPosts(skip, id, limit);
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
        <Pagination pageN={params.pageid} />
      </main>
    </>
  );
}
