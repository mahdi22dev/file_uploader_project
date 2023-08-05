// import { FetchOnePost } from "@/lib/utils/utils";
import styled from "./posts.module.css";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import HighLight from "@/components/blog/post/HighLight";
import { client } from "@/lib/contentful";
import { FetchAllPosts } from "@/lib/utils/utils";

export const dynamicParams = true;
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

export async function generateStaticParams() {
  const data = await FetchAllPosts();

  const NewData = data.items.map((item) => {
    return { postid: item.fields.slug };
  });
  return NewData;
}

export default async function Page({ params }) {
  const slug = params.postid;
  const post = await FetchOnePost(slug);

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
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={styled.paragraph}>{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file } = node.data.target.fields;
        const url = `https://${file.url}`;
        return <Image alt='image' src={url} width={500} height={400}></Image>;
      },
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
          {post.items.map((item) => {
            return documentToReactComponents(item.fields.content, options);
          })}
        </div>
      </main>
    </>
  );
}
