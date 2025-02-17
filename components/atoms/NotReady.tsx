'use client';

import Swal from 'sweetalert2';
import { ButtonHTMLAttributes } from 'react';

export default function NotReady({
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const handleNotReady = () => {
    Swal.fire({
      title: 'Not Ready',
      text: '아직 준비되지 않았습니다.',
      icon: 'error',
      confirmButtonText: '확인',
    });
  };
  return (
    <button
      onClick={handleNotReady}
      className='animate-underline cursor-pointer'
    >
      {children}
    </button>
  );
}
