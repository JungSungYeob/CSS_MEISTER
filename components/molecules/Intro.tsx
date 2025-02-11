import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ScrollDownButton from '../atoms/ScrollDownButton';
import WhoAmI from '../atoms/WhoAmI';

export default function Intro() {
  return (
    <>
      <div className='w-full flex justify-center relative'>
        <Image
          src={'/images/BG_Image.png'}
          alt='인트로이미지'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          className={cn('rounded-xl')}
          loading='lazy'
        />
        <span
          className={cn(
            'w-full h-full absolute bg-black/50 backdrop-blur-md rounded-xl'
          )}
        />
        <ScrollDownButton targetId='target1' />
        <div className='absolute md:bottom-10 md:right-10 bottom-3 right-3 text-white text-xl z-[101]'>
          <a
            href='https://github.com/JungSungYeob'
            className='flex flex-row items-center gap-3 cursor-pointer'
          >
            <FaGithub color='white' size={30} />
            <span className='relative'>
              <h3 className='animate-underline'>Github</h3>
            </span>
          </a>
        </div>

        <Image
          src={'/images/OnlyMe.png'}
          alt='인트로이미지'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          className='rounded-xl absolute z-[100]'
          loading='lazy'
        />
        <WhoAmI />
      </div>
    </>
  );
}
