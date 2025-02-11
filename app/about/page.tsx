import Intro from '@/components/molecules/Intro';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function AboutMe() {
  return (
    <>
      <Intro />
      <div id='target1' className='mt-10'>
        <article id='info'>
          <h3>
            <strong>Email: </strong>dev.sungyeob@gmail.com
          </h3>
          <h3>
            <strong>Residence: </strong>Incheon, South Korea
          </h3>
          <h3>
            <strong>BachelorDegree: </strong>
            Kwangwoon Univ. Computer Information Engineering (2019.03-2025.02)
          </h3>
        </article>
        <div
          id='introduce'
          className='flex flex-row border-b-2 mb-32 justify-around'
        >
          <Image
            src={'/images/JungSungYeob.png'}
            alt=''
            width={0}
            height={0}
            className={cn(
              'rounded-xl w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain'
            )}
            loading='lazy'
            unoptimized
          />
          <article className='p-5 flex flex-col'>
            <h2 className='text-3xl mt-10'>정 성 엽</h2>
            <h2 className='text-2xl'>SungYeob Jung</h2>
            <h3 className='mt-10'>
              &quot;맡은 업무를 책임지고
              <br /> 끝까지 해내는 개발자입니다&quot;
            </h3>
          </article>
        </div>
      </div>
    </>
  );
}
