import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import MainLayout from './pages/main/MainLayout';
import LoginPage from './pages/auth/login/LoginPage';
import RegisterPage from './pages/auth/register/RegisterPage';
import HomePage from './pages/main/home/HomePage';
import MyListPage from './pages/main/my-list/MyListPage';

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
      { index: true, element: <HomePage /> },
      { path: 'my-list', element: <MyListPage /> },
    ],
  },
]);
