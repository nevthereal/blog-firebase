import React from 'react'
import Icon from '../assets/favicon.png'

const Navbar = () => {

  return (
    <div className='w-full bg-slate-700 text-slate-100 flex justify-between p-4 text-lg'>
        <a href="/"><img src={Icon} alt="icon" className='h-20 bg-slate-100 p-1 rounded-2xl' /></a>
        <div className='text-xl my-auto font-extrabold flex gap-8'>
          <a href="/create">Create Post</a>
          <a href="/account">Account</a>
        </div>
    </div>
  )
}

export default Navbar