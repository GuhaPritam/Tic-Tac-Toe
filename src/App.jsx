function Square() {
  return (
    <button className='bg-gray-300 border border-black h-20 w-20 m-1 leading-9 text-lg'>X</button>
  )
}

export default function Board() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}