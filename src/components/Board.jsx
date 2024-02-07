/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';
import Square from './Square.jsx';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const onClickSquare = clickedPosition => {
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return 'X';
        }

        return squareValue;
      });
    });
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => onClickSquare(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
