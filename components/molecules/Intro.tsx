import Image from 'next/image';
import { cn } from '@/lib/utils';
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
        />
        <span
          className={cn(
            'w-full h-full absolute bg-black/50 backdrop-blur-md rounded-xl'
          )}
        />
        <Image
          src={'/images/OnlyMe.png'}
          alt='인트로이미지'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          className='rounded-xl absolute z-[100]'
        />
        <WhoAmI />
      </div>
    </>
  );
}
