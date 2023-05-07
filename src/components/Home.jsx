import React from "react";
import "./Css/Home.css";
import Homebg from "../Image/home1.png";
const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="nav">
          <div className="nav-container">
            <div className="logo">
              <h2>NICE COMMERECE</h2>
            </div>
            <div className="nav-menu">
              <div className="nav-item">ABOUT</div>
              <div className="nav-item">HOW IT WORKS</div>
              <div className="nav-item">WHY NICE COMMERECE</div>
            </div>
          </div>
        </div>
        <div className="header">
          <h2>
            No more operational <br />
            headaches. Nice.
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur eligendi nihil <br />
            commodi explicabo non voluptates dolorem quas. Aliquam, libero iste?
          </p>
          <button>Let's Chat</button>
        </div>
        <div className="home-bg">
          <img src={Homebg} alt="home background" />
        </div>


        <div className="container">
            <div className="inside-container">
          <div className="left-container">
            <div className="left-top-container">
              <h3>Join these brands</h3>
              <div className="left-top-container-menu">
                <div className="left-top-container-item">
                  JACK RUDY <br/>
                  COCKTAIL CO.
                </div>
                <div className="left-top-container-menu-item"></div>
                <div className="left-top-container-item">FITS</div>
                <div className="left-top-container-item">SMITHEY</div>
                <div className="left-top-container-item">RIGWA LIFE</div>
              </div>
            </div>
            <div className="left-bottom-container">
                <h2>Much much more than <br/> just picking and packing</h2>
                <button>See every thing we do</button>
            </div>
          </div>
          <div className="right-container">
            <div className="first-right-container"></div>
            <div className="right-second-container"></div>
            <div className="right-third-container"></div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
