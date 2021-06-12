import React from "react";

export default function Contact({handleSubmitButton}) {
    return (
          <section id="contact">
               <div className="container">
                    <div className="row">

                         <div className="col-md-6 col-sm-12">
                              <form id="contact-form" role="form" onSubmit={handleSubmitButton}>
                                   <div className="section-title">
                                        <h2>Contact us <small>we love conversations. let us talk!</small></h2>
                                   </div>

                                   <div className="col-md-12 col-sm-12">
                                        <input type="text" className="form-control" placeholder="Enter full name" name="name" id="name" required="" />
                         
                                        <input type="email" className="form-control" placeholder="Enter email address" name="email" id="email" required="" />

                                        <textarea className="form-control" rows="6" placeholder="Tell us about your message" name="message" id="message" required=""></textarea>
                                   </div>

                                   <div className="col-md-4 col-sm-12">
                                        <input type="submit" className="form-control" name="send message" value="Send Message" />
                                   </div>
                              </form>
                         </div>

                         <div className="col-md-6 col-sm-12">
                              <div className="contact-image">
                                   <img src="./images/contact-image.jpg" className="img-responsive" alt="Smiling Two Girls" />
                              </div>
                         </div>

                    </div>
               </div>
          </section>  
    );
};