import Card from "./Card";
import "./css/gameBoard.css"


 /*
 Purpose:  Gameboard component
 Parameters: 
  cardList:  the list of cards a player may choose from
  chooseCard:  a callback function to handle the choice of a card
  gameOver:  True if the game is over
 */

export default function GameBoard({ cardList, chooseCard,gameOver}) {

  return (
    <div className ='cardList'>
      {cardList.map((card) => {
        return <Card key={card.cardName} card={card} chooseCard={()=>chooseCard(card)} gameOver={gameOver}/>;
      })}
    </div>
  );
}
