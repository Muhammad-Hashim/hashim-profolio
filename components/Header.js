
import { SocialIcon } from 'react-social-icons';
export default function Header() {
  return ( 
    <header className="sticky top-0 z-20 flex items-center justify-around p-5 mx-auto max-w-7xl xl:items-center">
      <div className='flex flex-row object-contain justify-items-center '>
        <SocialIcon url="https://www.linkedin.com/in/muhammad-hashim-a080a61a8/" style={{ height: 35, width: 35 }}  fgColor='white' />
        <SocialIcon url="https://github.com/Muhammad-Hashim" fgColor='white' style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://twitter.com/Muhammah_hashim?t=EftwHtBzsRknYATB6WMd-Q&s=09" style={{ height: 35, width: 35 }}  fgColor='white' />
        <SocialIcon url="https://www.linkedin.com/in/joshua-murphy-10b10b10b/" fgColor='gray' bgColor='transparent' style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.linkedin.com/in/joshua-murphy-10b10b10b/" fgColor='gray' bgColor='transparent' style={{ height: 35, width: 35 }} />
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <SocialIcon url="https://www.email.com/in/joshua-murphy-10b10b10b/"  bgColor='white'  style={{ height: 35, width: 35 }} />
        <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
          Get in Touch
        </p>
      </div>
    </header>
  )
}
