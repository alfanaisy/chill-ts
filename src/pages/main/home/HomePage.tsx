import HeroSection from './HeroSection';
import ItemList from './ItemList';
import WatchList from './WatchList';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WatchList />
      <ItemList title="Top Rating Film dan Series Hari ini" />
      <ItemList title="Film Trending" />
      <ItemList title="Rilis Baru" />
    </>
  );
};

export default HomePage;
