export default function Card({card,chooseCard,gameOver}) {

  const {cardName,cardImg} = card;
    return (
      <div className="card">
        <button onClick={chooseCard} disabled={gameOver}>
          <img src={cardImg}></img>
          {cardName}
          </button>
      </div>
    )
  }