import Post from "@/component/blog/Post";
import styled from "../page.module.css";
export default async function Page() {
  return (
    <>
      <main className={styled.posts}>
        <h2>
          <Post />
        </h2>
      </main>
    </>
  );
}
