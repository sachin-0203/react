import { useSelector } from 'react-redux'
import { LoadingText } from './LoadingText';
import { UserCard, ErrorCard, IdleCard } from './UserCard';
import { UserActions } from './userActions';
import { CustomeFetch } from './CustomeFetch';

export const UserContainer = () => {

  const { status, error } = useSelector(state => state.user)


  return (
    <>
      <div className='  text-white h-80 w-80 m-5 '>

        <div className=' items-center rounded-md p-4 bg-slate-700 shadow-inner '>

          <h1 className='text-sky-200 text-4xl border-b pb-1'>
            User Fetcher App
          </h1>
          
          <div className='h-58 mb-2'>

            {status === 'initial' && <IdleCard /> }

            {status === 'Loading' && <LoadingText />}

            {status === 'Success' && <UserCard />}

            {status === 'Failed'  && <ErrorCard />}

          </div>

          <div>
            <CustomeFetch />
            <UserActions />
          </div>


        </div>

      </div>
      
    </>
  )
}