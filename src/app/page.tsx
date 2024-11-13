"use client"

import { Roboto } from 'next/font/google'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaPhoneAlt, FaHtml5, FaCss3Alt, FaSass, FaReact, FaWordpress } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import ListItemIcon from './components/ListItemIcon';
import InfoItem from './components/InfoItem';
import DarkMode from './components/DarkMode'
import { useState } from 'react';
import CursorFollower from './components/CursorFollower';

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {

  const [selectedTheme, setSelectedTheme] = useState('dark')

  return (
    <main className={`${roboto.className} ${selectedTheme == 'dark' ? 'bg-slate-900' : 'bg-[#C1A6BA]'} animate-fade-down animate-once animate-duration-1000 animate-delay-[1500ms] animate-ease-linear background-effect overflow-hidden`}>

      <CursorFollower selectedTheme={selectedTheme} />
      
      <section className=' w-[calc(100%-120px)] pt-[80px] pb-[120px] flex justify-between gap-[40px] mx-auto'>
        <div className='w-full max-[768px]:flex-col max-[768px]:items-start'>
          <span className='text-white text-[50px]'>Jaíny Xavier</span>

          <h1 className='w-fit bg-gradient-to-r from-[#d587e1] via-[#bf27a5] to-[#df78c3] text-transparent bg-clip-text text-[30px] mb-[15px]'>
            Desenvolvedora front-end
          </h1>

          <div className='flex gap-[20px] mt-[25px]'>
            <a href="/cv-jainy.pdf" target="_blank" className={`${'w-[200px] bg-white text-[#D529A6] font-semibold rounded-lg flex items-center justify-center shadow-lg hover:scale-105'} ${selectedTheme == 'dark' ? 'shadow-gray-500' : 'shadow-[#8c61a3]'}`}>
              Visualizar CV
            </a>

            <Image
              src="/img/arrow.webp"
              width={60}
              height={60}
              style={{width: '60px', height: '60px'}}
              className='object-none animate-fade-left animate-once animate-duration-[3000ms] animate-delay-[1500ms] animate-ease-in'
              alt="Seta"
            />
          </div>

          <div className="w-full mt-[30px] ml-[30px]">
            <ul className='w-full flex items-center gap-[15px]'>
              <li className='hover:scale-125 transition-all flex items-center justify-center'>
                <a href="https://github.com/jainyxavier" target='_blank'>
                  <FaGithub fontSize={'30px'} color="#f472b6" />
                </a>
              </li>

              <li className='hover:scale-125 hover:transition-all flex items-center justify-center'>
                <a href="https://www.linkedin.com/in/jainy-xavier/" target='_blank'>
                  <FaLinkedin fontSize={'30px'} color="#f472b6" />
                </a>
              </li>

              <li className='hover:scale-125 hover:transition-all flex items-center justify-center'>
                <a href="https://www.instagram.com/jainy.xavier/" target='_blank'>
                  <FaInstagramSquare fontSize={'30px'} color="#f472b6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full max-w-[600px]'>
          <h2 className='text-[30px] text-white font-semibold mb-[30px]'>About me</h2>

          <div className='flex justify-between items-center gap-[40px] max-[768px]:flex-col-reverse max-[768px]:gap-[80px] max-[768px]:items-start'>
            <div className='w-full max-w-[550px] max-[768px]:max-w-none'>
              <p className='text-[18px] text-white font-medium'>
                Tenho explorado o mundo da tecnologia e me encantado cada vez mais pelo front-end. Escolhi dedicar-me nesta área diariamente para contribuir no mercado da melhor maneira possível. Atualmente, estou em busca de oportunidades que me permitam não só colocar em prática todo o aprendizado adquirido, mas também evoluir continuamente e contribuir ativamente para o crescimento mútuo.
              </p>

              <div className='w-[80%] max-w-[400px] h-[2px] bg-white my-[25px]'></div>

              <div className='flex flex-col gap-[10px]'>
                <InfoItem Icon={FaLocationDot} link="https://petrolandiaparallax.netlify.app/" text='Petrolândia-PE' />
                <InfoItem Icon={FaPhoneAlt} link="https://wa.me/5587999251839?text=Olá! Tudo bem?" text='+55 87 9 9925-1839' />
                <InfoItem Icon={MdEmail} link="mailto:xavierjainy15@gmail.com" text='xavierjainy15@gmail.com' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full pb-[120px]'>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto'>
          <h2 className='text-[30px] text-center text-white font-semibold mb-[60px]'>Skills</h2>

          <ul className='w-full flex flex-wrap items-center justify-center gap-[40px]'>
            <ListItemIcon Icon={FaHtml5} size='50px' />
            <ListItemIcon Icon={FaCss3Alt} size='50px' />
            <ListItemIcon Icon={IoLogoJavascript} size='50px' />
            <ListItemIcon Icon={FaSass} size='50px' />
            <ListItemIcon Icon={SiTailwindcss} size='50px' />
            <ListItemIcon Icon={FaReact} size='50px' />
            <ListItemIcon Icon={FaWordpress} size='50px' />
          </ul>
        </div>
      </section>

      <DarkMode changeTheme={(value: string) => setSelectedTheme(value)} />
    </main>
  )
}
