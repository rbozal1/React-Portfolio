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
            <div className="jumbotron jumbotron-fluid"> 
                <div className="col-11 px-0 mt-3 mt-sm-4 mt-md-5">
                    <div className="row">
                    <div id="my-contact" className="container text-center my-5">
					  <h1>Contact Me</h1>
				
				<form>
					
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
                    <div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<button
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button>
                            <div className="sub-container text-center">
                                        <a href="https://github.com/rbozal1" ><img src={github} width= "10%" /></a> &ensp;
                <a href="mailto:roxhersbozali@gmail.com" ><img src={gmail} width= "10%"/></a> &ensp;
                <a href="https://www.linkedin.com/in/roger-roxhers-bozali-647a54177/" ><img src={linkedin} width= "10%"/></a>
                                    </div>    
						</div>
					</div>

                    
				</form>
			</div>  
                        
                    </div>
                </div>
            </div>
        </div>
       </div> 
    )
}
export default Contact