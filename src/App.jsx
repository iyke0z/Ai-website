import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Button from "./components/Button"
import Collaboration from "./components/Collaboration"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Princing from "./components/Princing"
import Roadmap from "./components/Roadmap"
import Services from "./components/Services"

function App() {
  return(
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Princing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
