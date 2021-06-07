import React from "react";

export default function Steps() {
    return (
        <section id="steps">
          <div className="container">
               <div className="row">

                    <div className="col-md-4 col-sm-4">
                         <div className="feature-thumb">
                              <span>01</span>
                              <h3>Contact us</h3>
                              <p>Send us your personal details and medical details via our website, email or whatsapp. Tell us about treatment you need.</p>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                         <div className="feature-thumb">
                              <span>02</span>
                              <h3>Documents check</h3>
                              <p>After you provided us personal details and medical details, we will do a check for hospital's approval and appointment date </p>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                         <div className="feature-thumb">
                              <span>03</span>
                              <h3>Ready to meet</h3>
                              <p>Once all arrangements are set. We will meet you at the airport. VIP transfers will take you to the hotel accommodation</p>
                         </div>
                    </div>

                </div>
            </div>
         </section>
    );
};