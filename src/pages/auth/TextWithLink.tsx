import { Link } from 'react-router-dom';

interface Props {
  text?: string;
  linkText: string;
  to: string;
}

const TextWithLink = ({ text, linkText, to }: Props) => {
  return (
    <p className="text-xs md:text-sm text-text-light-200 tracking-wide">
      {text}{' '}
      <Link to={to} className="text-white">
        {linkText}
      </Link>
    </p>
  );
};

export default TextWithLink;
