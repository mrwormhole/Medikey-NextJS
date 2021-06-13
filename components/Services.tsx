import React from "react";

type ServicesProps = {
     handleSubmitButton: (e: React.SyntheticEvent) => void
}

export default function Services({handleSubmitButton} : ServicesProps ) {
    return (
        <section id="services">
          <div className="container">
               <div className="row">

                    <div className="col-md-6 col-sm-12">
                         <div className="about-info">
                              <h2>Start your journey to a better life with <span style={{color: "#29ca8e"}}>Medikey Health</span></h2>

                              <figure>
                                   <span><i className="fa fa-users"></i></span>
                                   <figcaption>
                                        <h3>Professional Team</h3>
                                        <p>A careteam advisor and a translator to make you feel at home. Security to the highest standards for all your data</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i className="fa fa-hospital-o"></i></span>
                                   <figcaption>
                                        <h3>International Hospitals</h3>
                                        <p>An international network of expert doctors at your fingertips. All hospitals and clinics accredited and selected</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i className="fa fa-plane"></i></span>
                                   <figcaption>
                                        <h3>Hassle-free Travel</h3>
                                        <p>A tailor-made trip to leave with peace of mind. All bookings are managed (flights, hotels, hospitals etc.)</p>
                                   </figcaption>
                              </figure>
                         </div>
                    </div>

                    <div className="col-md-offset-1 col-md-4 col-sm-12">
                         <div className="entry-form">
                              <form onSubmit={handleSubmitButton}>
                                   <h2>Get a Quote</h2>
                                   <input type="text" name="full name" className="form-control" placeholder="Full name" id="fullname" required={true}/>

                                   <input type="email" name="email" className="form-control" placeholder="Your email address" id="fullemail" required={true}/>

                                   <input type="text" name="treatment" className="form-control" placeholder="The treatment you are interested in" id="treatment" required={true}/>

                                   <button className="submit-btn form-control" id="form-submit-quote">Send</button>
                              </form>
                         </div>
                    </div>

                </div>
            </div>
        </section>
    );
};