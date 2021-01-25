import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import gmail from '../img/gmail.png';
import linkedin from '../img/LinkedInLogo.jpg';
import github from '../img/GitHub.png';

const Contact = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11 px-0 mt-3 mt-sm-4 mt-md-5">
                    <div className="row">
                        <div className="col-12 col-lg-8 card-container">
                            <div className="card">
                                <div className="card-body" id="about-me-card">
                                    <h1 className="card-title">Contact</h1>
                                    <hr />

                                    <div className="sub-container">
                                        <a href="https://github.com/rbozal1" ><img src={github} width= "20%" /></a> &ensp;
                <a href="mailto:roxhersbozali@gmail.com" ><img src={gmail} width= "20%"/></a> &ensp;
                <a href="https://www.linkedin.com/in/roger-roxhers-bozali-647a54177/" ><img src={linkedin} width= "20%"/></a>
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
export default Contact