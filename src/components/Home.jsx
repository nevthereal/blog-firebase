import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import timestamp from 'time-stamp'

const Home = ({ auth }) => {

  const [user, loading] = useAuthState(auth)

  const hour = timestamp('HH')
  let dayTime;

  if(hour < 12) {
    dayTime = "Morning"
  } else {
    dayTime = "Evening"
  }

  return (
    <div className='m-10'>
      {user ? <h2 className='font-bold text-slate-900 text-4xl'>Good {dayTime}, {user.displayName}</h2> : loading? <></> : <></>}
      <div>
        Blabla
      </div>
    </div>
  )
}

export default Home