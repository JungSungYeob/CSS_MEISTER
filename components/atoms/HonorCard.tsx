import { FaCircle } from 'react-icons/fa6';

type HonorCardProp = {
  date: string;
  kr: string;
  en: string;
  prize: string;
  organization: string;
};

const HonorCard = ({ date, kr, en, prize, organization }: HonorCardProp) => {
  return (
    <>
      <article className='flex flex-row w-full py-5 border-l-4 dark:border-white border-black items-center'>
        <FaCircle className='relative -left-2' size={13} />
        <p className='md:min-w-10 ml-2 w-full max-w-20 text-gray-500 text-lg'>
          {date}
        </p>
        <p className='md:text-xl text-lg font-bold min-w-20'>{prize}</p>
        <div className='max-w-48 md:max-w-[530px] w-full'>
          <div className='flex flex-col w-full'>
            <span className='flex flex-col md:flex-row md:gap-2 gap-0 md:items-center w-full'>
              <p className='md:text-base text-sm font-bold break-keep overflow-x-hidden'>
                {en}
              </p>
              <p className='md:text-sm text-xs text-gray-500 break-keep'>
                {kr}
              </p>
            </span>
            <p className='break-keep w-[calc(100%-30px)] md:text-sm text-xs'>
              수상기관: {organization}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default HonorCard;
