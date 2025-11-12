import { useDispatch } from "react-redux";
import { fetchUserById} from "../features/user/UserSlice";
import { useState } from "react";


export const CustomeFetch = () => {

  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(fetchUserById(userId));
    setUserId("")
  } 
  return (
  <>
    <div className="py-2">
      <form action="submit" className="relative">
        <input 
          type="number" 
          name="userId" 
          id="userId" 
          placeholder="enter id "
          className=" outline-none bg-sky-900 border border-slate-500 rounded-sm no-spinner w-full px-1"  
          onChange={e => setUserId(e.target.value) }
          value={userId}
        />
        <button 
          type="submit" 
          className=" absolute right-1 top-0.5 px-2 rounded-sm text-sm border border-slate-500 cursor-pointer bg-slate-800 active:scale-95 duration-200"
          onClick={handleSubmit}
        >
          Fetch
        </button>
      </form>
    </div>
  </>
)};
