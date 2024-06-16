import { BiPlay } from 'react-icons/bi';
import Labels from './Labels';
import { LabelType } from '../../../../constants/labelType';

interface Props {
  image: string;
  title: string;
  isTop?: boolean;
  labels?: LabelType;
  width: string;
}

const VListItem = ({ image, isTop = false, labels, title, width }: Props) => {
  return (
    <div
      className={`relative ${width} flex items-center justify-center cursor-pointer group snap-start`}
    >
      <div className="h-full rounded-md overflow-hidden">
        <img
          src={image}
          alt="Top List"
          className="w-full h-full object-cover"
        />
      </div>
      {labels && <Labels labelType={labels} />}
      {isTop && (
        <div className="absolute top-0 right-1 md:right-3 w-8 md:w-10 h-[20%] bg-red-700 px-2 py-1 text-wrap text-center text-xs md:text-base rounded-bl-md rounded-tr-md flex items-start">
          Top 10
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-full sm:h-3/4 md:h-1/2 p-4 bg-black bg-opacity-80 text-white rounded-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-xs sm:text-sm md:text-base font-bold">{title}</h3>
        <div className="mt-2 flex space-x-2 items-center justify-around">
          <button className="sm:h-5 sm:w-5 md:h-8 md:w-8 bg-white rounded-full flex-none flex items-center justify-center text-2xl text-black">
            <BiPlay />
          </button>
          <button className="px-2 py-1 md:px-3 md:py-1.5 text-xs sm:text-sm md:text-base bg-gray-700 text-white rounded">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VListItem;
