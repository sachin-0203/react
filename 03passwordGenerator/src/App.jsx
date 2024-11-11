import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setLenght] = useState(6);
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


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <div>
      <div className="w-full max-w-md text-white bg-gray-700 text-center mx-9 my-9 rounded-lg py-7">
        Password Generator
        <div>
          <input
            type="text"
            className="outline-none text-blue-500 rounded-l-xl h-10 w-4/5 mt-4 px-2"
            placeholder="Your Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className=" outline-none h-10 w-14 bg-blue-600 rounded-r-xl hover:bg-blue-900">
            copy
          </button>
        </div>
        <div className="flex gap-2 justify-center mt-6">
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
          <input 
            type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onChange={()=>{
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>

          <input 
            type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={()=>{
              setCharAllow((prev) => !prev);
            }}
           />
          <label htmlFor="charInput">Character</label>
        </div>
        
      </div>
    </div>
  );
}

export default App;
