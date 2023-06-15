export default function Card({card,handleClick}) {

  const {cardName,cardImg} = card;
    return (
      <div className="card">
        <button onClick={handleClick}>
          <img src={cardImg}></img>
          {cardName}
          </button>
      </div>
    )
  }