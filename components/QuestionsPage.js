import React from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import QuestionBox from "./QuestionBox";

import faq_img from "../images/question-marks.png";

const stylesJumbotron = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    objectPosition: "0 0",
    backgroundImage: `url(${faq_img})`,
    paddingTop: "18rem"
};

class QuestionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

    }

    changeIsOpen(previousState) {
        this.setState({
            isOpen: !previousState
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeIsOpen(this.state.isOpen);
        }, 500)
    }

    render = () => {
        return (
            <div>
                <Navigation InHomePage={false} />
                <Jumbotron style={stylesJumbotron}>
                    <h1 style={{textAlign: "center", color: "white"}}>Frequently Asked Questions</h1>  
                </Jumbotron>

                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question="Why is it safe with Medikey?"
                            answer= "Because, Medikey is cooperating with the best clinics which is equipped with the latest technology and expert doctors in their fields."
                            isOpen={this.state.isOpen} />
                        </Col>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question="What's included in the price?"
                            answer= "According to your price plan, the total price generally includes hospital, hotel, airplane ticket and VIP transfers from the airport and the hotel."
                            isOpen={this.state.isOpen} />
                        </Col>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question="Can every country citizen come and have a medical treatment in Turkey?"
                            answer= "Absolutely yes. You can get all kind of treatment in Turkey regardless of your nationality, gender and race."
                            isOpen={this.state.isOpen} />
                        </Col>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question="Which medical services can do in the Turkish hospitals and clinics?"
                            answer= "Our hospitals and medical clinics can provide a wide range of services from plastic surgery to dental implants. For a detailed list, you can check our website's medical departments"
                            isOpen={this.state.isOpen} />
                        </Col>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question="Do Turkish hospitals have accreditations for the treatments and surgeries you have listed?"
                            answer= "Our affiliate hospitals and medical clinics have certificates and accreditations, setting global standarts."
                            isOpen={this.state.isOpen} />
                        </Col>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question="How will I communicate with my doctors in Turkey?"
                            answer= "We provide you a certified translator during the treatments. Besides, the most of doctors in Turkey can fluently speak English."
                            isOpen={this.state.isOpen} />
                        </Col>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question="Where do I make the payment?"
                            answer= "You make the payment directly to the hospital where you will have your selected treatment."
                            isOpen={this.state.isOpen} />
                        </Col>
                        <Col xs={12} md={6}>
                            <QuestionBox 
                            question= "Where will I accommodate in Turkey?"
                            answer= "You will stay in the hospital during the treatment. Then you will stay in a luxury hotel accommodation close to the hospital during the waiting period."
                            isOpen={this.state.isOpen} />
                        </Col>
                    </Row>
                </Grid>

                <Footer />
            </div>
        );     
    }
   
};

export default QuestionsPage;