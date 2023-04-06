import React, { useEffect, useState } from "react";
import CardContents from "../MenuTab/components/CardContents/CardContents";
import "./Monsters.scss";

export default function Monsters() {
  const [monsterCards, setMonsterCards] = useState([]);
  const [searchCard, setSearchCard] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonsterCards(data));
  }, []);

  const searchMonster = (e) => {
    setSearchCard(e.target.value);
  };

  const filteredItem = monsterCards.filter((monster) =>
    monster.name.toLowerCase().includes(searchCard.toLowerCase())
  );
  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        placeholder="Search"
        value={searchCard}
        onChange={searchMonster}
      />
      <CardContents monsterCards={filteredItem} />
    </div>
  );
}
