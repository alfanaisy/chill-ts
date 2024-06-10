import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const { pathname } = useLocation();

  const background = pathname === '/login' ? 'bg-login' : 'bg-register';

  return (
    <div
      className={`flex justify-center items-center w-full min-h-[100vh] ${background} bg-cover bg-center bg-no-repeat`}
    >
      <div className="w-[80vw] sm:w-[65vw] md:w-[50vw] xl:w-[40vw] bg-other-paper bg-opacity-[86%] rounded-md my-28 p-8 md:p-10 text-white flex flex-col justify-center items-center gap-6 md:gap-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
