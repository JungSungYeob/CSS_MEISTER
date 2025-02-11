import Intro from '@/components/molecules/Intro';

export default function Home() {
  return (
    <>
      <div className='pt-32'>
        <Intro />
      </div>
      <div id='RecentPosts' className='mt-10'>
        <h1 className='text-4xl font-medium'>Recent Post</h1>
      </div>
    </>
  );
}
