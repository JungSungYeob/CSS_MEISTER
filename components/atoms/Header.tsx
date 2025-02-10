export const Header = () => {
  return (
    <>
      <div className='flex justify-center w-full h-16 fixed top-0 left-0 z-50 px-4 xl:px-0'>
        <div className='flex items-center justify-between w-full max-w-7xl relative'>
          <div>
            <div id='pc' className='relative text-2xl font-bold'>
              <a href={'/'} className='animate-underline hidden md:block'>
                Meister-J.com
              </a>
              <a href={'/'} className='animate-underline md:hidden relative'>
                J
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
