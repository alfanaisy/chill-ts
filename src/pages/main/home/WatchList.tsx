import HorizontalScroll from './HorizontalScroll';
import WatchListItem from './WatchListItem';
import Thumbnail1 from '../../../assets/watch-list/thumbnail-l-1.png';
import Thumbnail2 from '../../../assets/watch-list/thumbnail-l-2.png';

const WatchList = () => {
  const items = [
    {
      image: Thumbnail1,
      title: 'Some Movie 1',
      rating: 4.5,
    },
    {
      image: Thumbnail2,
      title: 'Some Movie 2',
      rating: 4,
    },
    {
      image: Thumbnail1,
      title: 'Some Series 1',
      rating: 4.3,
    },
    {
      image: Thumbnail2,
      title: 'Some Series 2',
      rating: 4.4,
    },
    {
      image: Thumbnail1,
      title: 'Some Series 1',
      rating: 4.3,
    },
    {
      image: Thumbnail2,
      title: 'Some Series 2',
      rating: 4.4,
    },
  ];

  return (
    <div className="bg-other-header p-5 text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Melanjutkan Tonton Film
      </h2>
      <HorizontalScroll height="27vh">
        {items.map((item, index) => (
          <WatchListItem
            key={index}
            image={item.image}
            title={item.title}
            rating={item.rating}
          />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default WatchList;
