import React, {useEffect, useState} from "react";
import { Jumbotron } from "react-bootstrap";
import { NextRouter, useRouter } from "next/router";

import { isInformationPageAvailable, findSubjectNameById, findSectionsById, showSubLinks } from "../../components/Util";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader"
import { SocialLinksProp } from "..";

export function InformationPage() {
    const router: NextRouter = useRouter();
    //let id: number
    const [id, setID] = useState<number | undefined>(0);

    useEffect(() => {
        if(!router.isReady) return;
        let { topicID } = router.query;
        let availability: boolean;

        if (Array.isArray(topicID)) {
            availability = false;
        } else {
            setID(parseInt(topicID));
            availability = isInformationPageAvailable(parseInt(topicID));
        }
        if (!availability) {
            router.push("/404");
        }
    }, [router.isReady]);

    const socialLinks: SocialLinksProp = {
        facebookURL: "https://www.facebook.com/medikeyhealth/",
        twitterURL: "#",
        instragramURL: "https://www.instagram.com/medikeyhealth/",
    }

    if(id === undefined || !router.isReady) {
        return <Preloader active={true} />
    }

    return (
        <div>
            <Navigation onHomePage={false} socialLinks={socialLinks} />
            <Jumbotron className="custom-jumbotron">
                <div>
                    <h2 style={{color: "white", letterSpacing: "0.25rem"}}>
                        {findSubjectNameById(id)}
                    </h2>
                </div>
            </Jumbotron>
            <div>
                {findSectionsById(id)?.map((section) => {
                    return (
                        <div key={0} className="container">
                            <p className="information-title"> {section.title} </p>
                            <p className="information-content"> {section.content} </p>
                        </div>
                    );
                })}

                {showSubLinks(id)}
            </div>
            <br />
    
            <div className="container">
                <p style={{color: "red", fontStyle: "italic"}}> * The content of this page is for informational purposes only, do consult your doctor for diagnosis and treatment. </p>
            </div>
            
            <Footer socialLinks={socialLinks} />
        </div>
    );
};

export default InformationPage;