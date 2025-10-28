
import './App.css'
import {SkeletonFunc1, SkeletonFunc2, SkeletonFunc3, SkeletonFunc4 } from './components/SkeletonPage'
import { useState, useEffect } from 'react';


function App() {
  
  const [islargeScreen, setIslargeScreen] = useState(window.innerWidth>= 1024);

  useEffect(()=>{

    const handleResize = () =>{
      setIslargeScreen(window.innerWidth>= 1024)
    }
    window.addEventListener("resize", handleResize)
    return ()=> window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className='bg-violet-400 h-screen '>
      {
        islargeScreen? (
          <div className='flex' >
            <SkeletonFunc1 />
            <div className='space-y-2 px-0.5' >
              <SkeletonFunc2 />
              <div className='flex px-0.5' >
                <SkeletonFunc3 /> 
                <SkeletonFunc4 /> 
              </div>
            </div>
          </div>
        ):(
          <div className="flex flex-col items-center justify-center h-screen text-gray-700">

            <h1 className="text-5xl font-bold mb-4">Loading...</h1>
            <h3 className='text-xl font-mono mb-5'>Stay Tuned while we're loading your content</h3>
            <p className='text-sm text-red-400' >Its recommended that you should {" "} 
              <span className='uppercase' >login/signup</span> {" "} if not
            </p>
      
          </div>
        )
        }
    </div>
  )
}

export default App
