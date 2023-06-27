import React from 'react'
import Icon from '../assets/favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  return (
    <div className='w-full bg-slate-700 text-slate-100 flex justify-between p-4 text-lg'>
        <a href="/"><FontAwesomeIcon icon={faNetworkWired} className='text-white no-underline text-4xl md:text-5xl' /></a>
        <div className='text-xl my-auto font-extrabold flex gap-8'>
          <a href="/create" className='text-white no-underline'>Create Post</a>
          <a href="/account" className='text-white no-underline'>Account</a>
        </div>
    </div>
  )
}

export default Navbar