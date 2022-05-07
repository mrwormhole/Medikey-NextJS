import React from "react";
import {Carousel} from "react-bootstrap";

const stylesImagesMain : React.CSSProperties = {
    width: "100%",
    height: "650px",
    objectFit: "cover",
    objectPosition: "50% 50%",
};

const stylesImagesOthers : React.CSSProperties = {
    width: "100%",
    height: "650px",
    objectFit: "cover",
    objectPosition: "0 0",
};

export default function Slider() {
    return (
        <Carousel id="#home">
                <Carousel.Item>
                    <img className="fluid" style={stylesImagesMain} alt="900x500" src="./images/slider-image1.jpg" />
                    <Carousel.Caption>
                        <h1 className="custom-carousel-text">The new standard in medical tourism</h1>
                        <h3 className="custom-carousel-text">Medikey plans your medical trip from A to Z in internationally accredited hospitals with an assistant available 24/7. Access the best of health everywhere, all the time.</h3>
                        <a href="#contact" className="custom-carousel-button btn btn-default scroll">Let's chat</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={stylesImagesMain} alt="900x500" src="./images/slider-image2.jpg" />
                    <Carousel.Caption>
                        <h1 className="custom-carousel-text">Start your holiday without hesitation</h1>
                        <h3 className="custom-carousel-text">Hassle-free medical appointments, various medical treatments and great hotel accommodation with provided certified translator.</h3>
                        <a href="#countries" className="custom-carousel-button btn btn-default scroll">Take a look</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={stylesImagesOthers} alt="900x500" src="./images/slider-image3.jpg" />
                    <Carousel.Caption>
                        <h1 className="custom-carousel-text">Enjoy your fulfilling experience in medical tourism</h1>
                        <h3 className="custom-carousel-text">Our medical trips are built in partnership with professional doctors and are designed to meet industry demands at affordable prices.</h3>
                        <a href="#services" className="custom-carousel-button btn btn-default scroll">Discover more</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}