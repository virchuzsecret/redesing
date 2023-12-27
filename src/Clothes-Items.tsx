import { useState } from 'react'
import './App.css'



function ClothesItems() {
  const [] = useState(0)

  return (
    <>
        <div className="clothesitems-page" id="clothesitems-page">
            <div className="chart-btn"><img id="chart-icon" src="./../src/assets/shop.svg"/></div>
            <div className="big-item"><img id="bigitem-image" src="./../src/assets/IND1.png" /></div>
            <div className="bigitem-info"><h2>_shirt "not normal"</h2><p id="bigitem-prize">$100</p><span id="bigitem-description">Cotton shirt with stamp. Available in all sizes.</span><div className="addchart-btn">ADD TO CHART</div></div>
        </div>
        
    </>
  )
}
{/*the same for each item*/}

export default ClothesItems