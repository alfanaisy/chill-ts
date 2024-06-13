import { BsStarFill } from 'react-icons/bs';

interface Props {
  image: string;
  title: string;
  rating: number;
}

const WatchListItem = ({ image, title, rating }: Props) => {
  return (
    <div className="relative w-80 flex items-center justify-center rounded-md overflow-hidden cursor-pointer md:hover:scale-[1.01]">
      <img
        src={image}
        alt="Watch List Thumbnail"
        className="w-full h-full object-fill"
      />
      <div className="absolute bottom-0 w-full h-12 flex justify-between items-center px-4 ">
        <p>{title}</p>
        <p className="inline-flex items-center gap-1">
          <span>
            <BsStarFill />
          </span>{' '}
          {rating}/5
        </p>
      </div>
    </div>
  );
};

export default WatchListItem;
