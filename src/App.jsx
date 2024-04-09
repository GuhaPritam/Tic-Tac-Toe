import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className='bg-gray-300 border border-black h-20 w-20 m-1 leading-9 text-lg'>{value}</button>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null))

  function handleClick() {
    const nextSquare = square.slice();
    nextSquare[0] = "X";
    setSquare(nextSquare)
  }

  return (
    <>
      <div className='flex'>
        <Square value={square[0]} onSquareClick={handleClick} />
        <Square value={square[1]} />
        <Square value={square[2]} />
      </div>
      <div className='flex'>
        <Square value={square[3]} />
        <Square value={square[4]} />
        <Square value={square[5]} />
      </div>
      <div className='flex'>
        <Square value={square[6]} />
        <Square value={square[7]} />
        <Square value={square[8]} />
      </div>
    </>
  );
}