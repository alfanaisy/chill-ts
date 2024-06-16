import HorizontalScroll from './HorizontalScroll';
import WatchListItem from './WatchListItem';
import { watchList as items } from '../../../../constants/watch-list';

const WatchList = () => {
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
