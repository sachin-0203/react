import React, { useCallback } from 'react'
import { useState } from 'react'


let counter =0
function HelloWorld() {
  var [counter, setCounter] = useState(0)

  function addValue(){
    if(counter==20) {
      return alert("you are not allowed to add value more than 20")
    }
    setCounter(counter+1)
  }
  function delValue(){
    if(counter==0) return alert("you can't go below 0")
    setCounter(counter-1)
  }

  

  return (
    <div className='bg-red-300 h-screen mt-0 pt-0'>
      <div className='ml-20 mt-5 text-4xl '>{counter}</div>
      <br />
      <button className="btn bg-zinc-500 rounded-md m-4 p-2.5 w-32" onClick={addValue}>Add Value : {counter}</button>
      <button className="btn bg-zinc-500 rounded-md m-4 p-2.5 w-36" onClick={delValue}>Delete Value : {counter} </button>
      <div className='ml-20 mt-5 text-4xl'>{counter}</div>
      <footer>{counter}</footer>
    </div>
  )
}

export default HelloWorld