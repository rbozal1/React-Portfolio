import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../img/aboutMe.jpg"
import Resume from "../img/Roxhers_Bozali__SoftwareEngineer_.pdf";

const mainPage = () => {
    return (
    <div className="container">
    <div className="jumbotron jumbotron-fluid"> 
    <div className="row justify-content-center">
      <div className="col-11 px-50 mt-3 mt-md-4 mt-lg-10">
      <div className="row">
        <div className="col-12 col-md-6 card-container">
        <div className="card">
        <div className="card-body" id="about-me-card">
          
          <h1 className="card-title">About Me</h1>
          <hr />
          <div className="row">
          <div className="col-md">
            <img id="pic" src={Logo} width= "40%"  alt="" className="img-thumbnail" />
          <p className="card-text" >Possessing 2+ years of IT experience, and just completed a Full Stack Java Development Coding Bootcamp. I have an additional experience with Python, Visual Basic.NET, Java OOP, JavaScript, CSS, and HTML5 and XML/JSON.
            I have a bachelor’s degree in Informational Technology as well as an associate's degree in Informational Technology. I am looking for a long-term opportunity where I can utilize the skills and experiences I currently have at the entry-level while growing into a development role. 
            </p>

          <p className="card-text">I am very excited to pursue a career as a Software Engineer! </p>
          <h3><p>For more information, please check out my <a href={Resume}  target="_blank">Resume!</a></p></h3> 
         
          </div>
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
export default mainPage