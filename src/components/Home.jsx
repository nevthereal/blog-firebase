import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import timestamp from 'time-stamp'

const Home = ({ auth }) => {

  const [user, loading] = useAuthState(auth)

  const hour = timestamp('HH')
  let greeting;

  if(hour < 12) {
    greeting = "Morning"
  } else {
    greeting = "Evening"
  }

  return (
    <div className='m-10'>
      {user ? <h2 className='font-bold text-slate-900 text-4xl'>Good <span>{greeting}</span>, {user.displayName}</h2> : loading? <></> : <></>}
      <div>
        Blabla
      </div>
    </div>
  )
}

export default Home