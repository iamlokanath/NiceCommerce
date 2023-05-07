import React from 'react'
import './Css/Main.css'
import bg from "../Image/home1.png"
const Main = () => {
  return (
    <>
    <div className="Main-header">
        <img src={bg} alt="" className="back" />
        <div className="Main-header-heading">
            No More Operational <br /> headaches. Nice.
        </div>
        <div className="Main-header-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem reiciendis architecto <br /> quia esse adipisci obcaecati excepturi tenetur eius rerum. Ea?
        </div>
        <button className="Main-header-button-text">Let's Chat</button>
        
    </div>
    </>
  )
}

export default Main
