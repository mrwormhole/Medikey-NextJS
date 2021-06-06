import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

import { isInformationPageAvailable, findSubjectNameById, findSectionsById, showSubLinks } from "./Util";
import Navigation from "./Navigation";
import Footer from "./Footer";
import info_img from "../images/info-pattern.png";

const stylesJumbotron = {
    textAlign : "center",
    marginTop: "8rem",
    paddingTop: "5rem",
    backgroundImage: `url(${info_img})`,
    backgroundRepeat: "background-repeat: repeat",
    backgroundSize: "200px 200px",
}

function InformationPage() {
    let { topicId } = useParams();
    let availablity = isInformationPageAvailable(topicId);

    if(!availablity) {
        return (
            <Redirect to="/"/>
        );
    }

    return (
        <div>
            <Navigation InHomePage={false} />
            <Jumbotron style={stylesJumbotron}>
                <div>
                    <h2 style={{color: "white", letterSpacing: "0.25rem"}}>
                        {findSubjectNameById(topicId)}
                    </h2>
                </div>
            </Jumbotron>
            <div>
                {findSectionsById(topicId).map((section) => {
                    return (
                        <div key={0} className="container">
                            <p className="information-title"> {section.title} </p>
                            <p className="information-content"> {section.content} </p>
                        </div>
                    );
                })}

                {showSubLinks(parseInt(topicId))}
            </div>
            <br />
    
            <div className="container">
                <p style={{color: "red", fontStyle: "italic"}}> * The content of this page is for informational purposes only, do consult your doctor for diagnosis and treatment. </p>
            </div>
            
            <Footer />
        </div>
    );
};

export default InformationPage;