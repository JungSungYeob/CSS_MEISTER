// import { Project1 as p1 } from '@/data/project';
import { myProjectProps } from '@/type/project';
import { FaLink } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import SkillChip from '../atoms/SkillChip';

const MyProject = (project: myProjectProps) => {
  return (
    <div className='flex flex-col gap-5 border-b'>
      <div>
        <div className='flex flex-row gap-3 items-center pb-2'>
          <Image
            src={project.projectImg}
            alt='프로젝트 이미지'
            width={60}
            height={60}
            className='rounded-lg'
          />
          <h1 className='text-3xl font-semibold text-gray-700 dark:text-gray-300'>
            {project.title}
          </h1>
        </div>
        <h3 className='text-xl font-semibold'>
          {project.subtitle}
          <small className='italic'>({project.date})</small>
        </h3>
      </div>
      <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold'>Skills</h4>
        <div className='md:col-span-4 col-span-2 grid grid-cols-2 md:grid-cols-4 gap-5'>
          {project.skills.map((item, i) => (
            <SkillChip
              category={item.category}
              name={item.name}
              src={item.src}
              key={i}
            />
          ))}
        </div>
      </article>
      <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold'>Link</h4>
        <span className='relative w-fit inline-flex items-center gap-2 md:col-span-4 col-span-2'>
          <FaLink />
          <Link
            href={project.githubLink}
            className='animate-underline whitespace-nowrap'
          >
            {project.githubLinkTitle}
          </Link>
        </span>
      </article>
      <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold'>Role</h4>
        <ul className='md:col-span-4 col-span-2 list-disc'>
          <li className='break-keep font-semibold text-lg'>
            {project.role.name}
          </li>
          <ul className='list-[circle] ml-5 flex flex-col gap-1'>
            {project.role.detail.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </ul>
      </article>
      <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold'>Service</h4>
        <div className='md:col-span-4 col-span-2 flex flex-col gap-3'>
          {project.service.map((item, i) => (
            <ul className='list-disc' key={i}>
              <li className='font-semibold text-lg break-keep w-fit'>
                {item.title}
              </li>
              <ul className='list-[circle] ml-5 flex flex-col gap-1'>
                {item.content.map((content, index) => (
                  <li
                    dangerouslySetInnerHTML={{ __html: content }}
                    className='break-keep'
                    key={index}
                  ></li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </article>
      <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold overflow-x-hidden'>
          Achievement
        </h4>
        <div className='md:col-span-4 col-span-2 flex flex-col gap-3'>
          {project.achievement.map((item, i) => (
            <ul className='list-disc flex flex-col' key={i}>
              <li className='font-semibold text-lg break-keep highlight w-fit'>
                {item.title}
              </li>
              <ul className='list-[circle] ml-5 flex flex-col gap-1'>
                {item.content.map((content, index) => (
                  <li
                    dangerouslySetInnerHTML={{ __html: content }}
                    className='break-keep'
                    key={index}
                  ></li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </article>
      <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold'>Architecture</h4>
        <div className='md:col-span-4 col-span-2 flex flex-col'>
          <Image
            src={project.architectureImg}
            alt='아키텍처 이미지'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            className={cn('rounded-xl')}
            loading='lazy'
          />
          <p>{project.architectureDetail}</p>
        </div>
      </article>
      {/* <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold'>Evaluation</h4>
      </article> */}
      <article className='grid md:grid-cols-5 grid-cols-3 items-start'>
        <h4 className='text-lg col-span-1 font-semibold'>Awards</h4>
        <p className='whitespace-nowrap md:col-span-4 col-span-2'>
          {project.awards}
        </p>
      </article>
    </div>
  );
};
export default MyProject;
