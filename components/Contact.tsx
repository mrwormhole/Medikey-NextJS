import Axios from "axios";
import React from "react";

export type EmailProp = {
     from_name: string
     from_email: string
     message: string 
}

type EmailData = EmailProp & {
     to_email: string
     to_name: string
}

export function sendEmail(ep: EmailProp) {
     const data : EmailData = {
         from_name: ep.from_name,
         from_email: ep.from_email,
         to_email: "elifcihanaltinel@gmail.com",
         to_name: "Medikey Health Consultants",
         message : ep.message
     };
     
     Axios.post("https://www.medikeyhealth.co.uk/api/email", data);
}

export default function Contact() {
    return (
          <section id="contact">
               <div className="container">
                    <div className="row">

                         <div className="col-md-6 col-sm-12">
                              <form id="contact-form" role="form" 
                                   onSubmit={(e: React.SyntheticEvent) => {
                                        e.preventDefault();
                                        const target = e.target as typeof e.target & {
                                             name: { value: string };
                                             email: { value: string };
                                             message: { value: string};
                                        };
                                        const name = target.name.value; 
                                        const email = target.email.value;
                                        const message = target.message.value;

                                        if(!(name.trim() == "" ||  email.trim() == "")){
                                             const ep: EmailProp = {
                                                  from_name: name,
                                                  from_email: email,
                                                  message: message,
                                             }
                                             sendEmail(ep);
                                             target.name.value = "";
                                             target.email.value = "";
                                             target.message.value = "";
                                             console.log(`Email has sent with name: ${name} ,email: ${email} ,message: ${message} `);
                                        } else {
                                             console.log("Please fill the required(*) fields.");
                                        }
                              }}>
                                   <div className="section-title">
                                        <h2>Contact us <small>we love conversations. let us talk!</small></h2>
                                   </div>

                                   <div className="col-md-12 col-sm-12">
                                        <input type="text" className="form-control" placeholder="Enter full name" name="name" id="name" required={true} />
                         
                                        <input type="email" className="form-control" placeholder="Enter email address" name="email" id="email" required={true} />

                                        <textarea className="form-control" rows={6} placeholder="Tell us about your message" name="message" id="message" required={true}></textarea>
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