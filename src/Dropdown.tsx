import { useState } from 'react'
import './App.css'
import logo_menubar from "./../src/assets/logo_menubar.png"
import shirt from "./../src/assets/shirt.svg"
import spray from "./../src/assets/spray.svg"
import book from "./../src/assets/book.svg"
import seed from "./../src/assets/seed.svg"


function Dropdown() {
  const [] = useState(0)

  return (
    <>
      <div className="menu-bar">
          <div className="container">
            <nav><a href="#home-background"><img id="logo-menubar" src={logo_menubar} alt="logo-menu" /></a>
            <a href="#clothes-link"><img id="clothes" src={shirt} alt="Clothes" /></a>
            <a><img id="books" src={book} alt="Book" /></a>
            <a><img id="prints" src={spray} alt="Prints" /></a>
            <a href="#links-container"><img id="vegan" src={seed} alt="Vegan Links" /></a>
          </nav></div>
        </div>
          
  
    </>
  )
}

export default Dropdown