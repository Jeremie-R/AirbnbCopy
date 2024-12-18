import React from "react"
import ReactDOM from "react-dom/client"
import "./Card.css"
import CardDefault from "../assets/CardDefault.png"
import Star from "../assets/Star.png"

export default function Card(props) {
    const label = props.label;
    const cardTitle = props.cardTitle || "NoData";
    const rating = props.rating || "NoData";
    const country = props.country || "NoData";
    const price = props.price || "NoData";

    return (
        <div className="card">
            <div className="chip"><p>{label}</p></div>
            <img src={CardDefault} alt="card default img" />
            <div className="cardText">
                <div className="Row">
                    <img id="star" src={Star} alt="star" />
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