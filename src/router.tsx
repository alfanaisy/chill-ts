import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './components/templates/AuthLayout';
import MainLayout from './components/templates/MainLayout';
import Login from './components/pages/Login';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <h1>Register</h1> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <h1>Home</h1> },
      { path: '/series', element: <h1>Series</h1> },
    ],
  },
]);
