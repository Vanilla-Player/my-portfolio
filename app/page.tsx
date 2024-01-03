import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';

export default function Home() {
  return (
    <div className='h-screen w-screen bg-slate-600'>
      <Navbar/>
    </div>
  )
}
