import Logo from '../../assets/logo.svg';

interface Props {
  title: string;
  subtitle: string;
}

const FormHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 items-center">
      <img src={Logo} alt="App Logo" className="w-24 md:w-32" />
      <div className="text-center">
        <h4 className="text-xl md:text-3xl font-bold mb-2">{title}</h4>
        <p className="text-xs md:text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default FormHeader;
