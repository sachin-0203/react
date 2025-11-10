import { useSelector } from "react-redux";


export const UserCard = () => {  

  const {user , userList} = useSelector(state => state.user)

  const userData = {
    Name : user.name,
    Username : user.username,
    Email : user.email,
    Phone: user.phone,
    Address: `${user.address.street}, ${user.address.city}`
  }

  return ( 
    <>
      <div className='h-58 pt-3 overflow-auto '>

          {userList == null ? (
            <div className="border py-2 space-y-3 rounded-sm border-sky-200 mb-2 ">
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
                <div key={index} className="border border-sky-200  rounded-sm p-2 mb-2 ">
                  
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
                  
                </div>
              ))}
              </div>
            )}

      </div>
    </>
);
};

export const ErrorCard = () => {
  return(
    <div>
      <img 
        className=' object-cover w-76 h-54 p-2 ' 
        src="/error.jpg" 
        alt="404" 
      />
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