import Logo from '../../../../assets/logo.svg'
import FooterItem, {FooterLinks} from "./FooterItem.tsx";

const Footer = () => {
  const genres: FooterLinks[] = [
    {label: 'Action', link: '/'},
    {label: 'Comedy', link: '/'},
    {label: 'Romance', link: '/'},
    {label: 'Horror', link: '/'},
    {label: 'Sci-Fi', link: '/'},
    {label: 'Fantasy', link: '/'},
    {label: 'Thriller', link: '/'},
    {label: 'Mystery', link: '/'},
    {label: 'Documentary', link: '/'},
    {label: 'Drama', link: '/'}
  ]
  const help: FooterLinks[] = [
    {label: 'FAQ', link: '/'},
    {label: 'Kontak Kami', link: '/'},
    {label: 'Privasi', link: '/'},
    {label: 'Syarat & Ketentuan', link: '/'},
  ]

  return (
    <div
      className={'bg-other-header w-full relative text-white flex flex-col items-center md:flex-row gap-4' +
        ' justify-around' +
        ' md:justify-between border-t-2 border-text-light-100 p-8 md:p-16'}>
      <div className={'w-full'}>
        <img src={Logo} alt="App Logo" className={'w-20 md:w-40 object-cover mb-2'}/>
        <p className={'text-text-light-200 text-xs font-normal md:text-base'}>@2023 Chill All Rights Reserved</p>
      </div>
      <div className={'w-full flex flex-col md:flex-row gap-y-4 gap-x-10'}>
        <FooterItem title={'Genre'} items={genres}/>
        <FooterItem title={'Bantuan'} items={help}/>
      </div>
    </div>
  )
}

export default Footer;