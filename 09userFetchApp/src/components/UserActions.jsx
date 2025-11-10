import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, clearUser, fetchAllUsers } from "../features/user/UserSlice";


export const UserActions = () => {

  const dispatch = useDispatch();
  const { user, status } = useSelector(state => state.user);



  const buttons = [
    {label : 'Fetch' , onclick: ()=> dispatch(fetchUsers()), },
    {label : 'Reload', onclick: ()=> dispatch(fetchUsers(user.id)) },
    {label : 'All Users' , onclick: ()=> dispatch(fetchAllUsers()) },
    {label : 'Clear' , onclick: ()=> dispatch(clearUser()) },
  ]

  return( 
    <>
      <div className="grid grid-cols-2 gap-x-2 " >
        {buttons.map( (btn,index) => ( 
          <button
            key={index}
            className=' font-mono border w-full rounded-md active:scale-95 outline-none py-0.5 mt-3 bg-slate-800 duration-200 '
            onClick={btn.onclick}
            
          >
            {btn.label}
          </button>

        ))}
      </div>
    </>
  );
};
