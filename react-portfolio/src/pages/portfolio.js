import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic from '../img/noteTaker.png';
import Picture from '../img/Film2Book.png';
import weatherDash from '../img/WeatherDash.png';
import quizGame from '../img/Quiz-Game.png';
import burger from '../img/burger.png';
import kodi from '../img/kodi.png';

const portfolio = () => {
    return (
<div className="container">
    <div className="row justify-content-center">
        <div className="col-11 px-0 mt-3 mt-sm-4 mt-md-5">
            <div className="row">
                <div className="col-12 col-md-6 card-container">
                    <div className="card">
                        <div className="card-body" id="about-me-card">
                            <h1 className="card-title">Github-Pages-Projects</h1>
                            <hr />

                            <div className="row">
                                <div className="col-xs">
                                    <img src={Picture} className="rounded float-left" width= "25%"
        alt="Responsive"/>
        <h3><a href="https://rbozal1.github.io/Project_1-Film2book/"  > Film2Book</a>
        |<a href="https://github.com/rbozal1/Project_1-Film2book" > GitHub</a></h3>
                                </div>
                            </div>
                            <hr>
                            </hr>
                                <div className="row">
                                    <div className="col-xs">
                                        <img src={weatherDash} className="rounded float-left" width= "25%"
      alt="Responsive "/>
      <h3><a href="https://rbozal1.github.io/HW06-Server-Side-APIs-WeatherDashboard/" s> Weather Dashboard</a>
    |<a href="https://github.com/rbozal1/HW06-Server-Side-APIs-WeatherDashboard" > GitHub</a></h3>
                                    </div>
                                </div>
                                
                                <hr/>
                                    <div className="row">
                                        <div className="col-xs">
                                            <img src={quizGame} className="rounded float-left" width= "25%"
  alt="Responsive " />
  <h3><a href="https://rbozal1.github.io/HW04-Web-APIs-Code-Quiz/" > Quiz Game</a>
  |<a href="https://github.com/rbozal1/HW04-Web-APIs-Code-Quiz"  > GitHub</a></h3>
                                        </div>
                                    </div>
</div>
</div>
                        </div>

                        <div className="col-12 col-md-6 card-container">
                            <div className="card">
                                <div className="card-body" id="about-me-card">
                                    <h1 className="card-title">Heroku-Projects</h1>
                                    <hr />
                                    
      <div className="row">
                                        <div className="col-xs">
                                            <img src={Pic} className="rounded float-left" width= "25%" alt="Responsive"/>
          <h3><a href="https://immense-castle-52349.herokuapp.com/"  > Note Taker</a>
          |<a href="https://github.com/rbozal1/Unit-11-Express-Homework-Note-Taker"> GitHub</a></h3>
                                        </div>
                                    </div>
                                    <hr/>
                                    
                                        <div className="row">
                                            <div className="col-xs">
                                                <img src={burger} className="rounded float-left" width= "25%"
        alt="Responsive"/>
        <h3><a href="https://salty-mountain-92577.herokuapp.com/burgers"  > Burger-Logger</a>
        |<a href="https://github.com/rbozal1/HW13-Burger-Logger" > GitHub</a></h3>
                                            </div>
                                        </div>
                                        <hr/>
                                        
                                            <div className="row">
                                                <div className="col-xs">
                                                    <img src={kodi} className="rounded float-left" width= "25%"
    alt="Responsive" />
    <h3><a href="https://social-media-app-kodi.herokuapp.com/" >KODI-SocialMediaApp</a>
    |<a href="https://github.com/nickgdam/KODI-SocialMediaApp" > GitHub</a></h3>
                                                </div>
                                            </div>
  </div>
  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
}
export default portfolio