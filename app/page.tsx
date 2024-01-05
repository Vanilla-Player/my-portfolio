import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import FallingStar from '@/components/star/failingStart';
import linkedinIcon from '../public/icons/linkedin-round-icon.svg';
import twitterIcon from '../public/icons/twitter-round-icon.svg'; 
import facebookIcon from '../public/icons/facebook-round-icon.svg'; 
import Icon from '../components/icon';
import FallingStarsBackground from '@/components/star/fallingStarsBackground';


export default function Home() {
  return (
    <main className='flex justify-between items-center h-screen bg-black '>
      <FallingStarsBackground/>
      <div className='p-6 max-w-md mx-auto'>
        <h1 className='text-6xl'>Luca Braccani</h1>
        <div className='flex p-5 justify-between mx-5'>
          <Icon srcImage={linkedinIcon}/>
          <Icon srcImage={twitterIcon}/>
          <Icon srcImage={facebookIcon}/>
        </div>
        <div className='flex justify-center'>
            <span className='border-2 p-1'>Contact Me</span>
        </div>
      </div>
    </main>
  )
}
