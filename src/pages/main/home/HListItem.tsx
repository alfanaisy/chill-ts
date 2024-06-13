import { BiPlay } from 'react-icons/bi';

interface Props {
  image: string;
  isTop?: boolean;
  isNewEpisode?: boolean;
  title: string;
}

const HListItem = ({
  image,
  isTop = false,
  isNewEpisode = false,
  title,
}: Props) => {
  return (
    <div className="relative w-60 flex items-center justify-center cursor-pointer group">
      <div className="h-full rounded-md overflow-hidden">
        <img src={image} alt="Top List" className="w-full h-full" />
      </div>
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

export default HListItem;
