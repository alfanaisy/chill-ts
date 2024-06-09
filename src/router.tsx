import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import MainLayout from './pages/main/MainLayout';
import LoginPage from './pages/auth/login/LoginPage';
import RegisterPage from './pages/auth/register/RegisterPage';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
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
