import { useEffect, useState } from 'react';

type TextWriterProps = {
  items: string[];
  isRandom?: boolean;
  typingInterval?: number;
  deletingInterval?: number;
  isCursor?: boolean;
  pauseTime?: number;
};

const TextWriter = ({
  items,
  isRandom = false,
  typingInterval = 50,
  deletingInterval = 50,
  isCursor = true,
  pauseTime = 3000,
}: TextWriterProps) => {
  const count = items.length;
  const [start, setStart] = useState<boolean>(true);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [seq, setSeq] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (start && displayedText.length < items[seq].length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => items[seq].slice(0, prev.length + 1));
      }, typingInterval);
    } else if (start && displayedText.length === items[seq].length) {
      timer = setTimeout(() => {
        setStart(false);
      }, pauseTime);
    } else if (!start && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingInterval);
    } else if (!start && displayedText.length === 0) {
      timer = setTimeout(() => {
        setSeq((prev) => {
          if (isRandom) {
            return Math.floor(Math.random() * count);
          }
          if (prev === count - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
        setStart(true);
      });
    }
    return () => clearTimeout(timer);
  }, [displayedText, start]);

  return (
    <>
      <>
        {displayedText}
        {isCursor && (
          <span className='h-full border-2 border-white animate-blink transition-none' />
        )}
      </>
    </>
  );
};

export default TextWriter;
