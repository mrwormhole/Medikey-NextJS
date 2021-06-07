import React from "react";
import { useRouter } from "next/router";
import { Jumbotron } from "react-bootstrap";

import { isInformationPageAvailable, findSubjectNameById, findSectionsById, showSubLinks } from "../../components/Util";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const stylesJumbotron = {
    textAlign : "center",
    marginTop: "8rem",
    paddingTop: "5rem",
    backgroundImage: `url("../../public/images/info-pattern.png")`,
    backgroundRepeat: "background-repeat: repeat",
    backgroundSize: "200px 200px",
}

function InformationPage() {
    const router = useRouter();
    let { topicID } = router.query;
    let availablity = isInformationPageAvailable(topicID);

    if(!availablity) {
        return router.push("/");
    }

    return (
        <div>
            <Navigation InHomePage={false} />
            <Jumbotron style={stylesJumbotron}>
                <div>
                    <h2 style={{color: "white", letterSpacing: "0.25rem"}}>
                        {findSubjectNameById(topicID)}
                    </h2>
                </div>
            </Jumbotron>
            <div>
                {findSectionsById(topicID).map((section) => {
                    return (
                        <div key={0} className="container">
                            <p className="information-title"> {section.title} </p>
                            <p className="information-content"> {section.content} </p>
                        </div>
                    );
                })}

                {showSubLinks(parseInt(topicID))}
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