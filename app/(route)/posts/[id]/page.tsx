import { Post } from '@/type/post';
import { remark } from 'remark';
import breaks from 'remark-breaks';
import html from 'remark-html';
import { getPostData } from '@/lib/markUp';

async function fetchPost(id: string): Promise<Post & { contentHtml: string }> {
  const postData = getPostData(id);

  // Markdown -> HTML 변환
  const processedContent = await remark()
    .use(breaks)
    .use(html)
    .process(
      postData.content.replace(
        /!\[(.*?)\]\((.*?)\)/g,
        (match, altText, imgPath) => {
          const absolutePath = `/api/images/${id}/${imgPath}`;
          return `![${altText}](${absolutePath})`;
        }
      )
    );

  return {
    ...postData,
    contentHtml: processedContent.toString(),
  };
}

type pageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: pageProps) {
  const dir = await params;
  const postData = await fetchPost(dir.id);
  return (
    <>
      <article className='markdownPost flex flex-col gap-1 pb-32'>
        <blockquote>{postData.data.category}</blockquote>
        <h1>{postData.data.title}</h1>
        <p>{postData.data.date}</p>
        <br />
        <hr />
        <br />
        <div
          className='flex flex-col gap-5'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  );
}
