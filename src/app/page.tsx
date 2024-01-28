import { Roboto } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaPhoneAlt, FaHtml5, FaCss3Alt, FaSass, FaReact, FaWordpress } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import ListItemIcon from './components/ListItemIcon';
import InfoItem from './components/InfoItem';

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={roboto.className}>
      <Header />

      {/* home */}
      <section className='w-full pt-[120px] pb-[120px]'>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto flex justify-between items-center gap-[20px] max-[768px]:flex-col max-[768px]:items-start'>
          <div className='w-full max-w-[600px]'>
            <p className='w-fit bg-gradient-to-r from-[#bd3899] via-teal-500 to-fuchsia-500 text-transparent bg-clip-text text-[18px]'>Hello There !</p>

            <h1 className='w-fit bg-gradient-to-r from-[#bd3899] via-teal-500 to-fuchsia-500 text-transparent bg-clip-text text-[40px] mt-[25px] mb-[25px]'>
              <span className='text-slate-400'>I'm Jainy Xavier</span> <br></br>
              Frontend Developer
            </h1>

            <p className='text-[20px] text-slate-400 mb-[25px]'>Focada em proporcionar a melhor experiência para o usuário.</p>

            <div className='w-full max-w-[350px] flex justify-between gap-[40px]'>
              <ul className='w-full flex justify-between items-center gap-[10px]'>
                <ListItemIcon link='https://www.linkedin.com/in/jainy-xavier/' Icon={FaGithub} />
                <ListItemIcon link='https://github.com/jainyxavier' Icon={FaLinkedin} />
                <ListItemIcon link='https://www.instagram.com/jainy.xavier/' Icon={FaInstagramSquare} />
              </ul>

              <Image
                src="/img/arrow.webp"
                width={80}
                height={80}
                alt="Seta"
              />
            </div>
          </div>

          <Image
            className='w-full max-w-[400px] max-[768px]:ml-auto max-[768px]:max-w-[300px]'
            src="/img/Saly-1.png"
            width={400}
            height={400}
            alt="Desenho de menina em foguete rosa"
          />
        </div>
      </section>

      {/* about */}
      <section className='w-full pb-[120px]'>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto'>
          <h2 className='text-[30px] text-center text-white font-semibold mb-[60px]'>About</h2>

          <div className='flex justify-between items-center gap-[40px] max-[768px]:flex-col-reverse max-[768px]:gap-[80px] max-[768px]:items-start'>
            <Image
              className='w-full max-w-[350px] max-[768px]:max-w-[280px] max-[768px]:ml-auto'
              src="/img/about.png"
              width={350}
              height={350}
              alt="Desenho de pessoas com dúvidas"
            />

            <div className='w-full max-w-[550px] max-[768px]:max-w-none'>
              <p className='text-[18px] text-[#99A2A5] font-medium'>
                Durante os últimos quatro anos, tenho explorado profundamente o vasto universo da tecnologia, concentrando-me no desenvolvimento frontend desde 2020. Em setembro de 2022, tive a oportunidade de aplicar meu conhecimento ao ingressar no mercado de trabalho, colaborando em projetos de outsourcing com uma equipe incrível. Neste momento, estou em busca de novas oportunidades para continuar minha evolução nessa área que me apaixona, ansiosa por adquirir e compartilhar ainda mais conhecimento.
              </p>

              <div className='w-[80%] max-w-[400px] h-[2px] bg-[#99A2A5] my-[25px]'></div>

              <div className='flex flex-col gap-[10px]'>
                <InfoItem Icon={FaLocationDot} link="https://petrolandiaparallax.netlify.app/" text='Petrolândia-PE' />
                <InfoItem Icon={FaPhoneAlt} link="https://wa.me/5587999251839?text=Olá! Tudo bem?" text='+55 87 9 9925-1839' />
                <InfoItem Icon={MdEmail} link="mailto:xavierjainy15@gmail.com" text='xavierjainy15@gmail.com' />
              </div>

              <div className='flex gap-[40px] mt-[25px]'>
                <a href="/cv-jainy.pdf" target="_blank" className='w-[200px] bg-white text-[#D529A6] font-semibold rounded-lg flex items-center justify-center shadow-lg shadow-gray-500 hover:scale-105'>
                  Visualizar CV
                </a>

                <Image
                  src="/img/arrow.webp"
                  width={60}
                  height={60}
                  className='object-none'
                  alt="Seta"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
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

      {/* projetos */}
      {/* <section className='w-full pb-[120px]'>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto'>
          <h2 className='text-[30px] text-center text-white font-semibold mb-[60px]'>Projects</h2>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
