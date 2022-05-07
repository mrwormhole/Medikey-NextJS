import React from "react";
import Scroll from "react-scroll";
import Image from 'next/image';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, ButtonToolbar  } from "react-bootstrap";

import { SocialLinksProp } from "../pages";

type NavigationProps = {
    socialLinks: SocialLinksProp
    onHomePage: boolean
}

export default function Navigation({socialLinks, onHomePage} : NavigationProps) {
    
    function handleSmoothScroll(targetID: string) : Function {
        let scroll = Scroll.animateScroll;
        let events = Scroll.Events;
        return () => {
            const navbar : HTMLElement = document.getElementsByClassName("navbar-main")[0] as HTMLElement
            if (navbar.getBoundingClientRect().width < 768) {
                (document.getElementsByClassName("navbar-collapse")[0] as HTMLElement).className = "navbar-collapse collapse"; 
                events.scrollEvent.register('end', function() {
                    (document.getElementsByClassName("navbar-toggle")[0] as HTMLElement).click();
                });   
            }
            
            const navbarHeight: number = navbar.offsetHeight
            const top : number = (document.getElementById(targetID) as HTMLElement).offsetTop - navbarHeight;
            scroll.scrollTo(top);
        }
    }

    function renderIfHomePage() {
        if (!onHomePage) {
            return;
        }

        return (
            <React.Fragment>
                <NavItem className="custom-nav-item" eventKey={3} href="#services" onClick={handleSmoothScroll("services")}>
                    Services
                </NavItem>
                <NavItem className="custom-nav-item" eventKey={4} href="#countries" onClick={handleSmoothScroll("countries")}>
                    Countries
                </NavItem>
                
                <NavItem className="custom-nav-item" eventKey={5} href="#contact" onClick={handleSmoothScroll("contact")}>
                    Contact
                </NavItem>
                <NavItem className="custom-nav-item-2" eventKey={2} href="/faq">
                    F.A.Q
                </NavItem>
            </React.Fragment>
        );
    }

    return (
        <Navbar className="navbar-main" collapseOnSelect fixedTop >
            <ButtonToolbar>
                <Button href="https://wa.me/447912034113" bsStyle="success" style={{float : "right"}}><i className="fa fa-phone"></i> +44 7912034113</Button>              
                <Button href={socialLinks.instragramURL} bsStyle="warning" style={{float : "right"}}><i className="fa fa-instagram"></i></Button>
                <Button href={socialLinks.twitterURL} bsStyle="info" style={{float : "right"}}><i className="fa fa-twitter"></i></Button>
                <Button href={socialLinks.facebookURL} bsStyle="primary" style={{float : "right"}}><i className="fa fa-facebook"></i></Button>
            </ButtonToolbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a className="navbar-brand-title" href="/">
                        <Image className="custom-navbar-logo" src="/images/medikey-logo-new.jpg" width={128} height={128} alt="Medikey Logo" />
                        Medikey Health Consultancy
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {renderIfHomePage()}
                      
                    <NavDropdown eventKey={6} title="Aesthetics" id="basic-nav-dropdown">
                        <MenuItem href="/info/601" eventKey={6.01}>Aesthetic Consultation</MenuItem>
                        <MenuItem divider />
                        <NavDropdown eventKey={6} title="Facial Aesthetics" id="basic-nav-dropdown">
                            <MenuItem href="/info/610" eventKey={6.10}>Lipofilling</MenuItem> 
                            <MenuItem href="/info/611" eventKey={6.11}>Rhinoplasty</MenuItem> 
                            <MenuItem href="/info/612" eventKey={6.12}>Eyelid Surgery</MenuItem> 
                            <MenuItem href="/info/613" eventKey={6.13}>Face and Necklifting</MenuItem> 
                            <MenuItem href="/info/614" eventKey={6.14}>Otoplasty</MenuItem> 
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Body Aesthetics" id="basic-nav-dropdown">
                            <MenuItem href="/info/620" eventKey={6.20}>Hip-Butt</MenuItem> 
                            <MenuItem href="/info/621" eventKey={6.21}>Sixpack</MenuItem> 
                            <MenuItem href="/info/622" eventKey={6.22}>Liposuction</MenuItem> 
                            <MenuItem href="/info/623" eventKey={6.23}>Brachioplasty</MenuItem> 
                            <MenuItem href="/info/624" eventKey={6.24}>Abdominoplasty</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Breast Aesthetics" id="basic-nav-dropdown">
                            <MenuItem href="/info/630" eventKey={6.30}>Breast Lifting</MenuItem> 
                            <MenuItem href="/info/631" eventKey={6.31}>Breast Augmentation</MenuItem> 
                            <MenuItem href="/info/632" eventKey={6.32}>Breast Reduction</MenuItem> 
                            <MenuItem href="/info/633" eventKey={6.33}>Gynecomasty</MenuItem> 
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Medical Aesthetics" id="basic-nav-dropdown">
                            <MenuItem href="/info/640" eventKey={6.40}>PRP and Mesotherapy</MenuItem> 
                            <MenuItem href="/info/641" eventKey={6.41}>Facelifting with Rope</MenuItem> 
                            <MenuItem href="/info/642" eventKey={6.42}>Filler</MenuItem> 
                            <MenuItem href="/info/643" eventKey={6.43}>Botox</MenuItem> 
                            <MenuItem href="/info/644" eventKey={6.44}>Vaccine</MenuItem>
                        </NavDropdown>
                        <MenuItem href="/info/650" eventKey={6.50}>Vaginal Aesthetics</MenuItem> 
                        <MenuItem href="/info/651" eventKey={6.51}>Hair Transplantation</MenuItem> 
                    </NavDropdown>

                    <NavDropdown eventKey={7} title="Dentistry" id="basic-nav-dropdown">
                        <MenuItem href="/info/701" eventKey={7.01}>Dental Consultation</MenuItem>
                        <MenuItem divider />
                        <MenuItem href="/info/702"eventKey={7.02}>Dental Zirconia Crowns</MenuItem>
                        <MenuItem href="/info/703" eventKey={7.03}>Dental Veneers</MenuItem>
                        <MenuItem href="/info/704" eventKey={7.04}>Root Canal</MenuItem>
                        <MenuItem href="/info/705" eventKey={7.05}>Tooth Fillings</MenuItem>
                        <MenuItem href="/info/706" eventKey={7.06}>Dental Lumineers</MenuItem>
                        <MenuItem href="/info/707" eventKey={7.07}>Dental Implant</MenuItem>
                        <MenuItem href="/info/708" eventKey={7.08}>Tooth Extraction</MenuItem>
                        <MenuItem href="/info/709" eventKey={7.09}>Dental Bridges</MenuItem>
                        <MenuItem href="/info/710" eventKey={7.10}>Teeth Whitening</MenuItem>
                    </NavDropdown>

                    <NavDropdown eventKey={8} title="Orthopedics" id="basic-nav-dropdown">
                        <MenuItem href="/info/801" eventKey={8.01}>Orthopedic Consultation</MenuItem>
                        <MenuItem divider />
                        <NavDropdown eventKey={8} title="Spine Surgery" id="basic-nav-dropdown">
                            <MenuItem href="/info/810" eventKey={8.10}>Spinal Tumors</MenuItem>
                            <MenuItem href="/info/811" eventKey={8.11}>Spinal Fractures</MenuItem>
                            <MenuItem href="/info/812" eventKey={8.12}>Disc Herniations</MenuItem>
                            <MenuItem href="/info/813" eventKey={8.13}>Spinal Deformities</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={8} title="Shoulder Surgery" id="basic-nav-dropdown">
                            <MenuItem href="/info/820" eventKey={8.20}>Artroskopic Repair of Shoulder Tendons</MenuItem>
                            <MenuItem href="/info/821" eventKey={8.21}>Shoulder Dislocation</MenuItem>
                            <MenuItem href="/info/822" eventKey={8.22}>Frozen Shoulder Syndrome</MenuItem>
                            <MenuItem href="/info/823" eventKey={8.23}>Calcific Tendinitis</MenuItem>
                            <MenuItem href="/info/824" eventKey={8.24}>Shoulder Arthritis</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={8} title="Hip Surgery" id="basic-nav-dropdown">
                            <MenuItem href="/info/830" eventKey={8.30}>Hip Prosthesis</MenuItem>
                            <MenuItem href="/info/831" eventKey={8.31}>Trochanteric Bursitis</MenuItem>
                            <MenuItem href="/info/832" eventKey={8.32}>Hip Compression Syndrome</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={8} title="Knee Surgery" id="basic-nav-dropdown">
                            <MenuItem href="/info/840" eventKey={8.40}>Arthroscopic Surgery</MenuItem>
                            <MenuItem href="/info/841" eventKey={8.41}>Meniscus Surgery</MenuItem>
                            <MenuItem href="/info/842" eventKey={8.42}>Anterior Cruciate Ligament</MenuItem>
                            <MenuItem href="/info/843" eventKey={8.43}>Knee Prosthesis</MenuItem>
                            <MenuItem href="/info/844" eventKey={8.44}>Partial Unicondiles Knee Prosthesis</MenuItem>
                            <MenuItem href="/info/845" eventKey={8.45}>High Tibia Osteotomy</MenuItem>
                        </NavDropdown>
                        <MenuItem href="/info/850" eventKey={8.50}>Stem Cell Therapy</MenuItem>                           
                    </NavDropdown>

                    <NavDropdown eventKey={9} title="Obesity" id="basic-nav-dropdown">
                        <MenuItem href="/info/901" eventKey={9.01}>Nutrition and Diet Consultation</MenuItem> 
                        <MenuItem divider />
                        <MenuItem href="/info/902" eventKey={9.02}>Bariatric and Metabolic Surgery</MenuItem> 
                        <NavDropdown eventKey={9} title="Obesite Surgery" id="basic-nav-dropdown">
                            <MenuItem href="/info/910" eventKey={9.10}>Obesity Surgery Consultation</MenuItem>
                            <MenuItem href="/info/911" eventKey={9.11}>Gastric Bypass Operation</MenuItem>
                            <MenuItem href="/info/912" eventKey={9.12}>Sleeve Gastrectomy</MenuItem> 
                            <MenuItem href="/info/913" eventKey={9.13}>Gastric Ring</MenuItem>
                            <MenuItem href="/info/914" eventKey={9.14}>Gastric Balloon</MenuItem> 
                            <MenuItem href="/info/915" eventKey={9.15}>Gastric Botox</MenuItem> 
                        </NavDropdown>
                    </NavDropdown>

                    <NavDropdown eventKey={10} title="Other" id="basic-nav-dropdown">
                        <MenuItem href="/info/1001" eventKey={10.01}>Whole Body Check-Up</MenuItem>
                        <MenuItem href="/info/1002" eventKey={10.02}>Thermal Health</MenuItem> 
                        <MenuItem href="/info/1003" eventKey={10.03}>IVF</MenuItem> 
                        <MenuItem href="/info/1004" eventKey={10.04}>Eye Surgery</MenuItem>
                        {/*<MenuItem href="/info/1005" eventKey={10.05}>Psychiatrics</MenuItem> //make invis
                        <MenuItem href="/info/1006" eventKey={10.06}>Physiotherapy</MenuItem> //make invis */}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>               
        </Navbar>   
    );
}