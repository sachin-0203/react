import { useDispatch } from "react-redux";
import { fetchUserById} from "../features/user/UserSlice";
import { useState } from "react";
import { Search } from 'lucide-react'


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
      <form onSubmit={handleSubmit} className="relative">
        <input 
          type="number" 
          name="userId" 
          id="userId" 
          placeholder="search user"
          className=" outline-none bg-slate-800 opacity-50 border border-slate-500 rounded-full no-spinner w-full  text-center"  
          onChange={e => setUserId(e.target.value) }
          value={userId}
        />
        <label className=" absolute left-0 top-1 opacity-50  px-2 rounded-sm text-sm ">
          <Search size={18} />
        </label>
      </form>
    </div>
  </>
)};
