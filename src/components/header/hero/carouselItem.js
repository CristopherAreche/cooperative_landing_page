import React from "react";
import { Link } from "react-router-dom";
import Styles from "./hero.module.css"

function CarouselItem(props){
    return (
        <div className={`container-fluid d-flex align-items-center`}>
        <div className={`${Styles.textContainer} d-flex flex-column align-items-center justify-content-evenly`}>
          <div className={`${Styles.textPosition} d-flex justify-content-center flex-column`}>
            <h1>{props.title}</h1>
            <p>{props.textInfo}</p>
            <div className={Styles.buttonss}>
            <Link to="/AboutUs"><button>Learn more</button></Link>
            </div>
          </div>
        </div>
        <div className={`${Styles.heroImgContainer} d-flex align-items-center justify-content-center`}>
          <img src={props.heroImg} alt="img"/>
        </div>
      </div>
    )
}

export default CarouselItem;