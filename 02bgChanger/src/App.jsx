import { useState } from 'react'

function App() {
  const [color, setColor] = useState("violet");

  return (
    <div className="w-auto h-screen duration-200" style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap bg-white w-full h-14  justify-evenly bottom-12 mx-2 shadow-md rounded-2xl '>
        <button onClick={()=> {setColor("red")}}  className='outline-none mt-2 h-10 px-4 border-2  rounded-xl shadow-sm text-white' style={{backgroundColor: "red"}}>Red</button>

        <button onClick={()=> {setColor("green")}}  className='outline-none mt-2 h-10 px-4 border-2  rounded-xl shadow-sm text-white' style={{backgroundColor: "green"}}>Green</button>

        <button onClick={()=> {setColor("yellow")}}  className='outline-none mt-2 h-10 px-4 border-2  rounded-xl shadow-sm text-white' style={{backgroundColor: "Yellow"}}>Yellow</button>

        <button onClick={()=> {setColor("blue")}}  className='outline-none mt-2 h-10 px-4 border-2  rounded-xl shadow-sm text-white' style={{backgroundColor: "Blue"}}>Blue</button>

        <button onClick={()=> {setColor("purple")}}  className='outline-none mt-2 h-10 px-4 border-2  rounded-xl shadow-sm text-white' style={{backgroundColor: "purple"}}>Purple</button>

        <button onClick={()=> {setColor("violet")}}  className='outline-none mt-2 h-10 px-4 border-2  rounded-xl shadow-sm text-white' style={{backgroundColor: "violet"}}>Violet</button>

        <button onClick={()=> {setColor("lightblue")}} className='outline-none mt-2 h-10 px-4 border-2  rounded-xl shadow-sm text-white' style={{backgroundColor: "lightblue"}}>Lightblue</button>

        
      </div>

    </div>
  )
}

export default App
