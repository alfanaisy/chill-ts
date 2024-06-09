import FormHeader from '../FormHeader';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <FormHeader title="Masuk" subtitle="Selamat datang kembali!" />
      <LoginForm />
    </>
  );
};

export default LoginPage;
