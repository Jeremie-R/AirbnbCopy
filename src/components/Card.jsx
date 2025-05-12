import React from "react"
import ReactDOM from "react-dom/client"
import "./Card.css"
import CardDefault from "../assets/CardDefault.png"
import wedding from "../assets/wedding.png"
import bike from "../assets/bike.png"
import swiming from "../assets/swiming.png"
import star from "../assets/star.png"


export default function Card(props) {

    const imageMap = {
        CardDefault,
        wedding,
        bike,
        swiming,
    };


    const label = props.label;
    const cardTitle = props.cardTitle || "NoData";
    const rating = props.rating || "NoData";
    const country = props.country || "NoData";
    const price = props.price || "NoData";
    const image = imageMap[props.image] || CardDefault;


    return (
        <div className="card">

            {label !== "" ? (
                <div className="chip">
                <p>{label}</p>
                </div>
            ) : (
                <div className="chip tranparent"> <p>.</p> </div>
            )}

            <img src={image} alt="card default img" />
            <div className="cardText">
                <div className="Row">
                    <img id="star" src={star} alt="star" />
                    <p>{rating}</p>
                    <p className="light">{country}</p>
                </div>
                <p>{cardTitle}</p>
                <div className="Row NoGap">
                    <p className="Bold">{price}</p>
                    <p> / person</p>
                </div>
            </div>
        </div>
    )
}