import { FaCircle } from 'react-icons/fa6';

type CareerCardProp = {
  date: string;
  kr: string;
  en: string;
  info: string;
};

const CareerCard = ({ date, kr, en, info }: CareerCardProp) => {
  return (
    <>
      <article className='flex flex-row w-full py-5 border-l-4 dark:border-white border-black items-center'>
        <FaCircle className='relative -left-2' size={13} />
        <p className='md:min-w-10 ml-2 w-full md:max-w-40 max-w-24 text-gray-500 text-lg'>
          {date}
        </p>
        <div className='max-w-64 md:max-w-[600px] w-full'>
          <div className='flex flex-col w-full pl-2'>
            <span className='flex flex-col md:flex-row md:gap-2 gap-0 md:items-center w-full'>
              <p className='md:text-base text-sm font-bold'>{en}</p>
              <p className='md:text-sm text-xs text-gray-500'>{kr}</p>
            </span>
            <p className='break-keep w-[calc(100%-50px)] md:text-sm text-xs dark:text-gray-300 text-gray-700'>
              {info}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default CareerCard;
