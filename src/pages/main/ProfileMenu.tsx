import { ReactElement } from 'react';
import { IoMdLogOut, IoMdPerson, IoMdStar } from 'react-icons/io';

const ProfileMenu = ({
  setShowMenu,
}: {
  setShowMenu: (e: boolean) => void;
}) => {
  const menuItem: { label: string; icon: ReactElement }[] = [
    { label: 'Profil Saya', icon: <IoMdPerson /> },
    { label: 'Ubah Premium', icon: <IoMdStar /> },
    { label: 'Keluar', icon: <IoMdLogOut /> },
  ];

  return (
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
  );
};

export default ProfileMenu;
