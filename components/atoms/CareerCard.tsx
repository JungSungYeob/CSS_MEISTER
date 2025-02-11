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
      <article className='flex flex-row w-full py-5 border-l-4 border-white items-center'>
        <FaCircle className='relative -left-2' />
        <p className='md:min-w-10 ml-2 w-full md:max-w-40 max-w-24 text-gray-500 text-lg'>
          {date}
        </p>
        <div className='flex flex-col w-full pl-2'>
          <span className='flex flex-col md:flex-row md:gap-2 gap-0 md:items-center w-full'>
            <p className='text-base font-bold'>{en}</p>
            <p className='text-sm text-gray-500'>{kr}</p>
          </span>
          <p className='break-words w-[calc(100%-50px)]'>{info}</p>
        </div>
      </article>
    </>
  );
};

export default CareerCard;
