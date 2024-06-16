import { ItemListType } from '../../../../constants/show-items';
import HorizontalScroll from './HorizontalScroll';
import VListItem from './VListItem';

interface Props {
  title: string;
  items: ItemListType[];
}

const ItemList = ({ title, items }: Props) => {
  return (
    <div className="bg-other-header text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <HorizontalScroll>
        {items.map((item) => (
          <VListItem
            width="min-w-40 md:min-w-60"
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
