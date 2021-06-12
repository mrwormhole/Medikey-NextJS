import React from "react";

class Testimonial extends React.Component {

     cleanUp(element) {
          element.className = "custom-testimonial-card col-md-4 col-sm-4";
     }

     animate(element, animationName) {
          element.classList.add("animated", animationName);
     }

     slideIn(element) {
          this.cleanUp(element);
          element.style.display = "block";
          this.animate(element, "bounceInLeft");

          element.addEventListener("animationend", () => {
               this.cleanUp(element);
          });          
     }

     // slideOut(element) {
     //      this.cleanUp(element);
     //      this.animate(element, "bounceOutRight");

     //      element.addEventListener("animationend", () => {
     //           element.style.display = "none";
     //           element.removeEventListener("animationend");
     //      });
     // }

     scrollTo() {
          const cards = document.querySelectorAll(".custom-testimonial-card");
          for(var i = 0; i < cards.length; i++) {
               cards[i].style.display = "none";
          }

          let index = 0
          setInterval(() => { 
               if(index < cards.length) {
                    this.slideIn(cards[index]);   
                    index++; 
               }
          },2000);
     }

     componentDidMount = () => {
          this.scrollTo();
     }

     render = () => {
          return (
               <section id="testimonial">
                 <div className="container">
                      <div className="row">
       
                           <div className="col-md-12 col-sm-12">
                                <div className="section-title">
                                     <h2>Testimonials <small>from recent customers</small></h2>
                                </div>
       
                                <div className="custom-testimonial-card col-md-4 col-sm-4">
                                     <div className="item">
                                          <div className="tst-image">
                                               <img src="./images/testimonial-image1.jpg" className="img-responsive" alt="" />
                                          </div>
                                          <div className="tst-author">
                                               <h4>Camila</h4>
                                               <span>Travelled from UK to Turkey</span>
                                          </div>
                                          <p>The helpful guidance provided by the Medikey team from start to finish exceeded all my expectations. I would not hesitate to recommend this to anyone</p>
                                          <div className="tst-rating">
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                          </div>
                                     </div>
                                </div>
       
                                <div className="custom-testimonial-card col-md-4 col-sm-4">
                                     <div className="item">
                                          <div className="tst-image">
                                               <img src="./images/testimonial-image2.jpg" className="img-responsive" alt="" />
                                          </div>
                                          <div className="tst-author">
                                               <h4>Jackson</h4>
                                               <span>Travelled from UK to Turkey</span>
                                          </div>
                                          <p>I was very pleased with the service I received in Turkey. The whole organization was very good before and after the surgery. I will recommend you to all my friends. Thank you very much.</p>
                                          <div className="tst-rating">
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                          </div>
                                     </div>
                                </div>
       
                                <div className="custom-testimonial-card col-md-4 col-sm-4">
                                     <div className="item">
                                          <div className="tst-image">
                                               <img src="./images/testimonial-image3.jpg" className="img-responsive" alt="" />
                                          </div>
                                          <div className="tst-author">
                                               <h4>Abigail</h4>
                                               <span>Travelled from UK to Turkey</span>
                                          </div>
                                          <p>When I wasn’t in the dentist’s chair, my wife and I would take bus tours, visit castles and mosques, walk along the Istanbul bosphorus, took a cruise on the bosphorus... There wasn’t a day that went by in the three weeks that we didn’t thoroughly enjoy.</p>
                                          <div className="tst-rating">
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                          </div>
                                     </div>
                                </div>
       
                                <div className="custom-testimonial-card col-md-4 col-sm-4">
                                     <div className="item">
                                          <div className="tst-image">
                                               <img src="./images/testimonial-image4.jpg" className="img-responsive" alt="" />
                                          </div>
                                          <div className="tst-author">
                                               <h4>Andrio</h4>
                                               <span>Travelled from UK to Albania</span>
                                          </div>
                                          <p>It was so easy. You guys took care of so much, literally all I had to go was go. And it was great because I didn’t have any stress or anxieties about where I was going, how I was getting there, who was going to pick me up, every part of it was just taken care of. And every bit of the service from the beginning to the end was just incredible.</p>
                                          <div className="tst-rating">
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                          </div>
                                     </div>
                                </div>
       
                                <div className="custom-testimonial-card col-md-4 col-sm-4">
                                     <div className="item">
                                          <div className="tst-image">
                                               <img src="./images/testimonial-image5.jpg" className="img-responsive" alt="" />
                                          </div>
                                          <div className="tst-author">
                                               <h4>Alissa</h4>
                                               <span>Travelled from UK to Germany</span>
                                          </div>
                                          <p>Professional and friendly care! I was pleased with the treatment. The latest technology with professional and friendly care! Thanks for everything. I feel much more better with my new look now!</p>
                                          <div className="tst-rating">
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                               <i className="fa fa-star"></i>
                                          </div>
                                     </div>
                                </div>
       
                      </div>
                 </div>
               </div>
            </section> 
           );
     }
};

export default Testimonial;
