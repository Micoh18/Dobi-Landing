import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="isometric-grid" />
      <Navbar />
      <HeroSection />
    </main>
  )
}

