import { useSelector } from 'react-redux'
import { LoadingText } from './LoadingText';
import { UserCard, ErrorCard, IdleCard } from './UserCard';
import { UserActions } from './userActions';

export const UserContainer = () => {

  const { status } = useSelector(state => state.user)

  return (
    <>
      <div className='  text-white h-80 w-80 m-5 '>

        <div className=' items-center rounded-md p-5 bg-slate-700 shadow-inner '>

          <h1 className='text-sky-200 text-4xl border-b pb-1'>
            User Fetcher App
          </h1>
          
          <div className='h-58'>

            {status === 'initial' && <IdleCard /> }

            {status === 'Loading' && <LoadingText />}

            {status === 'Success' && <UserCard />}

            {status === 'Failed'  && <ErrorCard />}

          </div>

          <UserActions />

        </div>

      </div>
      
    </>
  )
}