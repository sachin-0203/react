import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'


function HelloWorld() {
  const [counter, setCounter] = useState(0)


  const addValue = useCallback(()=>{
    if(counter==20) {
      return alert("you are not allowed to add value more than 20")
    }
    setCounter(prev => prev+1)
  }, [counter]);

  const delValue = useCallback(()=>{
    if(counter==0) return alert("you can't go below 0")
    setCounter(prev => prev-1)
  }, [counter]);

  const buttons = [
    { label : 'Add', onClick : addValue},
    { label : 'Delete', onClick : delValue}
  ]
  

  return (
    <div className=' m-0 p-0'>
      <div className='ml-20 mt-5 text-4xl '>{counter}</div>
      <br />
      {/* <button className="btn bg-zinc-500 rounded-md m-4 p-2.5 w-32" onClick={addValue}>Add</button>
      <button className="btn bg-zinc-500 rounded-md m-4 p-2.5 w-36" onClick={delValue}>Delete</button> */}
      <div className='flex gap-5 px-4'>

        {buttons.map((btn,index)=>(
          <div 
          key={index} 
          onClick={btn.onClick}
          className=' text-center py-2 px-8 bg-zinc-500 rounded-md'
          >
            {btn.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HelloWorld