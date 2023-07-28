// import { FetchOnePost } from "@/lib/utils/utils";
import styled from "./posts.module.css";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import HighLight from "@/component/blog/post/HighLight";
import { client } from "@/lib/contentful";

export const revalidate = 22222222;

export const FetchOnePost = async (slug) => {
  try {
    const MyBlogData = await client.getEntries({
      content_type: "nextBlog",
      "fields.slug": slug,
    });
    return MyBlogData;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function Page({ params }) {
  const slug = params.postid;
  const post = await FetchOnePost(slug);
  console.log(post);

  const cover = `https://${post.items[0].fields.image.fields.file.url}`;
  const alt = post.items[0].fields.image.fields.file.title;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className={styled.span}>{text}</span>,
      [MARKS.CODE]: (text) => <HighLight>{text}</HighLight>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={styled.paragraph}>{children}</p>
      ),
    },
  };

  return (
    <>
      <main className={styled.container}>
        <div className={styled.post}>
          {/* image component */}
          <div className={styled.cover}>
            <Image fill src={cover} alt={alt} />
          </div>
          <div>profile info</div>
          {post.items.map((item) => {
            return documentToReactComponents(item.fields.content, options);
          })}
        </div>
      </main>
    </>
  );
}
