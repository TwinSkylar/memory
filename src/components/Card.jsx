export default function Card({card,chooseCard}) {

  const {cardName,cardImg} = card;
    return (
      <div className="card">
        <button onClick={chooseCard}>
          <img src={cardImg}></img>
          {cardName}
          </button>
      </div>
    )
  }