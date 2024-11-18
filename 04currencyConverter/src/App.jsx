import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center flex-wrap">
    <h1 className='text-2xl text-white bg-slate-500 h-80 w-2/5 rounded-xl mt-7 text-center'>Currency Converter</h1>
    </div>
  )
}

export default App
