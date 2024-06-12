import HorizontalScroll from './HorizontalScroll';
import HListItem from './HListItem';
import Thumbnail1 from '../../../assets/watch-list/thumbnail-p-1.png';
import Thumbnail2 from '../../../assets/watch-list/thumbnail-p-2.png';

const ItemList = ({ title }: { title: string }) => {
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
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <HorizontalScroll height="30vh">
        {items.map((item) => (
          <HListItem image={item.image} />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default ItemList;
