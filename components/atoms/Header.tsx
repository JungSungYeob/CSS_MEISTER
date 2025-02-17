import Link from 'next/link';
import NotReady from './NotReady';

export const Header = () => {
  return (
    <>
      <div className='flex justify-center w-full h-16 fixed top-0 left-0 z-[1000] px-4 xl:px-0 backdrop-blur-md'>
        <div className='flex items-center justify-between w-full max-w-5xl relative'>
          <div>
            <div id='logo' className='relative text-2xl font-bold'>
              <a href={'/'} className='animate-underline hidden md:block '>
                Meister-J.com
              </a>
              <a
                href={'/'}
                className='text-xl font-extrabold dark:font-extrabold md:hidden relative dark:bg-white dark:text-black bg-black text-white rounded-full py-2 px-3'
              >
                J
              </a>
            </div>
          </div>
          <div className='flex gap-3 items-center text-xl font-bold'>
            <span className='relative'>
              <Link href='/about' className='animate-underline cursor-pointer'>
                about
              </Link>
            </span>
            <span className='relative'>
              <Link href='/posts' className='animate-underline cursor-pointer'>
                posts
              </Link>
            </span>

            <span className='relative'>
              {/* <Link
                href='guestbook'
                className='animate-underline cursor-pointer'
              >
                guestbook
              </Link> */}
              <NotReady>guestbook</NotReady>
            </span>
            <span className='relative'>
              {/* <Link
                href='playground'
                className='animate-underline cursor-pointer'
              >
                playground
              </Link> */}
              <NotReady>playground</NotReady>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
