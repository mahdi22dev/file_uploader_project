import styled from "./page.module.css";
import Link from "next/link";
import FeaturedFirstPost from "@/components/blog/featured/FeaturedFirstPost";
import FeaturedPosts from "@/components/blog/featured/FeaturedPosts";
import { FetchFeaturedPosts } from "@/lib/utils/utils";

export const fetchCache = "force-cache";

export default async function Page({}) {
  const FeaturedPostsList = await FetchFeaturedPosts();
  return (
    <>
      <main className={styled.container}>
        <p>Our blog</p>

        <div className={styled.more}>
          <Link href={"./blog/1"}> All Blog Posts</Link>
        </div>
        {/* first featured post */}
        <p>latest posts</p>
        <div className={styled.featured}>
          <div className={styled.first_featured_post}>
            <FeaturedFirstPost />
          </div>
          {/* rest of posts */}
          <div className={styled.left_featured_posts_container}>
            {FeaturedPostsList.items.map((post) => {
              return <FeaturedPosts key={post.fields.slug} post={post} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
