import { useState } from 'react';

export default function Header({score,hiScore,newGame}) {

    return (
      <>
        <div className='score'>Score:  {score}</div>
        <div className='hiScore'>High Score: {hiScore}</div>
        <button onClick={newGame}>New Game</button>
      </>
    )
  }
  