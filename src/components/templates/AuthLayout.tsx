import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const { pathname } = useLocation();

  const background = pathname === '/login' ? 'bg-login' : 'bg-register';

  return (
    <div
      className={`flex justify-center items-center w-full min-h-[100vh] ${background} bg-cover bg-center bg-no-repeat`}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
