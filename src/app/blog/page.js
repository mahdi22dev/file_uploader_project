import styled from "./page.module.css";
import Link from "next/link";
import FeaturedFirstPost from "@/component/blog/featured/FeaturedFirstPost";
import FeaturedPosts from "@/component/blog/featured/FeaturedPosts";
import { FetchFeaturedPosts } from "@/lib/utils/utils";

export default async function Page({}) {
  const FeaturedPostsList = await FetchFeaturedPosts();
  return (
    <>
      <main className={styled.container}>
        <p>Our blog</p>

        <div className={styled.featured}>
          <div className={styled.first_featured_post}>
            <FeaturedFirstPost />
          </div>

          {/* componenet */}
          <div className={styled.left_featured_posts_container}>
            {FeaturedPostsList.items.map((post) => {
              return <FeaturedPosts post={post} />;
            })}
          </div>
        </div>
        <div className={styled.more}>
          <Link href={"./blog/posts"}> All blog posts</Link>
        </div>
      </main>
    </>
  );
}
