import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const mainPage = () => {
    return (
        <div className="navApp">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="col-md-1"></div>
            <div className="col-md-3">
            <span id="name" className="navbar-brand mb-0 h1" style={{color: "white"}}>Roxhers Bozali</span>
            </div>
            <div className="col-md-3">

            </div>
            <div className="col-md-1">
                <Link to="/About" style={{color: "white"}}>About Me</Link>
            </div>
            <div className="col-md-1">
            <Link to="/Portfolio" style={{color: "white"}}>Portfolio</Link>
            </div>
            <div className="col-md-1">
            <Link to="/Contact" style={{color: "white"}}>Contact</Link>
            </div>
            <div className="col-md-1"></div>
        </nav>

    </div>
        )
    }
    export default mainPage