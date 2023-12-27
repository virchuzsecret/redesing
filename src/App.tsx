import { useState } from 'react'
import './App.css'
import Dropdown from './Dropdown'
import Clothes from './Clothes'
import ClothesItems from './Clothes-Items'
import Links from './Links'


function App() {
  const [] = useState(0)

  return (
    <>
      <Dropdown />
      <div className="home-background" id="home-background"></div>
      <div className="rolling-container"><p className="rolling-phrase">_Buying any of our products you bring the activist message 100% free_</p></div>
      <Clothes />
      <ClothesItems />
      <Links />
        
    </>
  )
}

export default App