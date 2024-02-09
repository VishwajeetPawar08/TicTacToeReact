/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react';
import { useState } from 'react';
import './components/styles.scss';
import Board from './components/Board.jsx';
import StatusMessage from './components/StatusMessage.jsx';
import History from './components/History.jsx';
import { calculateWinner } from './winner.js';

const New_Game = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  // const [counter, setCounter] = useState(1);
  // const runn = ()=>{
  //   setCounter(counter+1);
  // }

  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);

  const [history, setHistory] = useState(New_Game);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const {winner, winningSquares} = calculateWinner(gamingBoard.squares);

  const onClickSquare = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentMove.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }

          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    // setIsXNext(currentIsXNext => !currentIsXNext);
    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(New_Game);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} onClickSquare={onClickSquare} winningSquares={winningSquares}/>

      <button
        className={`btn-reset ${winner ? 'active' : ''}`}
        type="submit"
        onClick={onNewGameStart}
      >
        Start New Game
      </button>

      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
