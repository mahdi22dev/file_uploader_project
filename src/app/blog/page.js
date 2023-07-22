import Post from "@/component/blog/Post";
import styled from "./page.module.css";
import Link from "next/link";
export default async function Page({}) {
  return (
    <>
      <main className={styled.container}>
        <p>our blog</p>
        <h2>Latest Blogs</h2>
        <div className={styled.featured}>
          <div className={styled.first_featured_post}>first_featured_post</div>
          <div className={styled.left_featured_posts}>
            <p>first</p>
            <p>second</p>
            <p>third</p>
          </div>
        </div>
        <Link href={"./blog/posts"}>all posts</Link>
      </main>
    </>
  );
}
