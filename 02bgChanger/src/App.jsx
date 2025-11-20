import { useState } from 'react'

function App() {
  const [color, setColor] = useState("violet");
  const [active, setActive] = useState(0);
  const buttons = [ 'red', 'green', 'yellow', 'blue', 'lightgreen', 'purple', 'violet', 'lightblue', 'lime', 'gray'];

  const handleClick = (index,btn)=>{
    setActive(index);
    setColor(btn)
  }

  return (
    <div className="w-auto h-screen duration-400" style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap w-full bg-zinc-300  justify-evenly bottom-12 shadow-md rounded-md py-2 gap-2 ' >
        {buttons.map((btn,index)=>(

          <button  
            key={index} 
            className='h-8 px-8  capitalize rounded-full shadow-sm cursor-pointer active:scale-95 duration-200  ' 
            onClick={()=>handleClick(index,btn)}
            style={{backgroundColor: btn}} 
          >
            {btn}
          </button>
        ))}
      </div>

    </div>
  )
}

export default App
