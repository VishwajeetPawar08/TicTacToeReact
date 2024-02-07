/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react';
import { useState } from 'react';
import './components/styles.scss';
import Board from './components/Board.jsx';
import { calculateWinner } from './winner.js';

function App() {
  // const [counter, setCounter] = useState(1);

  // const runn = ()=>{
  //   setCounter(counter+1);
  // }

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';

  const status = winner
    ? `Winner is ${winner}`
    : `Now the chance is to ${nextPlayer}`;

  const onClickSquare = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{status}</h2>
      <Board squares={squares} onClickSquare={onClickSquare} />
    </div>
  );
}

export default App;
