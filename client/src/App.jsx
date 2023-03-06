import React from 'react'
import Allocations from './views/Allocations'
import Dapp from './views/Dapp'
import Footer from './views/Footer'
import Hero from './views/Hero'
import Roadmap from './views/Roadmap'
import Tiersystem from './views/Tiersystem'
import Tokenomics from './views/Tokenomics'
import Tools from './views/Tools'


const App = () => {
  return (
    <div className='bg-hero relative'>
      <div className="bg-transparent h-2 w-2 absolute top-0 left-0" id="home"></div>
      <Hero />
      <Tiersystem />
      <Tools />
      <Dapp />
      <Tokenomics />
      <Allocations />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App