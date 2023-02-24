
import { SocialIcon } from 'react-social-icons';
export default function Header() {
  return ( 
    <header className=" sticky top-0 flex justify-around  items-center max-w-7xl mx-auto z-20 xl:items-center p-5">
      <div className='flex  flex-row justify-items-center object-contain  '>
        <SocialIcon url="https://www.linkedin.com/in/muhammad-hashim-a080a61a8/" style={{ height: 35, width: 35 }}  fgColor='white' />
        <SocialIcon url="https://github.com/Muhammad-Hashim" fgColor='white' style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://twitter.com/Muhammah_hashim?t=EftwHtBzsRknYATB6WMd-Q&s=09" style={{ height: 35, width: 35 }}  fgColor='white' />
        <SocialIcon url="https://www.linkedin.com/in/joshua-murphy-10b10b10b/" fgColor='gray' bgColor='transparent' style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.linkedin.com/in/joshua-murphy-10b10b10b/" fgColor='gray' bgColor='transparent' style={{ height: 35, width: 35 }} />
      </div>
      <div className='flex flex-row  space-x-4 items-center'>
        <SocialIcon url="https://www.email.com/in/joshua-murphy-10b10b10b/"  bgColor='white'  style={{ height: 35, width: 35 }} />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div>
    </header>
  )
}
