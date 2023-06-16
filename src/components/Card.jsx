export default function Card({ card, chooseCard, gameOver }) {
 /*
 Purpose:  Card component to display each individual card.
 Parameters: 
  card:  A card object which contains the information needed
  chooseCard:  a callback function to handle the choice of a card
  gameOver:  True if the game is over
 */

  const { cardName, cardImg } = card;
  return (
    <div className="card">
      <button className="cardBtn" onClick={chooseCard} disabled={gameOver}>
        <img src={cardImg}></img>
        {cardName}
      </button>
    </div>
  );
}
