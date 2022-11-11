import React, { useState } from "react";
import Card from "./Card/Card";
import "./Cards.css";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Hazte Socio",
      role: "Something here",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
    {
      id: 2,
      name: "Hazte Socio",
      role: "Something here",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
    {
      id: 3,
      name: "Hazte Socio",
      role: "Something here",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
  ]);

  return (
    <div className="row">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            name={card.name}
            img={card.img}
            role={card.role}
          />
        );
      })}
    </div>
  );
};
export default Cards;