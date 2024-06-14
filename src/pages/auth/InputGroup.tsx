import { FormEvent, HTMLInputTypeAttribute, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
}

const InputGroup = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  type,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordType: string =
    type === 'password' && showPassword ? 'text' : 'password';

  return (
    <div className="relative w-full flex flex-col gap-1">
      <label htmlFor={name} className="text-sm md:text-base">
        {label}
      </label>
      <input
        id={name}
        type={type !== 'password' ? type : passwordType}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-3xl md:rounded-full py-2 px-3 md:py-3 md:px-4 bg-transparent border-2 border-other-border placeholder:text-text-light-200 text-sm md:text-base"
      />
      {type === 'password' && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-9 right-3.5 md:top-11 md:right-5 text-white md:text-lg cursor-pointer"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
};

export default InputGroup;
