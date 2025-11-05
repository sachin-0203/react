import { useState } from 'react'
import { addVal, delVal, resVal, cusAdd, cusSub } from './features/counter/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAsync } from './features/counter/CounterSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state)=> state.counter.count)
  const status = useSelector((state)=> state.counter.status)
  const name = useSelector((state)=> state.counter.name)

  const [number , setNumber] = useState("")

  const handleCusVal = (btn)=>{
    if(btn === 'Add')
      dispatch(cusAdd(Number(number)))
    else
      dispatch(cusSub(Number(number)))
    setNumber("")
  }

  const buttons = [
    { label: "Increment", onClick: ()=>{ dispatch(addVal()) } },
    { label: "Decrement", onClick: ()=>{ dispatch(delVal()) } },
    { label: "Reset    ", onClick: ()=>{ dispatch(resVal()) } },
  ]
  return (
    <>
    <div className= 'mx-auto border-2 border-dashed border-emerald-200 w-fit p-5 rounded-md space-y-4 mt-50  '>
      <h3 className='text-center' >
        Counter Value : {count}
      </h3>

      <div className='space-x-3'  >
        {buttons.map((btn,index) => (
          <button
            key={index}
            onClick={btn.onClick}
            disabled = {btn.label === "Decrement" && count <= 0}
            className={`border py-1 px-2 text-sm rounded-sm cursor-pointer outline-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed  `}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div>
        <input 
          type="number"
          onChange={(e)=> setNumber(e.target.value)}
          value={number} placeholder='Enter value'
          className='outline-none border rounded-sm ml-1 w-fit text-sm pl-1'
        />

        <button 
          onClick={()=> handleCusVal("Add")} className='border px-2 text-sm rounded-sm cursor-pointer outline-none active:scale-95 mx-2' 
        >
          Add
        </button>
        <button
          disabled = {count<=0}
          onClick={()=> handleCusVal("Del")} className='border px-2 text-sm rounded-sm cursor-pointer outline-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Del
        </button>
      </div>

      <div className='flex gap-3'>
        <button className='border py-1 px-2 text-sm rounded-sm cursor-pointer outline-none active:scale-95'  onClick={()=> dispatch(incrementAsync()) }>
          Get Random user
        </button>
        {status === "loading" && <p>Loading...</p>}
        {name}
      </div>
    </div>
    </>
  )
}

export default App
