import { useState, useCallback, useEffect, useRef } from "react";
import {Check, Copy} from 'lucide-react'


function App() {
  const [length, setLenght] = useState(6);
  const [loading, setLoading] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "!#$%&()*+-/:;?@^`{}~";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);

  }, [length, numAllow, charAllow, setPassword]);


  const handleCopy = ()=>{
    copyPasswordToClipboard();
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  }
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <div className="flex justify-center items-center translate-y-28 ">
      <div className="w-full max-w-md text-white bg-gray-700 text-center mx-9 my-9 rounded-lg py-7">
        
        <div className="text-xl font-mono font-bold ">
          Password Generator
        </div>
        
        <div className="relative w-full px-5">
          <input
            type="text"
            className="outline-none text-blue-500 rounded-md h-10 w-full min-w-5 mt-4  pl-2"
            placeholder="Your Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={handleCopy}
          className="absolute right-6 top-5 outline-none h-8 bg-blue-600 rounded-md hover:bg-blue-900 inline-flex items-center p-2 ">
            {loading ? (
              <Check size={18} />
            ):(
              <Copy size={18} />
            )}
          </button>
        </div>
        
        <div className="flex md:flex-row flex-col gap-2 justify-center mt-6">

          <div className="space-x-2">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setLenght(e.target.value);
              }}
              />
            <label>Length:{length}</label>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center ">
            <div className="space-x-2">
              <input 
                type="checkbox"
                defaultChecked={numAllow}
                id="numberInput"
                onChange={()=>{
                  setNumAllow((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">
                Number
              </label>
            </div>
            
            <div className="space-x-2">
              <input 
                type="checkbox"
                defaultChecked={charAllow}
                id="charInput"
                onChange={()=>{
                  setCharAllow((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">
                Character
              </label>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
