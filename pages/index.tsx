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
import Contact, { sendEmail, EmailProp } from "../components/Contact";
import Footer from "../components/Footer";

export type SocialLinksProp = {
  facebookURL: string
  twitterURL: string
  instragramURL: string
}

export default function Home() {

  <Head>
    <meta charSet="utf-8" />
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

  function handleSubmitButtonForQuote(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
          fullname: { value: string };
          fullemail: { value: string };
          treatment: { value: string};
    };
    const name = target.fullname.value;
    const email = target.fullemail.value;
    const treatment = target.treatment.value;

    if(!(name.trim() == "" ||  email.trim() == "")){
        const ep: EmailProp = {
          from_name: name,
          from_email: email,
          message: treatment,
        };
        sendEmail(ep);
        target.fullname.value = "";
        target.fullemail.value = "";
        target.treatment.value = "";
        console.log(`Email has sent with name: ${name} ,email: ${email} ,treatment: ${treatment} `);
    } else {
        console.log("Please fill the required(*) fields.");
    }
  }

  const socialLinks: SocialLinksProp = {
    facebookURL: "https://www.facebook.com/medikeyhealth/",
    twitterURL: "#",
    instragramURL: "https://www.instagram.com/medikeyhealth/",
  }

  return (
    <div>
      <Preloader active />
      <Navigation onHomePage={true} socialLinks={socialLinks} />
      <Slider />
      <Steps />
      <Services handleSubmitButton={handleSubmitButtonForQuote}/>
      <Countries />
      <Treatments />
      {/*<Testimonial />*/}
      <Contact />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
