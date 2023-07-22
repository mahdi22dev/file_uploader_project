import Post from "@/component/blog/Post";
import styled from "./page.module.css";
const featured = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
  { id: 3, title: "post3" },
  { id: 4, title: "post3" },
];
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
      </main>
    </>
  );
}
