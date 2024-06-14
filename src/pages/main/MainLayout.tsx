import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14 md:mt-[92px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
