import { useState } from 'react'
import { addVal, delVal, resVal, cusVal } from './features/counter/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const count = useSelector((state)=> state.counter.count)
  const dispatch = useDispatch()

  const [number , setNumber] = useState("")

  const handleCusAdd = ()=>{
    dispatch(cusVal(Number(number)))
    setNumber("")
  }

  const buttons = [
    { label: "Increment", onClick: ()=>{ dispatch(addVal()) } },
    { label: "Decrement", onClick: ()=>{ dispatch(delVal()) } },
    { label: "Reset    ", onClick: ()=>{ dispatch(resVal()) } },
  ]
  return (
    <>
    <div className= 'mx-auto border-2 border-dashed border-green-900 w-fit p-5 rounded-md space-y-4 mt-50 '>
      <h3 className='text-center' >
        Counter Value : {count}
      </h3>

      <div className='space-x-3'  >
        {buttons.map((btn,index) => (
          <button
            key={index}
            onClick={btn.onClick}
            className='border px-2 text-sm rounded-sm cursor-pointer outline-none' >
              {btn.label}
            </button>
        ))}
      </div>
      <div>
        <input type="number" name="number" id="number"
          onChange={(e)=> setNumber(e.target.value)}
          value={number} placeholder='enter custome number'
         className='outline-none border rounded-md ml-1 w-fit text-sm' />
        <button onClick={handleCusAdd} className='border px-2 text-sm rounded-sm cursor-pointer outline-none' >Add</button>
      </div>
    </div>
    </>
  )
}

export default App
