import { NavLink } from 'react-router-dom';

const NavItem = () => {
  const navItems: { label: string; link: string }[] = [
    { label: 'Series', link: '/series' },
    { label: 'Film', link: '/films' },
    { label: 'Daftar Saya', link: '/my-list' },
  ];

  return navItems.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className="text-white font-medium leading-4 text-xs md:text-lg"
    >
      {item.label}
    </NavLink>
  ));
};

export default NavItem;
