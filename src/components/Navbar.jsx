import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = ({ auth }) => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className='w-full bg-slate-700 text-white flex justify-between p-4 text-lg'>
        <a href="/"><FontAwesomeIcon icon={faHome} className='text-4xl my-auto' /></a>
        <div className='my-auto font-bold flex gap-2'>
          <a href="/create">Create</a>
          <a href="/account">Account</a>
        </div>
    </div>
  )
}

export default Navbar