import Card from "./Card";
import { useState } from "react";


export default function GameBoard({ updateScore, updateHiScore, cardList }) {
  const [playerList,setPlayerList] = useState([]);

  const handleClick = ()=>{
  
  }

  return (
    <div className ='cardList'>
      {cardList.map((card) => {
        return <Card key={card.cardName} card={card} handleClick={handleClick}/>;
      })}
    </div>
  );
}
