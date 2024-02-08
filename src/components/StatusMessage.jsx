/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          <h3>Winner is {winner}</h3>
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          {/* react fragment */}
          <h3>
            Next chance is to{' '}
            <span className={isXNext ? 'text-orange' : 'text-green'}>
              {nextPlayer}
            </span>
          </h3>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          <h3>
            No moves left. <span className="text-orange">O</span> and{' '}
            <span className="text-green">X</span> TIED...
          </h3>
        </div>
      );
    }
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
