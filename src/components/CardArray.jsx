import React from "react"
import ReactDOM from "react-dom/client"
import "./CardArray.css"
import Card from "./Card.jsx"


export default function CardArray() {
    return (
        <div className="cardArray">
            <Card />
            <Card />
            <Card />
        </div>
    )
}