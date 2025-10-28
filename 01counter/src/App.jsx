import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'


function HelloWorld() {
  const [counter, setCounter] = useState(0)


  useEffect(()=>{
    console.log("count changed:", counter);
    return ()=>{
      console.log("cleanUp for count_", counter);
    }
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=> console.log("Running...."), 1000);
    return () => clearInterval(interval);
  },[]);

  useLayoutEffect(()=>{
    console.log("DOM Updates, can measure Layout here");
  })


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

  

  return (
    <div className='bg-red-300 h-screen m-0 p-0'>
      <div className='ml-20 mt-5 text-4xl '>{counter}</div>
      <br />
      <button className="btn bg-zinc-500 rounded-md m-4 p-2.5 w-32" onClick={addValue}>Add</button>
      <button className="btn bg-zinc-500 rounded-md m-4 p-2.5 w-36" onClick={delValue}>Delete</button>
    </div>
  )
}

export default HelloWorld