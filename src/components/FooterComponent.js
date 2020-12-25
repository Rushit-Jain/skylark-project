import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address className="addressTag">
                    <a href="http://djsce.ac.in/">Dwarkadas J. Sanghvi College of Engineering</a><br></br>
                    No. U-15, J.V.P.D. Scheme,<br />
                    Bhaktivedanta Swami Rd, Opp.Cooper Hospital,<br />
                    Vile Parle, Mumbai, Maharashtra 400056, India<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 72085 37704<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:djs.skylark@gmail.com">
                      djs.skylark@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center mt-3 mb-3">
                        <h5>Follow Us</h5>
                        <a className="btn btn-social-icon" href="https://www.facebook.com/djsskylark/"><i className="fa fa-facebook-square"></i></a>
                        <a className="btn btn-social-icon" href="https://www.linkedin.com/company/djsskylark/?originalSubdomain=in"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon" href="https://twitter.com/djsskylark?lang=en"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon" href="https://www.instagram.com/djsskylark/?hl=en"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="row text-center justify-content-center">          
                <p><br></br><br></br>©️ Copyright 2020 DJS Skylark<br></br><br></br>Created By Kirtan Jhaveri &amp; Rushit Jain</p>
            </div>
        </div>
    </div>
    );
}

export default Footer;