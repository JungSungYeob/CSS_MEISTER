'use client';

import { Post } from '@/type/post';
import { useRouter } from 'next/navigation';

export default function PostCard({ post }: { post: Post }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/posts/${post.slug}`);
  };
  return (
    <>
      <div
        className='rounded-xl p-4 dark:hover:bg-zinc-600 hover:bg-zinc-200 transition-colors duration-100 h-40 overflow-hidden w-full cursor-pointer'
        onClick={handleClick}
      >
        <h3 className='text-xl font-bold'>{post.data.title}</h3>
        <p className='h-[70px] w-60 break-keeps overflow-y-hidden line-clamp-3'>
          {post.content}
        </p>
        <div className='flex flex-row justify-between mt-2'>
          <p>{post.data.date}</p>
          <p>{post.data.category}</p>
        </div>
      </div>
    </>
  );
}
