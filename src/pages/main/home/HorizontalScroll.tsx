import { ReactNode, useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Props {
  children: ReactNode;
  height: string;
}

const HorizontalScroll = ({ children, height }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [childWidth, setChildWidth] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current && scrollContainerRef.current.firstChild) {
      const elementItem = scrollContainerRef.current.firstElementChild
        ?.firstElementChild as HTMLElement;
      setChildWidth(elementItem.offsetWidth + 20);
    }
  }, [children]);

  const scroll = (scrollAmount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className={`relative h-${height} w-full text-white overflow-x-scroll overflow-y-clip whitespace-nowrap scroll-smooth hide-scrollbar`}
      >
        <div className={`w-fit h-full flex gap-5`}>{children}</div>
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
