import PostCard from '@/components/atoms/PostCard';
import Intro from '@/components/molecules/Intro';
import { getAllPostSlugs } from '@/lib/markUp';

export default function Home() {
  const posts = getAllPostSlugs();
  return (
    <>
      <Intro />
      <div className='px-2'>
        <div id='target1' className='mt-10'>
          <h1 className='text-4xl font-medium'>Recent Post</h1>
          <div>
            {posts.slice(-3).map((item, i) => (
              <PostCard post={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
