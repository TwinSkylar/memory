import Card from "./Card";
import { useState } from "react";
import "./css/gameBoard.css"


export default function GameBoard({ cardList, chooseCard,gameOver}) {

  return (
    <div className ='cardList'>
      {cardList.map((card) => {
        return <Card key={card.cardName} card={card} chooseCard={()=>chooseCard(card)} gameOver={gameOver}/>;
      })}
    </div>
  );
}
