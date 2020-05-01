import React from 'react';
import preloaderSvg from "../../../assets/images/preloader_1.svg";

import "./style.css";

const Preloader = (props) => {
    return (
        <div className="Preloader flexible jCenter aCenter">
            <div className="preloadContainer">
                <div className="preloadContent">
                    <img src={preloaderSvg} alt="preloader"/>
                </div>
            </div>
        </div>
    );
}
export default Preloader;