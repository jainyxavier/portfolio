import { Roboto } from 'next/font/google'
import Header from './components/Header'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={roboto.className}>
      <Header />
    </main>
  )
}
