import CareerCard from '@/components/atoms/CareerCard';
import HonorCard from '@/components/atoms/HonorCard';
import SkillChip from '@/components/atoms/SkillChip';
import Intro from '@/components/molecules/Intro';
import MyProject from '@/components/molecules/MyProject';
import { honorsAndAwards, mySkills, myTools, timestamps } from '@/data/aboutMe';
import { Project1 } from '@/data/project';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function AboutMe() {
  return (
    <>
      <Intro />
      <div id='target1' className='mt-10 pb-20'>
        <article id='info'>
          <h2 className='text-3xl font-bold pb-2'>Profile</h2>
          <div className='flex flex-col gap-2'>
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
          </div>
        </article>
        <div id='introduce' className='flex flex-row border-b-2 justify-around'>
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
            <h3 className='mt-10 md:text-base text-xs break-keep'>
              &quot;맡은 업무를 책임지고
              <br /> 끝까지 해내는 개발자입니다&quot;
            </h3>
          </article>
        </div>
        <article className='border-b-2 pb-2'>
          <h1 className='text-4xl w-full text-center pb-2'>Skills & Tools</h1>
          <h3 className='text-xl font-semibold pb-2'>Skills</h3>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
            {mySkills.map((item, i) => (
              <SkillChip
                category={item.category}
                name={item.name}
                src={item.src}
                key={i}
              />
            ))}
          </div>
          <h3 className='text-xl font-semibold py-2'>Tools</h3>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
            {myTools.map((item, i) => (
              <SkillChip
                category={item.category}
                name={item.name}
                src={item.src}
                key={i}
              />
            ))}
          </div>
        </article>
        <article className='flex flex-col items-center w-full pt-10 border-b-2 pb-2'>
          <h1 className='text-4xl mb-2'>Careers & Activities</h1>
          <div className='w-full flex-col flex items-start'>
            {timestamps.map((item, i) => (
              <CareerCard
                date={item.date}
                kr={item.kr}
                en={item.en}
                info={item.info}
                key={i}
              />
            ))}
          </div>
        </article>
        <article className='flex flex-col items-center w-full pt-10 pb-10 border-b-2'>
          <h1 className='text-4xl mb-2'>Honors & Awards</h1>
          <div className='w-full flex-col flex items-start'>
            {honorsAndAwards.map((item, i) => (
              <HonorCard
                date={item.date}
                kr={item.kr}
                en={item.en}
                prize={item.prize}
                organization={item.organization}
                key={i}
              />
            ))}
          </div>
        </article>
        <article>
          <h1 className='text-4xl mb-2 w-full text-center'>My Projects</h1>
          <MyProject {...Project1} />
        </article>
      </div>
    </>
  );
}
