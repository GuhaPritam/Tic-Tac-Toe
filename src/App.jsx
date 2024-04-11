import PropTypes from 'prop-types';
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className={`bg-[#1f3540] h-20 w-20 m-1 leading-9 ${value === 'X' ? 'text-yellow-400' : 'text-red-400'} font-bold text-[3rem] rounded-lg`}>{value}</button>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(square);
  const status = winner ? `Winner : ${winner}`: square.every(square => square === null) ? "Tic Tac Toe" : `Next player : ${xIsNext ? 'X' : 'O'}`;

  function handleClick(i) {
    if (square[i] || winner) {
      return;
    }
    const nextSquare = [...square];
    xIsNext ? nextSquare[i] = 'X' : nextSquare[i] = 'O';
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquare(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <p className='text-[#26ffcb] font-bold text-[3rem] underline decoration-pink-700 pb-6'>{status}</p>
        <div className='flex'>
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className='flex'>
          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className='flex mb-6'>
          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <button onClick={handleReset} className='w-[7rem] h-10 cursor-pointer text-[#26ffcb] rounded-[5rem] border-2 border-sky-300'>RESET</button>
      </div>
    </>
  );
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

Square.propTypes = {
  value: PropTypes.any,
  onSquareClick: PropTypes.func,
};