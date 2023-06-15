import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import _ from 'lodash';



function App() {
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [playerList, setPlayerList] = useState([]);

  const newGame = () => {
    setCardList(getCardList);
    setScore(0);
    setPlayerList([]);
    setGameOver(false);
  };

  const getCardList = () => {
    return _.shuffle(cardList);
  };

  useEffect(() => {
    const pokemons =[];
    const getData=async()=>{
      for (let i=1; i<=16;i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const pokemon = await response.json()
        pokemons.push({cardName:pokemon.name, cardImg:pokemon.sprites.front_default})
      }
      setCardList(_.shuffle(pokemons));
    }
    getData();
   }, []);


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
      <Header
        score={score}
        hiScore={hiScore}
        newGame={newGame}
        gameOver={gameOver}
      />
      <GameBoard
        cardList={cardList}
        chooseCard={chooseCard}
        gameOver={gameOver}
      />
    </>
  );
}

export default App;
