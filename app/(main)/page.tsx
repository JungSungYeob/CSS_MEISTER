import Intro from '@/components/molecules/Intro';

export default function Home() {
  return (
    <>
      <Intro />
      <div className='px-2'>
        <div id='target1' className='mt-10'>
          <h1 className='text-4xl font-medium'>Recent Post</h1>
        </div>
      </div>
    </>
  );
}
