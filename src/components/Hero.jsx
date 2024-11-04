import React from "react"
import ReactDOM from "react-dom/client"
import "./Hero.css"
import HeroImg from "../assets/Hero.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={HeroImg} alt="image of cards" />
            <div className="text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}