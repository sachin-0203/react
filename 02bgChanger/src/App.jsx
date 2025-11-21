import { useRef, useState } from 'react'

function App() {
  const buttons = [ 'red', 'green', 'yellow', 'blue', 'lightgreen', 'purple', 'violet', 'lightblue', 'lime', 'gray', 'pink'];
  const [active, setActive] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const buttonRefs = useRef([])
  const [color, setColor] = useState(buttons[0]);
  

  const handleClick = (index,btn)=>{
    const btns = buttonRefs.current[index]
    setSliderPosition(btns.offsetLeft)
    setSliderWidth(btns.offsetWidth)
    setActive(index);
    setColor(btn)
    btns.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }

  return (
    <div className="w-auto h-screen duration-400" style={{backgroundColor: color}}
    >
      <div className='fixed bottom-11 flex overflow-x-auto no-scrollbar w-full  justify-evenly rounded-md py-2 gap-2  ' >


        <div 
          className=' absolute rounded-full h-11 transition-all duration-300 bg-sky-600 z-0 border-2 border-sky-600     '
          style={{  bottom: 2, left: sliderPosition -5 , width: sliderWidth + 10 }}

        />
        {buttons.map((btn,index)=>(

          <button  
            key={index} 
            className='h-8 px-8  uppercase rounded-full shadow-sm cursor-pointer active:scale-95 duration-200 z-10 border  '
            ref={(el)=> buttonRefs.current[index] = el } 
            onClick={()=>handleClick(index,btn)}
            style={{backgroundColor: btn}} 
          >
            {btn}
          </button>
        ))}
      </div>
        

    </div>
  )
}

export default App
