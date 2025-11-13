import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, clearUser, fetchAllUsers, fetchUserById } from "../features/user/UserSlice";


export const UserActions = () => {

  const dispatch = useDispatch();
  const { user, status } = useSelector(state => state.user);



  const buttons = [
    { 
      label : 'Fetch' , 
      onclick: ()=> dispatch(fetchUsers()), 
      disabled: false  
    },
    { 
      label : 'Reload', 
      onclick: ()=> dispatch(fetchUserById(user.id)),
      disabled: user.id === null ,
    },
    { 
      label : 'All Users' ,
      onclick: ()=> dispatch(fetchAllUsers()),
      disabled: false,
    },
    { 
      label : 'Clear' , 
      onclick: ()=> dispatch(clearUser()),
      disabled: user.id === null,
    },
  ]

  return( 
    <>
      <div className="grid grid-cols-2 gap-2 " >
        {buttons.map( (btn,index) => ( 
          <button
            key={index}
            className=' font-mono border border-slate-500 w-full rounded-md active:scale-95 outline-none py-0.5  bg-slate-800 duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-600  '
            onClick={btn.onclick}
            disabled = {btn.disabled}
          >
            {btn.label}
          </button>

        ))}
      </div>
    </>
  );
};
