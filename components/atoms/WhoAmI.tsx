'use client';

import TextWriter from './TextWriter';

export default function WhoAmI() {
  const like = [
    'FrontEnd',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'CSS',
  ];
  const aboutMe = ['정성엽', 'Meister-J', '엽성만세'];
  return (
    <>
      <div className='absolute right-2 top-10 md:top-20 text-2xl flex flex-col gap-5 md:text-5xl md:right-10 text-white font-thin text-right'>
        <h1>안녕하세요!</h1>
        <h1>
          <strong className='font-bold'>
            <TextWriter items={like} />
          </strong>
          를 좋아하는
        </h1>
        <h1>
          개발자{' '}
          <strong className='font-bold'>
            <TextWriter items={aboutMe} />
          </strong>
          입니다.
        </h1>
      </div>
    </>
  );
}
