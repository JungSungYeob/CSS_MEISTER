import { Post, PostData } from '@/type/post';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const contentsDir = path.join(process.cwd(), 'contents');

export function getPostData(directory: string): Post {
  const fullPath = path.join(contentsDir, directory, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    data: data as PostData,
    content,
    slug: directory,
  };
}

export function getAllPostSlugs(): Post[] {
  const posts: Post[] = [];
  const directories = fs.readdirSync(contentsDir);
  directories.map((directory) => {
    const post = getPostData(directory);
    const plainContent = extractPlainText(post.content);
    posts.push({ ...post, content: plainContent });
  });

  return posts;
}

function extractPlainText(markdown: string): string {
  const tree = unified().use(remarkParse).parse(markdown);
  let plainText = '';
  visit(tree, (node) => {
    // 텍스트 노드만 추출
    if (node.type === 'text') {
      plainText = plainText + node.value + ' ';
    }
  });

  return plainText.trim();
}
