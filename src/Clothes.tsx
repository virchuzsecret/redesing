import { useState } from 'react'
import './App.css'
import Dropdown from './Dropdown'


function Clothes() {
    const [] = useState(0)
  
    return (
      <> <Dropdown />
        <div className="clothes-page" id="clothes-link">
          <h4 className="heading-clothes">//clothes</h4>
          <div className="clothes-container">
            <div className="item-clothes"><img id="clothes-images" src="./../src/assets/IND1.png"/><div className="clothes-text-container"><h5>_shirt "not normal"</h5><p id="clothes-prize">$100</p><form action="#clothesitems-page"><button id="clothes-button">WATCH ITEM</button></form></div></div>
            <div className="item-clothes"><img id="clothes-images" src="./../src/assets/IND2.png"/><div className="clothes-text-container"><h5>_shirt "love and zero chaos"</h5><p>$120</p><button id="clothes-button">WATCH ITEM</button></div></div>
            <div className="item-clothes"><img id="clothes-images" src="./../src/assets/IND3.png"/><div className="clothes-text-container"><h5>_hoddie "animal liberation"</h5><p>$200</p><button id="clothes-button">WATCH ITEM</button></div></div>
            <div className="item-clothes"><img id="clothes-images" src="./../src/assets/IND4.png"/><div className="clothes-text-container"><h5>_handmade trench</h5><p>$350</p><button id="clothes-button">WATCH ITEM</button></div></div>
            <div className="item-clothes"><img id="clothes-images" src="./../src/assets/IND5.png"/><div className="clothes-text-container"><h5>_voicot cap</h5><p>$50</p><button id="clothes-button">WATCH ITEM</button></div></div>
            <div className="item-clothes"><img id="clothes-images" src="./../src/assets/IND6.png"/><div className="clothes-text-container"><h5>_brown blazer "animal liberation"</h5><p>$250</p><button id="clothes-button">WATCH ITEM</button></div></div>
          </div>
        </div>
          
      </>
    )
  }
  
  export default Clothes