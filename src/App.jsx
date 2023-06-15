import { useState,useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import logo from "./assets/react.svg";

function App() {
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [gameOver, setGameOver] = useState(true);
  const [playerList, setPlayerList] = useState([]);

  const newGame = () => {
    setCardList(getCardList);
    setGameOver(false);
  };

  const getCardList = () => {
    return [
      { cardName: "Image1", cardImg: logo },
      { cardName: "Image2", cardImg: logo },
      { cardName: "Image3", cardImg: logo },
    ];
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    updateHiScore();
  }, [score]);


  const updateHiScore = () => {
    console.log(score);
    if (score > hiScore) setHiScore(score);
  };

  const chooseCard = (card) => {
    const selectCard = (card) => {
      const cloneList = [...playerList];
      cloneList.push(card);
      setPlayerList(cloneList);
    };

    if (
      playerList.find(
        (playerCards) => card.cardName === playerCards.cardName
      ) === undefined
    ) {
      selectCard(card);
      incrementScore();
    } else {
      setGameOver(true);
    }
  };

  return (
    <>
      <Header score={score} hiScore={hiScore} newGame={newGame} />
      <GameBoard
        cardList={cardList}
        chooseCard={chooseCard}
        gameOver={gameOver}
      />
    </>
  );
}

export default App;
