import HorizontalScroll from './HorizontalScroll';
import TopListItem from './TopListItem';
import Thumbnail1 from '../../../assets/watch-list/thumbnail-p-1.png';
import Thumbnail2 from '../../../assets/watch-list/thumbnail-p-2.png';

const TopList = () => {
  const items = [
    {
      image: Thumbnail1,
    },
    {
      image: Thumbnail2,
    },
    {
      image: Thumbnail1,
    },
    {
      image: Thumbnail2,
    },
    {
      image: Thumbnail1,
    },
    {
      image: Thumbnail2,
    },
  ];
  return (
    <div className="bg-other-header p-5 text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Melanjutkan Tonton Film
      </h2>
      <HorizontalScroll height="30vh">
        {items.map((item) => (
          <TopListItem image={item.image} />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default TopList;
