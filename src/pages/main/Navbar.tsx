import { useMediaQuery } from 'usehooks-ts';
import Logo from '../../assets/logo.svg';
import LogoMobile from '../../assets/logo-sm.svg';
import Avatar from '../../assets/avatar.svg';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { IoMdLogOut, IoMdPerson, IoMdStar } from 'react-icons/io';
import { ReactElement, useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const navItems: { label: string; link: string }[] = [
    { label: 'Series', link: '/series' },
    { label: 'Film', link: '/films' },
    { label: 'Daftar Saya', link: '/my-list' },
  ];

  const menuItem: { label: string; icon: ReactElement }[] = [
    { label: 'Profil Saya', icon: <IoMdPerson /> },
    { label: 'Ubah Premium', icon: <IoMdStar /> },
    { label: 'Keluar', icon: <IoMdLogOut /> },
  ];

  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <div className="fixed w-full bg-other-header py-1.5 px-5 md:py-6 md:px-20 flex justify-evenly md:justify-between items-center gap-3">
        <div className="text-white basis-4/5 flex items-center gap-4 md:gap-20">
          <img
            src={isMobile ? LogoMobile : Logo}
            alt="Navbar Logo"
            className={`${isMobile ? 'w-5' : 'w-24'} min-h-11`}
          />
          {navItems.map((item) => (
            <NavLink
              to={item.link}
              className="text-white font-medium leading-4 text-xs md:text-lg"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          onMouseEnter={() => setShowMenu(true)}
          className="text-white flex items-center gap-1 cursor-pointer"
        >
          <img src={Avatar} alt="Profile" className="w-5 md:w-10" />
          <span>
            <FaChevronDown className="text-xs w-4 md:text-base md:w-7" />
          </span>
        </div>
      </div>
      {showMenu && (
        <div
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className={
            'absolute top-14 md:top-[92px] right-6 md:right-10 flex flex-col items-start py-1 bg-other-header rounded-b-md min-w-28 md:min-w-40 text-white'
          }
        >
          {menuItem.map((item) => (
            <div className="flex items-center justify-between gap-1 py-2 px-3 cursor-pointer">
              <span className="min-w-4 md:min-w-6">{item.icon}</span>{' '}
              <p className="text-xs md:text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
