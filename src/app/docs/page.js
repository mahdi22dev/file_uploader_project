import { getInfo, postFile } from "@/lib/utils/data";
import Highlighter from "./SyntaxHighlighter/Highlighter";
import styled from "./page.module.css";

export default async function Page() {
  return (
    <>
      <main className={styled.container}>
        <h2>API Documentation</h2>

        <div className='sub-title'>
          API endpoint: https://file-uploader-project.vercel.app/api
        </div>

        <div className={styled.syntax}>
          <Highlighter
            link={postFile.link}
            requestType={postFile.requestTpe}
            response={postFile.response}
          />
        </div>

        <div className={styled.syntax}>
          <Highlighter
            link={getInfo.link}
            requestType={getInfo.requestTpe}
            response={getInfo.response}
          />
        </div>
      </main>
    </>
  );
}
