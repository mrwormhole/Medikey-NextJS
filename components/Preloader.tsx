import React from "react";

type PreloaderProps = {
    active: boolean
}

export default function Preloader({active} : PreloaderProps) {
    if (!active) {
        return (<React.Fragment />);
    }
    return (
        <section id="preloader" className="preloader">
            <div className="spinner">
                <span className="spinner-rotate"></span>
            </div>
        </section>
    );
};