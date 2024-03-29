import React from "react";

export default function Treatments() {
    return (
     <section id="treatments">
          <div className="container">
               <div className="row">

                    <div className="col-md-12 col-sm-12">
                         <div className="section-title">
                              <h2>Popular Treatments <small>from all around the world</small></h2>
                         </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                         <div className="item">
                              <div className="treatments-thumb">
                                   <div className="treatments-top">
                                        <div className="treatments-image">
                                             <img src="./images/dentistry.jpg" className="img-responsive" alt="" />
                                        </div>
                                   </div>

                                   <div className="treatments-detail">
                                        <h3><a href="/info/701">Dentistry Care</a></h3>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                   </div>

                                   <div className="treatments-info">
                                        <div className="treatments-button">
                                             <a href="/info/701"><span>SEE DETAILS</span></a>
                                        </div>
                                   </div> 
                              </div>
                         </div>
                    </div>
                         
                    <div className="col-md-3 col-sm-6">
                         <div className="item">
                              <div className="treatments-thumb">
                                   <div className="treatments-top">
                                        <div className="treatments-image">
                                             <img src="./images/aesthetics.jpg" className="img-responsive" alt="" />
                                        </div>
                                   </div>

                                   <div className="treatments-detail">
                                        <h3><a href="/info/601">Aesthetics</a></h3>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                   </div>

                                   <div className="treatments-info">
                                        <div className="treatments-button free">
                                             <a href="/info/601"><span>SEE DETAILS</span></a>
                                        </div>
                                   </div> 
                              </div>
                         </div>
                    </div>

                    

                    <div className="col-md-3 col-sm-6">
                         <div className="item">
                              <div className="treatments-thumb">
                                   <div className="treatments-top">
                                        <div className="treatments-image">
                                             <img src="./images/orthopedics.jpg" className="img-responsive" alt="" />
                                        </div>
                                   </div>

                                   <div className="treatments-detail">
                                        <h3><a href="/info/801">Orthopedics</a></h3>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                   </div>

                                   <div className="treatments-info">
                                        <div className="treatments-button">
                                             <a href="/info/801"><span>SEE DETAILS</span></a>
                                        </div>
                                   </div> 
                              </div>
                         </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                         <div className="item">
                              <div className="treatments-thumb">
                                   <div className ="treatments-top">
                                        <div className="treatments-image">
                                             <img src="./images/obesity.jpg" className="img-responsive" alt="" />
                                        </div>
                                   </div>

                                   <div className="treatments-detail">
                                        <h3><a href="/info/901">Obesity Surgery</a></h3>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                   </div>

                                   <div className="treatments-info">
                                   
                                        <div className="treatments-button free">
                                             <a href="/info/901"><span>SEE DETAILS</span></a>
                                        </div>
                                   </div> 
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     </section>
    );
};