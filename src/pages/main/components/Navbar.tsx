import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useMediaQuery } from 'usehooks-ts';
import Avatar from '../../../assets/avatar.svg';
import LogoMobile from '../../../assets/logo-sm.svg';
import Logo from '../../../assets/logo.svg';
import NavItem from './NavItem';
import ProfileMenu from './ProfileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <div className="fixed top-0 w-full bg-other-header py-1.5 px-5 md:py-6 md:px-20 flex justify-evenly md:justify-between items-center gap-3 z-50">
        <div className="text-white basis-4/5 flex items-center gap-4 md:gap-20">
          <Link to={'/'}>
            <img
              src={isMobile ? LogoMobile : Logo}
              alt="Navbar Logo"
              className={`${isMobile ? 'w-5' : 'w-24'} min-h-11`}
            />
          </Link>
          <NavItem />
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          onMouseEnter={() => setShowMenu(true)}
          className="relative text-white flex items-center gap-1 cursor-pointer"
        >
          <img src={Avatar} alt="Profile" className="w-5 md:w-10" />
          <span>
            <FaChevronDown className="text-xs w-4 md:text-base md:w-7" />
          </span>
        </div>
        {showMenu && <ProfileMenu setShowMenu={setShowMenu} />}
      </div>
    </>
  );
};

export default Navbar;
