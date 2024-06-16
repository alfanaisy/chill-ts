import { BiPlay } from 'react-icons/bi';
import Labels from './Labels';
import { LabelType } from '../../../../constants/labelType';

interface Props {
  image: string;
  title: string;
  isTop?: boolean;
  labels?: LabelType;
}

const VListItem = ({ image, isTop = false, labels, title }: Props) => {
  return (
    <div className="relative w-40 md:w-60 flex items-center justify-center cursor-pointer group snap-start">
      <div className="h-full rounded-md overflow-hidden">
        <img src={image} alt="Top List" className="w-full h-full" />
      </div>
      {labels && <Labels labelType={labels} />}
      {isTop && (
        <div className="absolute top-0 right-1 md:right-3 w-8 md:w-10 h-1/6 bg-red-700 px-2 py-1 text-wrap text-center text-xs md:text-base rounded-bl-md rounded-tr-md">
          Top 10
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-1/2 p-4 bg-black bg-opacity-80 text-white rounded-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-10">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="mt-2 flex space-x-2">
          <button className="h-4 w-4 md:h-10 md:w-10 bg-white rounded-full flex-none flex items-center justify-center text-2xl text-black">
            <BiPlay />
          </button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VListItem;
