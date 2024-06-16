import {
  newReleases,
  topRated,
  trendingItems,
} from '../../../constants/show-items';
import HeroSection from './components/HeroSection';
import ItemList from './components/ItemList';
import WatchList from './components/WatchList';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="p-8 md:p-16 bg-other-header flex flex-col gap-6 md:gap-12 m-0">
        <WatchList />
        <ItemList
          title="Top Rating Film dan Series Hari ini"
          items={topRated}
        />
        <ItemList title="Film Trending" items={trendingItems} />
        <ItemList title="Rilis Baru" items={newReleases} />
      </div>
    </>
  );
};

export default HomePage;
