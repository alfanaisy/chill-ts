import { myList } from '../../../constants/show-items';
import MyList from './components/MyList';

const MyListPage = () => {
  return (
    <div className="p-8 md:p-16 bg-other-header">
      <MyList items={myList} />;
    </div>
  );
};

export default MyListPage;
