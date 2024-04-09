import { useState } from 'react';
import PropTypes from 'prop-types';

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className='bg-gray-300 h-20 w-20 m-1 leading-9 text-lg rounded-lg'>{value}</button>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null))

  function handleClick() {
    const nextSquare = [...square];
    console.log(nextSquare)
    nextSquare[0] = "X";
    setSquare(nextSquare)
  }

  return (
    <>
      <div>
        <p className='flex justify-center text-gray-200 font-bold text-[3rem] underline pb-6'>Tic Tac Toe</p>
        <div className='flex justify-center'>
          <Square value={square[0]} onSquareClick={handleClick} />
          <Square value={square[1]} />
          <Square value={square[2]} />
        </div>
        <div className='flex justify-center'>
          <Square value={square[3]} />
          <Square value={square[4]} />
          <Square value={square[5]} />
        </div>
        <div className='flex justify-center'>
          <Square value={square[6]} />
          <Square value={square[7]} />
          <Square value={square[8]} />
        </div>
      </div>
    </>
  );
}

Square.propTypes = {
  value: PropTypes.any,
  onSquareClick: PropTypes.func,
};