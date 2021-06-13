import React from "react";
import { SocialLinksProp}  from "../pages/index"

export default function Footer(props: {socialLinks: SocialLinksProp}) {
    return (
        <footer id="footer">
          <div className="container">
               <div className="row">

                    <div className="col-md-4 col-sm-12">
                         <div className="footer-info newsletter-form">
                              <div className="section-title">
                                   <h2>Newsletter Signup</h2>
                              </div>
                              <div>
                                   <div className="form-group">
                                        <form action="#" method="get">
                                             <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required={true} />
                                             <input type="submit" className="form-control" name="submit" id="form-submit" value="Send me" />
                                        </form>
                                        <span><sup>*</sup> Please note - we do not spam your email.</span>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                         <div className="footer-info">
                              <ul className="social-icon">
                                   <li><a href={props.socialLinks.facebookURL} className="fa fa-facebook-square"></a></li>
                                   <li><a href={props.socialLinks.twitterURL} className="fa fa-twitter"></a></li>
                                   <li><a href={props.socialLinks.instragramURL} className="fa fa-instagram"></a></li>
                              </ul>

                              <div className="copyright-text"> 
                                   <p>Copyright &copy; 2020 Medikey Health Consultancy</p>
                                   <p>Developed by: Goldenhand Software</p>
                              </div>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                         <div className="footer-info">
                              <div className="footer_menu">
                                   <h2>Quick Links</h2>
                                   <ul>
                                        <li><a href="/">Home</a></li>
                                        <p></p>
                                        <li><a href="/faq">F.A.Q</a></li>
                                        <p></p>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <p></p>
                                        <li><a href="#">Refund Policy</a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     </footer>
    );
};