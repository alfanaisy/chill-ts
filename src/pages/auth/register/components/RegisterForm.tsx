import { FormEvent, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import InputGroup from '../../InputGroup';
import TextWithLink from '../../TextWithLink';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCfm, setPasswordCfm] = useState<string>('');

  return (
    <form className="w-full flex flex-col gap-8">
      <div>
        <InputGroup
          label="Username"
          name="username"
          placeholder="Masukkan username"
          value={username}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setUsername(e.currentTarget.value)
          }
          type="text"
        />
      </div>
      <div>
        <InputGroup
          label="Kata Sandi"
          name="password"
          placeholder="Masukkan kata sandi"
          value={password}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          type="password"
        />
      </div>
      <div>
        <InputGroup
          label="Konfirmasi Kata Sandi"
          name="passwordCfm"
          placeholder="Masukkan kata sandi"
          value={passwordCfm}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setPasswordCfm(e.currentTarget.value)
          }
          type="password"
        />
        <div className="flex justify-between mt-1.5">
          <TextWithLink
            text="Sudah punya akun?"
            linkText="Masuk"
            to="/auth/login"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <button
          onClick={() => navigate('/')}
          className="w-full rounded-3xl md:rounded-full py-2 px-3 md:py-3 md:px-4 bg-other-border text-white"
        >
          Daftar
        </button>
        <p className="text-center text-sm text-text-light-100">Atau</p>
        <button
          onClick={() => {}}
          className="w-full flex items-center justify-center rounded-3xl md:rounded-full py-2 px-3 md:py-3 md:px-4 bg-transparent ring-1 ring-other-border text-white gap-3"
        >
          <span className="text-lg">
            <FcGoogle />
          </span>
          Daftar dengan Google
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
