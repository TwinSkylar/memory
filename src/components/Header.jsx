 /*
 Purpose:  Header component
 Parameters: 
  score:  The score of the current game
  hiScore:  The highest score this session
  newGame:  A callback function to start a new game
  gameOver:  True if the game is over
 */
export default function Header({ score, hiScore, newGame, gameOver }) {
  return (
    <>
      <div className="score">Score: {score}</div>
      <div className="hiScore">High Score: {hiScore}</div>
      <button onClick={newGame}>New Game</button>

      {gameOver ? (
        <div>The game is over. Start a new game to player again</div>
      ) : (
        <></>
      )}
    </>
  );
}
