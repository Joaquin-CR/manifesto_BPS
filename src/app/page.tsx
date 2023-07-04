import Image from 'next/image'
import HomeScreen from './components/HomeScreen/Home'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-9 text-white">
      <HomeScreen />
    </main>
  )
}
