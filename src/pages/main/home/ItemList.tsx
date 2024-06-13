import HorizontalScroll from './HorizontalScroll';
import HListItem from './HListItem';
import Thumbnail1 from '../../../assets/watch-list/thumbnail-p-1.png';
import Thumbnail2 from '../../../assets/watch-list/thumbnail-p-2.png';
import { useMediaQuery } from 'usehooks-ts';

const ItemList = ({ title }: { title: string }) => {
  const isSmallDevice = useMediaQuery('(max-width: 768px)');
  const items = [
    {
      image: Thumbnail1,
      title: 'Skibidi 1',
    },
    {
      image: Thumbnail2,
      title: 'Skibidi 2',
    },
    {
      image: Thumbnail1,
      title: 'Skibidi 3',
    },
    {
      image: Thumbnail2,
      title: 'Skibidi 4',
    },
    {
      image: Thumbnail1,
      title: 'Skibidi 5',
    },
    {
      image: Thumbnail2,
      title: 'Skibidi 6',
    },
  ];
  return (
    <div className="bg-other-header p-5 text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <HorizontalScroll height={isSmallDevice ? '20vh' : '30vh'}>
        {items.map((item) => (
          <HListItem image={item.image} title={item.title} />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default ItemList;
