import HeroSection from './components/HeroSection';
import ItemList from './components/ItemList';
import WatchList from './components/WatchList';
import Footer from "./components/Footer.tsx";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <div className="p-8 md:p-16 bg-other-header flex flex-col gap-6 md:gap-12">
        <WatchList/>
        <ItemList title="Top Rating Film dan Series Hari ini"/>
        <ItemList title="Film Trending"/>
        <ItemList title="Rilis Baru"/>

      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
