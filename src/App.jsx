import PropTypes from 'prop-types';
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className='bg-gray-300 h-20 w-20 m-1 leading-9 text-lg rounded-lg'>{value}</button>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = [...square];
    xIsNext ? nextSquare[i] = 'X' : nextSquare[i] = 'O';
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>
        <p className='flex justify-center text-gray-200 font-bold text-[3rem] underline pb-6'>Tic Tac Toe</p>
        <div className='flex justify-center'>
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className='flex justify-center'>
          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className='flex justify-center'>
          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

Square.propTypes = {
  value: PropTypes.any,
  onSquareClick: PropTypes.func,
};