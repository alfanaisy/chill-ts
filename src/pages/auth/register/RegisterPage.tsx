import FormHeader from '../FormHeader';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <FormHeader title="Daftar" subtitle="Selamat datang!" />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
