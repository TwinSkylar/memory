import Card from "./Card";
import { useState } from "react";


export default function GameBoard({ cardList, chooseCard}) {

  return (
    <div className ='cardList'>
      {cardList.map((card) => {
        return <Card key={card.cardName} card={card} chooseCard={()=>chooseCard(card)}/>;
      })}
    </div>
  );
}
