import HeroSection from '../components/HeroSection'
import ValueSection from '../components/ValueSection'
import HowItWorks from '../components/HowItWorks'
import UseCases from '../components/UseCases'
import Roadmap from '../components/Roadmap'
import DashboardDemo from '../components/DashboardDemo'
import Tokenomics from '../components/Tokenomics'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background overlay for better contrast */}
      <div className="fixed inset-0 bg-gradient-to-br from-dobi-dark via-dobi-navy to-dobi-dark pointer-events-none z-0" />
      
      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection />
        <ValueSection />
        <HowItWorks />
        <UseCases />
        <Roadmap />
        <DashboardDemo />
        <Tokenomics />
        <FinalCTA />
      </div>
    </main>
  )
}
