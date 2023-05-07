import React from 'react'
import './Css/Container.css'
const Container = () => {
  return (
    <>
    <div className="container">
        
    <div className="left-container">
    <div className="left-container-top">
       <div className="left-container-heading">
        Join these brands
       </div>
       <div className="brand-menu">
        <div className="brand-item">JACK RUDY <br />COCKTAIL  </div>
        <div className="brand-item">FITS</div>
        <div className="brand-item">SMITHEY </div>
        <div className="brand-item">RIGWA LIFE </div>
        
       </div>
    </div>
    <div className="top-container-bottom">
    <div className="top-container-bottom-heading">
        Much, much more than <br />just picking and packing
    </div>
    <button>See everything we do</button>
    </div>
    </div>
    <div className="right-container">
        <div className="right-container-first">Lorem ipsum dolor sit amet.</div>
        <div className="right-container-second">Lorem ipsum dolor sit amet.</div>
        <div className="right-container-third">Lorem ipsum dolor sit amet.</div>
    </div>
    
    </div>  
    </>
  )
}

export default Container
