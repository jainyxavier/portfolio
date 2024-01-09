import { Roboto } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaPhoneAlt, FaHtml5, FaCss3Alt, FaSass, FaReact, FaWordpress } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={roboto.className}>
      <Header />

      {/* home */}
      <section className='w-full pt-[120px] pb-[120px]'>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto flex justify-between items-center'>
          <div className='w-full max-w-[600px]'>
            <p className='w-fit bg-gradient-to-r from-[#bd3899] via-teal-500 to-fuchsia-500 text-transparent bg-clip-text text-[18px]'>Hello There !</p>

            <h1 className='w-fit bg-gradient-to-r from-[#bd3899] via-teal-500 to-fuchsia-500 text-transparent bg-clip-text text-[40px] mt-[25px] mb-[25px]'>
              <span className='text-slate-400'>I'm Jainy Xavier</span> <br></br>
              Frontend Developer
            </h1>

            <p className='text-[20px] text-slate-400 mb-[25px]'>Focada em proporcionar a melhor experiência para o usuário.</p>

            <div className='w-full max-w-[350px] flex justify-between gap-[40px]'>
              <ul className='w-full flex justify-between items-center gap-[10px]'>
                <li className='hover:scale-125 transition-all flex items-center justify-center'>
                  <a className='p-[10px] rounded-full hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 bg-white/10 hover:bg-white/20' href="https://www.linkedin.com/in/jainy-xavier-0288a3215/" target='_blank'>
                    <FaGithub fontSize={'30px'} color="#f472b6" />
                  </a>
                </li>

                <li className='hover:scale-125 hover:transition-all flex items-center justify-center'>
                  <a className='p-[10px] rounded-full hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 bg-white/10 hover:bg-white/20' href="https://github.com/jainyxavier" target='_blank'>
                    <FaLinkedin fontSize={'30px'} color="#f472b6" />
                  </a>
                </li>

                <li className='hover:scale-125 hover:transition-all flex items-center justify-center'>
                  <a className='p-[10px] rounded-full hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 bg-white/10 hover:bg-white/20' href="https://www.instagram.com/jainy.xavier/" target='_blank'>
                    <FaInstagramSquare fontSize={'30px'} color="#f472b6" />
                  </a>
                </li>
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
            className='w-full max-w-[400px]'
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

          <div className='flex justify-between items-center gap-[40px]'>
            <Image
              className='w-full max-w-[350px]'
              src="/img/about.png"
              width={350}
              height={350}
              alt="Desenho de pessoas com dúvidas"
            />

            <div className='w-full max-w-[550px]'>
              <p className='text-[18px] text-[#99A2A5] font-medium'>
                Durante os últimos quatro anos, tenho explorado profundamente o vasto universo da tecnologia, concentrando-me no desenvolvimento frontend desde 2020. Em setembro de 2022, tive a oportunidade de aplicar meu conhecimento ao ingressar no mercado de trabalho, colaborando em projetos de outsourcing com uma equipe incrível. Neste momento, estou em busca de novas oportunidades para continuar minha evolução nessa área que me apaixona, ansiosa por adquirir e compartilhar ainda mais conhecimento.
              </p>

              <div className='w-[400px] h-[2px] bg-[#99A2A5] my-[25px]'></div>

              <div className='flex gap-[15px]'>
                <FaLocationDot fontSize={'20px'} color="#f472b6" />
                <a href="https://petrolandiaparallax.netlify.app/" className='text-[16px] text-[#99A2A5] hover:text-white transition-all' target='_blank'>
                  Petrolândia-PE
                </a>
              </div>

              <div className='flex gap-[15px] my-[15px]'>
                <FaPhoneAlt fontSize={'20px'} color="#f472b6" />
                <a href="https://wa.me/5587999251839?text=Olá! Tudo bem?" className='text-[16px] text-[#99A2A5] hover:text-white transition-all' target='_blank'>
                  +55 87 9 9925-1839
                </a>
              </div>

              <div className='flex gap-[15px]'>
                <MdEmail fontSize={'20px'} color="#f472b6" />
                <a href="mailto:xavierjainy15@gmail.com" className='text-[16px] text-[#99A2A5] hover:text-white transition-all'>xavierjainy15@gmail.com</a>
              </div>

              <div className='flex gap-[40px] mt-[25px]'>
                <a href="#" target="_blank" className='w-[200px] bg-white text-[#D529A6] font-semibold rounded-lg flex items-center justify-center shadow-lg shadow-gray-500 hover:scale-105'>
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

          <div className='w-full flex items-center justify-between gap-[20px]'>
            <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 transition-all flex items-center justify-center'>
              <FaHtml5 fontSize={'50px'} color="#f472b6" />
            </div>

            <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 transition-all flex items-center justify-center'>
              <FaCss3Alt fontSize={'50px'} color="#f472b6" />
            </div>

            <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 transition-all flex items-center justify-center'>
              <IoLogoJavascript fontSize={'50px'} color="#f472b6" />
            </div>

            <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 transition-all flex items-center justify-center'>
              <FaSass fontSize={'50px'} color="#f472b6" />
            </div>

            <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 transition-all flex items-center justify-center'>
              <SiTailwindcss fontSize={'50px'} color="#f472b6" />
            </div>

            <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 transition-all flex items-center justify-center'>
              <FaReact fontSize={'50px'} color="#f472b6" />
            </div>

            <div className='p-[20px] rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 hover:shadow-lg shadow-gray-500/40 hover:shadow-gray-500/80 transition-all flex items-center justify-center'>
              <FaWordpress fontSize={'50px'} color="#f472b6" />
            </div>
          </div>
        </div>
      </section>

      {/* projetos */}
      <section className='w-full pb-[120px]'>
        <div className='w-[calc(100%-40px)] max-w-[1200px] mx-auto'>
          <h2 className='text-[30px] text-center text-white font-semibold mb-[60px]'>Projetos</h2>
        </div>
      </section>

      <Footer />
    </main>
  )
}
