import { Roboto } from 'next/font/google'
import Header from './components/Header'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={roboto.className}>
      <Header />

      <h1 className="text-[22px] font-bold">
        Hello world!
      </h1>
    </main>
  )
}
