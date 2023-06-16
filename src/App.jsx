import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import _ from "lodash";

/*
 Purpose:  Main driver for the application
 */

function App() {
  const [score, setScore] = useState(0); // stores the score of the current game
  const [hiScore, setHiScore] = useState(0); // stores the highest score of the session
  const [cardList, setCardList] = useState([]); //an array of all the cards
  const [gameOver, setGameOver] = useState(false); //true if the game has ended
  const [playerList, setPlayerList] = useState([]); //a history of cards selected by the user

  /*
 Purpose:  Starts a new game for the user
 */
  const newGame = () => {
    setCardList(getCardList);
    setScore(0);
    setPlayerList([]);
    setGameOver(false);
  };

  /*
 Purpose:  Returns a shuffled list of cards
 */

  const getCardList = () => {
    return _.shuffle(cardList);
  };

  /*
 Purpose:  Load the images when the component gets mounted
 */
  useEffect(() => {
    const pokemons = [];

    /*
 Purpose:  Retrieve images and names of popular pokemon.
 */
    const getData = async () => {
      for (let i = 1; i <= 16; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await response.json();
        pokemons.push({
          cardName: pokemon.name,
          cardImg: pokemon.sprites.front_default,
        });
      }
      setCardList(_.shuffle(pokemons));
    };
    getData();
  }, []);

  /*
 Purpose:  Increments the score by 1
 */

  const incrementScore = () => {
    setScore(score + 1);
  };

  /*
 Purpose:  Updates the high score when the score is changed
 */
  useEffect(() => {
    updateHiScore();
  }, [score]);

  /*
 Purpose:  Determines if the current score is a high schore
 */

  const updateHiScore = () => {
    if (score > hiScore) setHiScore(score);
  };

 /*
 Purpose:  Handles the logic after the user selects a card
 Parameters:
  card: The latest card selected by the user
 */ 
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
      setCardList(_.shuffle(cardList));
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
