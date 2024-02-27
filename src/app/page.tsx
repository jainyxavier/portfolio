"use client"

import { Roboto } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaPhoneAlt, FaHtml5, FaCss3Alt, FaSass, FaReact, FaWordpress } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import ListItemIcon from './components/ListItemIcon';
import InfoItem from './components/InfoItem';
import { RefObject, useRef, useState } from 'react';
import DarkMode from './components/DarkMode'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {

  const [selectedTheme, setSelectedTheme] = useState('dark')

  const sectionHome: RefObject<HTMLElement> = useRef(null);
  const sectionAbout: RefObject<HTMLElement> = useRef(null);
  const sectionSkills: RefObject<HTMLElement> = useRef(null);

  function handleScrollTo(referenceElement: RefObject<HTMLElement>) {
    referenceElement.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className={`${roboto.className} ${selectedTheme == 'dark' ? 'bg-slate-900' : 'bg-[#C1A6BA]'}`}>
      <Header selectedTheme={selectedTheme} handleScrollTo={handleScrollTo} sectionHome={sectionHome} sectionAbout={sectionAbout} sectionSkills={sectionSkills} />

      {/* home */}
      <section className='w-full pt-[120px] pb-[120px]' ref={sectionHome}>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto flex justify-between items-center gap-[20px] max-[768px]:flex-col max-[768px]:items-start'>
          <div className='w-full max-w-[600px]'>
            <p className='w-fit bg-gradient-to-r from-[#d587e1] via-[#bf27a5] to-[#df78c3] text-transparent bg-clip-text text-[18px]'>Olá !</p>

            <h1 className='w-fit bg-gradient-to-r from-[#d587e1] via-[#bf27a5] to-[#df78c3] text-transparent bg-clip-text text-[40px] mt-[25px] mb-[25px]'>
              <span className='text-white'>Eu sou Jainy Xavier,</span> <br></br>
              Frontend Developer
            </h1>

            <p className='text-[20px] text-white mb-[25px]'>Focada em proporcionar a melhor experiência para o usuário.</p>

            <div className='w-full max-w-[350px] flex justify-between gap-[40px]'>
              <ul className='w-full flex justify-between items-center gap-[10px]'>
                <ListItemIcon link='https://github.com/jainyxavier' Icon={FaGithub} />
                <ListItemIcon link='https://www.linkedin.com/in/jainy-xavier/' Icon={FaLinkedin} />
                <ListItemIcon link='https://www.instagram.com/jainy.xavier/' Icon={FaInstagramSquare} />
              </ul>

              <Image
                src="/img/arrow.webp"
                width={80}
                height={80}
                style={{ width: '80px', height: '80px' }}
                alt="Seta"
              />
            </div>
          </div>

          <Image
            src="/img/Saly-1.png"
            className='w-full h-auto max-w-[400px] max-[768px]:ml-auto max-[768px]:max-w-[300px] object-contain'
            style={{ width: '100%', height: '400px' }}
            width={400}
            height={400}
            alt="Desenho de menina em foguete rosa"
          />
        </div>
      </section>

      {/* about */}
      <section className='w-full pb-[120px]' ref={sectionAbout}>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto'>
          <h2 className='text-[30px] text-center text-white font-semibold mb-[60px]'>About</h2>

          <div className='flex justify-between items-center gap-[40px] max-[768px]:flex-col-reverse max-[768px]:gap-[80px] max-[768px]:items-start'>
            <Image
            className='w-full h-auto max-w-[350px] max-[768px]:max-w-[280px] max-[768px]:ml-auto object-contain'
              src="/img/about.png"
              width={350}
              height={350}
              style={{width: '100%', height: '350px'}}
              alt="Desenho de pessoas com dúvidas"
            />

            <div className='w-full max-w-[550px] max-[768px]:max-w-none'>
              <p className='text-[18px] text-white font-medium'>
                Durante os últimos quatro anos, tenho explorado profundamente o vasto universo da tecnologia, concentrando-me no desenvolvimento frontend desde 2020. Em setembro de 2022, tive a oportunidade de aplicar meu conhecimento ao ingressar no mercado de trabalho, colaborando em projetos de outsourcing com uma equipe incrível. Neste momento, estou em busca de novas oportunidades para continuar minha evolução nessa área que me apaixona, ansiosa por adquirir e compartilhar ainda mais conhecimento.
              </p>

              <div className='w-[80%] max-w-[400px] h-[2px] bg-white my-[25px]'></div>

              <div className='flex flex-col gap-[10px]'>
                <InfoItem Icon={FaLocationDot} link="https://petrolandiaparallax.netlify.app/" text='Petrolândia-PE' />
                <InfoItem Icon={FaPhoneAlt} link="https://wa.me/5587999251839?text=Olá! Tudo bem?" text='+55 87 9 9925-1839' />
                <InfoItem Icon={MdEmail} link="mailto:xavierjainy15@gmail.com" text='xavierjainy15@gmail.com' />
              </div>

              <div className='flex gap-[40px] mt-[25px]'>
                <a href="/cv-jainyxavier.pdf" target="_blank" className={`${'w-[200px] bg-white text-[#D529A6] font-semibold rounded-lg flex items-center justify-center shadow-lg hover:scale-105'} ${selectedTheme == 'dark' ? 'shadow-gray-500' : 'shadow-[#8c61a3]'}`}>
                  Visualizar CV
                </a>

                <Image
                  src="/img/arrow.webp"
                  width={60}
                  height={60}
                  style={{width: '60px', height: '60px'}}
                  className='object-none'
                  alt="Seta"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className='w-full pb-[120px]' ref={sectionSkills}>
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

      {/* projetos */}
      {/* <section className='w-full pb-[120px]'>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto'>
          <h2 className='text-[30px] text-center text-white font-semibold mb-[60px]'>Projects</h2>
        </div>
      </section> */}

      <DarkMode changeTheme={(value: string) => setSelectedTheme(value)} />
      
      <Footer />
    </main>
  )
}
