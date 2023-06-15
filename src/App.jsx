import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import logo from "./assets/react.svg";

function App() {
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);  
  const [cardList, setCardList] = useState([]);


  const newGame = ()=>{
    setCardList(getCardList);
  }

  const getCardList = ()=>{
    return [
      { cardName: "Image1", cardImg: logo },
      { cardName: "Image2", cardImg: logo },
      { cardName: "Image3", cardImg: logo },
    ]
  }

  const updateScore = (newScore) => {
    setScore(newScore);
  };

  const updateHiScore = (newScore) => {
    if (newScore > hiScore) setHiScore(newScore);
  };

  return (
    <>
      <Header score={score} hiScore={hiScore} newGame={newGame} />
      <GameBoard
        updateScore={updateScore}
        updateHiScore={updateHiScore}
        cardList={cardList}
      />
    </>
  );
}

export default App;
