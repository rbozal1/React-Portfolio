import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from "img"

function body(props) {
    return (
        <div className="aboutApp">
        <div className="container">
    <div class="row justify-content-center">
      <div class="col-11 px-0 mt-3 mt-sm-4 mt-md-5">
      <div class="row">
        <div class="col-12 col-md-6 card-container">
        <div class="card">
        <div class="card-body" id="about-me-card">
          
          <h1 class="card-title">About Me</h1>
          <hr />
          <div class="row">
          <div class="col-md">
            {/* <img id="about-me-image" src={Logo} width= "40%" class="rounded float-left"  */}
               {/* alt="Responsive image" class="img-thumbnail" /> */}
          <p class="card-text" class="float-right">Possessing 2+ years of IT experience, and just completed a Full Stack Java Development Coding Bootcamp. I have an additional experience with Python, Visual Basic.NET, Java OOP, JavaScript, CSS, and HTML5 and XML/JSON.
            I have a bachelor’s degree in Informational Technology as well as an associate's degree in Informational Technology. I am looking for a long-term opportunity where I can utilize the skills and experiences I currently have at the entry-level while growing into a development role. 
            </p>

          <p class="card-text">I am very excited to pursue a career as a Software Engineer! </p>
          <h3><p>For more information, please check out my <a href="assets/img/Roxhers_Bozali__SoftwareEngineer_.pdf" style="text-decoration: none;" target="_blank">Resume!</a></p></h3> 
         
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

export default body