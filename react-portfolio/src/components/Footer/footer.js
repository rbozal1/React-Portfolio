import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(props) {

    return (
      <footer>

     <div className="row">
     <div className="container">
   
     <div className="copyright text-center">
           &copy; All credit goes to Roxhers Bozali
     <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
        </div>
     </div>
  </footer>
    );
  }

export default Footer;