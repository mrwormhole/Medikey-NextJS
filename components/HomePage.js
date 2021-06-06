import React from 'react';

import Preloader from "./Preloader";
import Navigation from "./Navigation";
import Slider from "./Slider";
import Steps from "./Steps";
import Services from "./Services";
import Countries from "./Countries";
import Treatments from "./Treatments";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";

import Axios from "axios"; //for email

class HomePage extends React.Component {

  data = {
    from_name: undefined,
    from_email: undefined,
    to_name: undefined,
    telephone_number: undefined,
    estimated_start_date: undefined,
    message : undefined
  };

  fadeOut() {
    var fadeTarget = document.getElementById("preloader"); 
    setTimeout(() => { 
      fadeTarget.style.display = "none";
    }, 500);
  }

  componentDidMount = () => {
    this.fadeOut();
  };
  
  sendEmail = (from_name,from_email,message) => {
    this.data = {
        from_name: from_name,
        from_email: from_email,
        to_email: "elifcihanaltinel@gmail.com",
        to_name: "Medikey Health Consultants",
        message : message
    };
    
   Axios.post("https://medikey.herokuapp.com/api/email", this.data);
  }

  handleSubmitButton = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    if(!(name.trim() == "" ||  email.trim() == "")){
        this.sendEmail(name,email,message);
        e.target.elements.name.value = "";
        e.target.elements.email.value = "";
        e.target.elements.message.value = "";
        console.log(`Email has sent with name: ${name} ,email: ${email} ,message: ${message} `);
    } else {
        console.log("Please fill the required(*) fields.");
    }
  }

  handleSubmitButtonForQuote = (e) => {
    e.preventDefault();

    const name = e.target.elements.fullname.value;
    const email = e.target.elements.fullemail.value;
    const treatment = e.target.elements.treatment.value;

    if(!(name.trim() == "" ||  email.trim() == "")){
        this.sendEmail(name,email,treatment);
        e.target.elements.fullname.value = "";
        e.target.elements.fullemail.value = "";
        e.target.elements.treatment.value = "";
        console.log(`Email has sent with name: ${name} ,email: ${email} ,treatment: ${treatment} `);
    } else {
        console.log("Please fill the required(*) fields.");
    }

  }
  

  render = () => {
    return (
      <div>
        <Preloader active={true}/>
        <Navigation InHomePage={true} />
        <Slider />
        <Steps />
        <Services handleSubmitButton={this.handleSubmitButtonForQuote}/>
        <Countries />
        <Treatments />
        {/*<Testimonial />*/}
        <Contact handleSubmitButton={this.handleSubmitButton} />
        <Footer />
      </div>
    );
  };
}

export default HomePage;
