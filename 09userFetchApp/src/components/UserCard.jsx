import { useDispatch, useSelector } from "react-redux";
import { Plus } from "lucide-react";
import { useState } from "react";
import { UserInfo } from "./UserInfo";
import { motion } from "framer-motion"


export const UserCard = () => {  

  const dispatch = useDispatch();
  const {user , userList} = useSelector(state => state.user);
  const [checkedId, setCheckedId] = useState(null)

  const handleClick = (id)=>{
    setCheckedId(prev => (prev === id)? null : id)
  }


  return ( 
    <>
      <div className='h-58 pt-3 overflow-y-scroll scrollbar-hide '>

          {userList.length == 0 ? (
            <div className=" py-2 space-y-3 rounded-sm bg-sky-950 mb-2 ">
              <UserInfo user={user} />
            </div>) :
            
            (
              <div>
              {userList?.map((item,index)=>(
                <div 
                  key={index} 
                  className={`${checkedId === item.id ? 'max-h-96' : 'max-h-20'} overflow-hidden bg-sky-950  rounded-sm p-2 mb-2 transition-all duration-600 linear relative `}
                >

                  <div key={index} className="p-1 ">

                    <button className="absolute top-1 right-1 cursor-pointer" onClick={()=>handleClick(item.id)} >

                      <Plus size={20} className={` ${checkedId === item.id? "rotate-45" : ""} duration-400 `}   />

                    </button>

                    <input 
                      type="checkbox" 
                      name="userDetails" 
                      id={`check-${item.id}`} 
                      checked = {checkedId === item.id}
                      readOnly
                      className="hidden" 
                    />
                  </div>
                
                  <UserInfo user={item} />
                </div>
              ))}
              </div>
            )}

      </div>
    </>
);
};

export const ErrorCard = () => {

  
  const {error} = useSelector(state => state.user)

  return(
    <div className="text-center">
      <img 
        className=' object-cover w-76 h-54 pt-2 ' 
        src="/error.jpg" 
        alt="404" 
      />
      <div className="text-xs font-light text-red-300">{error}</div>
    </div>
  );
};

export const IdleCard = ()=>{
  return(
    <>
      <div 
        className='flex flex-col justify-center items-center h-full w-full'
      >
        <strong>
          Click the Fetch Button
        </strong>
        <p className=' font-thin '>
          Get the Random User
        </p>
        
      </div> 
    </>
  )
}