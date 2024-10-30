import React from "react"
import ReactDOM from "react-dom/client"
import "./Header.css"
import AirbnbLogo from "../assets/airbnb.svg"


export default function Header() {
    return (
        <div className="header">
            <img src={AirbnbLogo} alt="logo of logo" className="logo" />
        </div>
    )
}