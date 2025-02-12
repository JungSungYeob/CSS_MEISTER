'use client';

import { FaChevronDown } from 'react-icons/fa';

type ScrollDownButtonProps = {
  targetId: string;
};

export default function ScrollDownButton({ targetId }: ScrollDownButtonProps) {
  const handleScrollDownClick = () => {
    const targetElement = document.getElementById(targetId);
    const rect = targetElement?.getBoundingClientRect();
    const scrollY = window.scrollY - 64 + (rect?.top ?? 0);
    window.scrollTo({ behavior: 'smooth', top: scrollY, left: 0 });
  };

  return (
    <>
      <FaChevronDown
        className='absolute bottom-2 animate-floating cursor-pointer z-[101]'
        size={30}
        color='white'
        onClick={handleScrollDownClick}
      />
    </>
  );
}
