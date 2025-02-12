import PostCard from '@/components/atoms/PostCard';
import { getAllPostSlugs } from '@/lib/markUp';

export default function Page() {
  const posts = getAllPostSlugs();
  return (
    <>
      <div>
        {posts.map((item, i) => (
          <PostCard post={item} key={i} />
        ))}
      </div>
    </>
  );
}
