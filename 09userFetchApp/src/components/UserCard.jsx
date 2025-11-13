import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, userDetails } from "../features/user/UserSlice";
import { Plus } from "lucide-react";
import { useState } from "react";


export const UserCard = () => {  

  const dispatch = useDispatch();
  const {user , userList, userDetail} = useSelector(state => state.user);
  const [checkedId, setCheckedId] = useState(null)

  const userData = {
    Id: user.id,
    Name : user.name,
    Username : user.username,
    Email : user.email,
    Phone: user.phone,
    Address: `${user.address.street}, ${user.address.city}`
  }

  const handleClick = (id)=>{
    setCheckedId(prev => (prev === id)? null : id)
  }


  return ( 
    <>
      <div className='h-58 pt-3 overflow-y-scroll scrollbar-hide '>

          {userList.length == 1 ? (
            <div className=" py-2 space-y-3 rounded-sm bg-sky-950 mb-2 ">
              {Object.entries(userData).map(([key, value]) => (
                <div key={key}  className='  rounded-sm'>
                  <div  className='flex gap-2 px-2'>
                    <strong > {key}: </strong>
                    <div>{value}</div>
                  </div>
                </div>
              ))}
            </div>) :
            
            (
              <div>
              {userList?.map((item,index)=>(
                <div 
                  key={index} 
                  className={`${checkedId === item.id ? 'max-h-96' : 'max-h-17'} overflow-hidden bg-sky-950  rounded-sm p-2 mb-2 transition-all duration-400 linear relative `}
                >

                  <div className="p-1 ">
                    <button className="absolute top-1 right-1" onClick={()=>handleClick(item.id)} >
                      <Plus size={18} className={` ${checkedId === item.id? "rotate-45" : ""} duration-400 `}   />
                    </button>
                    <input 
                      type="checkbox" 
                      name="userDetails" 
                      id={`check-${item.id}`} 
                      checked = {checkedId === item.id}
                      readOnly
                      className="hidden" />
                  </div>

                  <div className="flex gap-2 px-2">
                    <strong>Id:</strong>
                    <div>{item.id}</div>
                  </div>

                  <div className="flex gap-2 px-2">
                    <strong>Name:</strong>
                    <div>{item.name}</div>
                  </div>
                  <div className="flex gap-2 px-2">
                    <strong>Username:</strong>
                    <div>{item.username}</div>
                  </div>
                  <div className="flex gap-2 px-2">
                    <strong>Email:</strong>
                    <div>{item.email}</div>
                  </div>
                  <div className="flex gap-2 px-2">
                    <strong>Phone:</strong>
                    <div>{item.phone}</div>
                  </div>
                  <div className="flex gap-2 px-2">
                    <strong>Address:</strong>
                    <div>{item.address.street},{item.address.city}</div>
                  </div>


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