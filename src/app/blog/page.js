
import styled from "./page.module.css";
import Link from "next/link";
import FeaturedFirstPost from "@/component/blog/featured/FeaturedFirstPost";
import FeaturedPosts from "@/component/blog/featured/FeaturedPosts";

export default async function Page({}) {
  return (
    <>
      <main className={styled.container}>
        <p>our blog</p>

        <div className={styled.featured}>
          <div className={styled.first_featured_post}>
            <FeaturedFirstPost />
          </div>

          {/* componenet */}
          <div className={styled.left_featured_posts_container}>
            <FeaturedPosts />
            <FeaturedPosts />
            <FeaturedPosts />
          </div>
        </div>
        <Link href={"./blog/posts"}>all posts</Link>
      </main>
    </>
  );
}
