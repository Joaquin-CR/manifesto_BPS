import Image from 'next/image'
import HomeScreen from './components/HomeScreen/Home'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <HomeScreen />
    </main>
  )
}
