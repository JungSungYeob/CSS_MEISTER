import { mySkillsProps } from '@/type/aboutMe';
import Image from 'next/image';

export default function SkillChip({ src, name }: mySkillsProps) {
  return (
    <div className='flex flex-row items-center'>
      <Image src={src} alt='skill Image' width={24} height={24} />
      <span className='ml-2 relative'>
        <p className='animate-underline'>{name}</p>
      </span>
    </div>
  );
}
