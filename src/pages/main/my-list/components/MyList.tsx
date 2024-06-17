import { ItemListType } from '../../../../constants/show-items';
import VListItem from '../../home/components/VListItem';

const MyList = ({ items }: { items: ItemListType[] }) => {
  return (
    <div className="text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Daftar Saya</h2>
      <div className="grid grid-cols-3 md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-x-4 gap-y-6">
        {items.map((item, i) => (
          <VListItem
            key={i}
            width="min-w-20 md:min-w-40 xl:min-w-48"
            image={item.image}
            title={item.title}
            isTop={item.isTop}
            labels={item.labels}
          />
        ))}
      </div>
    </div>
  );
};

export default MyList;
