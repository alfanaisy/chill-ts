import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14 md:mt-[92px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
