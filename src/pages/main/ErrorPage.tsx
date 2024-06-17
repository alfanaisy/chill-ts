import { UNSAFE_ErrorResponseImpl, useRouteError } from 'react-router-dom';
import Navbar from './components/Navbar';

const ErrorPage = () => {
  const error: UNSAFE_ErrorResponseImpl =
    useRouteError() as UNSAFE_ErrorResponseImpl;

  return (
    <>
      <Navbar />
      <div className="bg-other-body w-screen h-screen flex flex-col gap-4 items-center justify-center text-white">
        <h1 className="text-3xl">Fitur masih dalam pengerjaan.</h1>
        <p>
          {error.status} {error.statusText}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
