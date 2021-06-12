import Head from 'next/head'
import React, { useEffect } from "react"
import Axios from "axios";

import Preloader from "../components/Preloader";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import Steps from "../components/Steps";
import Services from "../components/Services";
import Countries from "../components/Countries";
import Treatments from "../components/Treatments";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {

  <Head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="title" content="Medikey Health Consultancy - Health Tourism Company in UK &amp; Turkey" />
    <meta name="description" content="Medikey Health Consultancy is a UK-based health tourism company which offers the best treatments with the best tours in Turkey." />
    <meta name="keywords" content="health tourism uk, health tourism turkey, health tourism definitions, health tourism statistics, health tourism companies, health tourism examples, health tourism agency, health tourism activities, health tourism definition, health tourism turkey" />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="10 days" />
    <meta name="author" content="Medikey Health Consultancy" />   
    <title>Medikey Health Consultancy</title>
  </Head>

  useEffect(() => {
    var fadeTarget = document.getElementById("preloader"); 
    setTimeout(() => { 
      fadeTarget.style.display = "none";
    }, 500);
  })

  function sendEmail(from_name,from_email,message) {
    const data = {
        from_name: from_name,
        from_email: from_email,
        to_email: "elifcihanaltinel@gmail.com",
        to_name: "Medikey Health Consultants",
        message : message
    };
    
    Axios.post("https://medikeyhealth.co.uk.com/api/email", data);
  }

  function handleSubmitButton(e) {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    if(!(name.trim() == "" ||  email.trim() == "")){
        sendEmail(name,email,message);
        e.target.elements.name.value = "";
        e.target.elements.email.value = "";
        e.target.elements.message.value = "";
        console.log(`Email has sent with name: ${name} ,email: ${email} ,message: ${message} `);
    } else {
        console.log("Please fill the required(*) fields.");
    }
  }

  function handleSubmitButtonForQuote() {
    e.preventDefault();

    const name = e.target.elements.fullname.value;
    const email = e.target.elements.fullemail.value;
    const treatment = e.target.elements.treatment.value;

    if(!(name.trim() == "" ||  email.trim() == "")){
        sendEmail(name,email,treatment);
        e.target.elements.fullname.value = "";
        e.target.elements.fullemail.value = "";
        e.target.elements.treatment.value = "";
        console.log(`Email has sent with name: ${name} ,email: ${email} ,treatment: ${treatment} `);
    } else {
        console.log("Please fill the required(*) fields.");
    }
  }

  return (
    <div>
      <Preloader active={true}/>
      <Navigation InHomePage={true} />
      <Slider />
      <Steps />
      <Services handleSubmitButton={handleSubmitButtonForQuote}/>
      <Countries />
      <Treatments />
      {/*<Testimonial />*/}
      <Contact handleSubmitButton={handleSubmitButton} />
      <Footer />
    </div>
  );
}
