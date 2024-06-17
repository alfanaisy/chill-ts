import { ReactNode, useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useMediaQuery } from 'usehooks-ts';

interface Props {
  children: ReactNode;
}

const HorizontalScroll = ({ children }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [childWidth, setChildWidth] = useState(0);

  useEffect(() => {
    const gapSize: number = isMobile ? 12 : 20;
    if (scrollContainerRef.current && scrollContainerRef.current.firstChild) {
      const elementItem = scrollContainerRef.current.firstElementChild
        ?.firstElementChild as HTMLElement;

      setChildWidth(elementItem.offsetWidth + gapSize);
    }
  }, [children, isMobile]);

  const scroll = (scrollAmount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={`relative`}>
      <div
        ref={scrollContainerRef}
        className={`relative w-full text-white overflow-x-scroll overflow-y-hidden scroll-smooth snap-x hide-scrollbar`}
      >
        <div className={`w-fit h-full flex gap-3 md:gap-5`}>{children}</div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white bg-opacity-55 rounded-full text-3xl"
        onClick={() => {
          scroll(-childWidth);
        }}
      >
        <span>
          <BiChevronLeft />
        </span>
      </button>
      <button
        className="absolute top-1/2 right-0 translate-x-1/2 bg-white bg-opacity-55 rounded-full text-3xl"
        onClick={() => {
          scroll(childWidth);
        }}
      >
        <span>
          <BiChevronRight />
        </span>
      </button>
    </div>
  );
};

export default HorizontalScroll;
