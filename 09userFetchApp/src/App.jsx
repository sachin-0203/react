import { useState } from 'react'
import { fetchUsers } from './features/user/UserSlice'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const dispatch = useDispatch();
  const {user , status, error} = useSelector(state => state.user)

  const userData = {
    name : user.name,
    username : user.username,
    email : user.email,
    phone: user.phone,
    address: `${user.address.street}, ${user.address.city}`
  }

  const handleFetch = ()=>{
    const id = Math.floor(Math.random()*12 + 1);
    dispatch(fetchUsers(id))
  }

  return (
    <>
      <div className='  text-white h-80 w-80 m-5 '>
        <div className='  items-center rounded-md p-5 bg-slate-700 shadow-inner '>

          <h1 className='text-sky-200 text-4xl border-b pb-1'>
            User Fetcher App
          </h1>
          
          <div className='h-56'>

           { status === 'Loading...' && <div className='flex justify-center items-center gap-2 h-full '>
              <div className='text-lg text-white animate-bounce animation-delay-0 '> 🔍 </div>
              <div className='text-lg text-white animate-bounce animation-delay-1 '> 🔍 </div>
              <div className='text-lg text-white animate-bounce animation-delay-2 '> 🔍 </div>
            </div>}

            { status === 'Succeeded' && <div className=' space-y-4 pt-4 '>

              <div className='border-x border-sky-200 rounded-sm'>
                <div className='flex gap-2 px-2'>
                  <label >Name : </label>
                  <div>{userData.name}</div>
                </div>
              </div>
              <div className='border-x  border-sky-200  rounded-sm'>
                <div className='flex gap-2 px-2'>
                  <label >Username : </label>
                  <div>{userData.username}</div>
                </div>
              </div>
              <div className='border-x  border-sky-200  rounded-sm'>
                <div className='flex gap-2 px-2'>
                  <label >Email : </label>
                  <div>{userData.email}</div>
                </div>
              </div>
              <div className='border-x  border-sky-200  rounded-sm'>
                <div className='flex gap-2 px-2'>
                  <label >Phone : </label>
                  <div>{userData.phone}</div>
                </div>
              </div>
              <div className='border-x  border-sky-200  rounded-sm'>
                <div className='flex gap-2 px-2'>
                  <label >Address:</label>
                  <div>{userData.address}</div>
                </div>
              </div>

            </div>}

            {status === 'Failed' && <div>
              <img src="/error.jpg" alt="404" className=' object-cover w-76 h-54 p-2  ' />
            </div> }

            {status === 'idle' && <div className='flex flex-col justify-center items-center h-full w-full'>
              <strong>
                Click the Fetch Button
              </strong>
              <p className=' font-thin '>
                Get the Random User
              </p>
            </div> }

          </div>
          <div>

            <button className=' font-mono border w-full rounded-full active:scale-95 outline-none py-1 mt-5 bg-slate-800 duration-200 ' onClick={handleFetch}>
              Fetch
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
