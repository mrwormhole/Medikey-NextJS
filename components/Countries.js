import React from "react";

export default function Countries() {
    return (
        <section id="countries">
          <div className="container">
               <div className="row">

                    <div className="col-md-12 col-sm-12">
                         <div className="section-title">
                              <h2>Countries <small>visit amazing places</small></h2>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                         <div className="countries-thumb">
                              <div className="countries-image">
                                   <img src="./images/istanbul-turkey.jpg" className="img-responsive" alt="" />
                              </div>
                              <div className="countries-info">
                                   <h3>Turkey</h3>
                                   <span>Istanbul</span>
                              </div>
                              <ul className="social-icon">
                                   <li><a href="#" className="fa fa-phone"></a></li>
                                   <li><a href="#" className="fa fa-envelope"></a></li>
                              </ul>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                         <div className="countries-thumb">
                              <div className="countries-image">
                                   <img src="./images/tirana-albania.jpg" className="img-responsive" alt="" />
                              </div>
                              <div className="countries-info">
                                   <h3>Albania</h3>
                                   <span>Tirana</span>
                              </div>
                              <ul className="social-icon">
                                   <li><a href="#" className="fa fa-phone"></a></li>
                                   <li><a href="#" className="fa fa-envelope"></a></li>
                              </ul>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                         <div className="countries-thumb">
                              <div className="countries-image">
                                   <img src="./images/berlin-germany.jpg" className="img-responsive" alt="" />
                              </div>
                              <div className="countries-info">
                                   <h3>Germany</h3>
                                   <span>Berlin</span>
                              </div>
                              <ul className="social-icon">
                                   <li><a href="#" className="fa fa-phone"></a></li>
                                   <li><a href="#" className="fa fa-envelope"></a></li>
                              </ul>
                         </div>
                    </div>

                 

               </div>
          </div>
        </section>
    );
};