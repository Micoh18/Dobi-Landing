import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ValueSection from '../components/ValueSection'
import HowItWorks from '../components/HowItWorks'
import X402Section from '../components/X402Section'
import UseCases from '../components/UseCases'
import Roadmap from '../components/Roadmap'
import Tokenomics from '../components/Tokenomics'
import FlappyDobi from '../components/FlappyDobi'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      {/* Background overlay for better contrast */}
      <div className="fixed inset-0 bg-gradient-to-br from-dobi-dark via-dobi-navy to-dobi-dark pointer-events-none z-0" />
      
      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection />
        <ValueSection />
        <HowItWorks />
        <X402Section />
        <UseCases />
        <FlappyDobi />
        <Roadmap />
        <Tokenomics />
        <FinalCTA />
      </div>
    </main>
  )
}
