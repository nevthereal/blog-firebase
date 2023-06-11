import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import timestamp from 'time-stamp'
import Post from './Post'

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
      {user ? <h1 className='font-bold text-slate-900 text-6xl'>Good {dayTime}, {user.displayName}</h1> : loading? <></> : <></>}
      <p className='font-bold text-2xl pt-2 pb-4 text-slate-800'>Here are the latest posts:</p>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Home