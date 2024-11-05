import React from "react"
import ReactDOM from "react-dom/client"
import "./Card.css"
import CardDefault from "../assets/CardDefault.png"
import Star from "../assets/Star.png"

export default function Card() {
    return (
        <div className="card">
            <div className="chip"><p id="Label">Label</p></div>
            <img src={CardDefault} alt="card default img" />
            <div className="cardText">
                <div className="Row">
                    <img id="star" src={Star} alt="star" />
                    <p id="rating">0</p>
                    <p id="country" className="light">USA</p>
                </div>
                <p id="cardTitle">title</p>
                <div className="Row NoGap">
                    <p id="price" className="Bold">0</p>
                    <p> / person</p>
                </div>
            </div>
        </div>
    )
}