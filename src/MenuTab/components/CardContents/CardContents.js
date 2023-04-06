import React from "react";
import Card from "../Cards/Cards";
import "./CardContents.scss";

export default function CardContents({ monsterCards }) {
  return (
    <div className="CardContents">
      {monsterCards.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
