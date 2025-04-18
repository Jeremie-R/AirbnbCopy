import React from "react"
import ReactDOM from "react-dom/client"
import "./CardArray.css"
import Card from "./Card.jsx"
import cardsData from "../assets/data.json"


export default function CardArray() {
    console.log (cardsData)
    
    return (
        <div className="cardArray">
            {cardsData.cards.map((card, index) => (
                <Card 
                    key={index} 
                    cardTitle={card.title}
                    label={card.label}
                    rating={card.rating}
                    country={card.country}
                    price={card.price}
                    image={card.image}
                />
            ))}



            
        </div>
    )
}