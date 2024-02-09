/* eslint-disable react/prop-types */
import './styles.scss';

const Square = ({ value, onClick, isWinningSquare }) => {


  const colorClassName = value === 'X' ? 'text-orange' : 'text-green';
  const winningClassName = isWinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
