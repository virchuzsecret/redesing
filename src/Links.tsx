import { useState } from 'react'
import './App.css'

function Links() {
  const [] = useState(0)

  return (
    <>
      <div className="links-container" id="links-container">
        <h4 className="links-heading">//vegan links</h4>
        <div className="info-container-flex"><div className="linksinfo-container"><p id="links-description">Learn about veganism in PETA's official page</p><a href="https://www.peta.org/international/" target="_blank"><img id="images-links" src="./../src/assets/freed-ele.jpeg" /></a></div>
        <div className="linksinfo-container"><p id="links-description">Know the Argentinian experience in "Union Vegana"</p><a href="https://www.unionvegana.org" target="_blank"><img id="images-links" src="./../src/assets/freed-llama.jpg"/></a></div>
        <div className="linksinfo-container"><p id="links-description">Watch a free documentary about veganism research</p><a href="https://www.youtube.com/watch?v=8034YxnLm-8" target="_blank"><img id="images-links" src="./../src/assets/freed-panda.jpg"/></a></div></div>
        <p id="links-p">Take in count we've chosen images off free animals in consideration of users sensitivity.</p>
      </div>
        
    </>
  )
}

export default Links

