import React from "react";

const Preloader = (props) => {
    if (props.active === false) {
        return (<div></div>);
    }
    return (
        <section id="preloader" className="preloader">
            <div className="spinner">
                <span className="spinner-rotate"></span>
            </div>
        </section>
    );
};

export default Preloader;