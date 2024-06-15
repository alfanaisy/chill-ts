import {useState} from "react";
import {BiChevronRight} from "react-icons/bi";
import {useMediaQuery} from "usehooks-ts";
import {Link} from "react-router-dom";

export interface FooterLinks {
  label: string;
  link: string;
}

interface Props {
  title: string;
  items: FooterLinks[]
}

const FooterItem = ({title, items}: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div>
      <div className={'flex justify-between items-center mb-2'} onClick={() => setIsExpanded(!isExpanded)}>
        <h5 className={'font-semibold'}>{title}</h5>
        {
          isMobile &&
            <span className={`text-xl font-bold transition-transform duration-300 ${isExpanded ? 'rotate-90 ' : ''}`}>
                <BiChevronRight/>
            </span>
        }
      </div>
      <div
        className={`flex`}>
        <div className={'w-full'}>
          <ul
            className={`text-sm grid grid-rows-5 md:grid-rows-4 grid-flow-col gap-y-1 gap-x-2 md:gap-x-6 max-h-0 md:max-h-full overflow-hidden ${isExpanded && 'max-h-full'} transition-[max-height] duration-500 ease-in-out`}>
            {items.map((item, index) => (<li key={index}>
              <Link to={item.link}>{item.label}</Link>
            </li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterItem