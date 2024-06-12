import { ReactNode, useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Props {
  children: ReactNode;
  height: string;
}

const HorizontalScroll = ({ children, height }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [childWidth, setChildWidth] = useState(0);
  console.log(height);

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
    <div className="relative p-2 bg-green-600">
      <div
        ref={scrollContainerRef}
        className={`min-h-${height} w-full text-white overflow-x-scroll overflow-y-hidden bg-blue-700 p-2 whitespace-nowrap scroll-smooth hide-scrollbar`}
      >
        <div
          className={`w-fit h-fit flex gap-5 bg-orange-600 p-2 overflow-y-hidden`}
        >
          {children}
        </div>
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
