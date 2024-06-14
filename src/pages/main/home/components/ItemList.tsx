import HorizontalScroll from './HorizontalScroll';
import VListItem from './VListItem';
import Thumbnail1 from '../../../../assets/watch-list/thumbnail-p-1.png';
import Thumbnail2 from '../../../../assets/watch-list/thumbnail-p-2.png';
import { LabelType } from '../../../../constants/labelType';

const ItemList = ({ title }: { title: string }) => {
  const items: {
    image: string;
    title: string;
    labels?: LabelType;
    isTop?: boolean;
  }[] = [
    {
      image: Thumbnail1,
      title: 'Skibidi 1',
      labels: 'Episode Baru',
      isTop: true,
    },
    {
      image: Thumbnail2,
      title: 'Skibidi 2',
      labels: 'Premium',
      isTop: false,
    },
    {
      image: Thumbnail1,
      title: 'Skibidi 3',
      isTop: false,
    },
    {
      image: Thumbnail2,
      title: 'Skibidi 4',
      isTop: false,
    },
    {
      image: Thumbnail1,
      title: 'Skibidi 5',
      isTop: false,
    },
    {
      image: Thumbnail2,
      title: 'Skibidi 6',
      isTop: false,
    },
  ];
  return (
    <div className="bg-other-header text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <HorizontalScroll>
        {items.map((item) => (
          <VListItem
            image={item.image}
            title={item.title}
            isTop={item.isTop}
            labels={item.labels}
          />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default ItemList;
