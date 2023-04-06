import React from "react";
import "./Cards.scss";

export default function Cards({ monster }) {
  const { name, email, id } = monster;

  return (
    <div className="cards">
      <img
        className="monsterImage"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
