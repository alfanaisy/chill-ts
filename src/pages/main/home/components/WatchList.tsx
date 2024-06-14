import HorizontalScroll from './HorizontalScroll';
import WatchListItem from './WatchListItem';
import Thumbnail1 from '../../../../assets/watch-list/thumbnail-l-1.png';
import Thumbnail2 from '../../../../assets/watch-list/thumbnail-l-2.png';
import { LabelType } from '../../../../constants/labelType';

const WatchList = () => {
  const items: {
    image: string;
    title: string;
    rating: number;
    labels?: LabelType;
  }[] = [
    {
      image: Thumbnail1,
      title: 'Some Movie 1',
      rating: 4.5,
      labels: 'Episode Baru',
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
    <div className="text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Melanjutkan Tonton Film
      </h2>
      <HorizontalScroll>
        {items.map((item, index) => (
          <WatchListItem
            key={index}
            image={item.image}
            title={item.title}
            rating={item.rating}
            labels={item.labels}
          />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default WatchList;
