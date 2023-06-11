import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



const style = {
  button: `font-bold text-3xl text-white bg-slate-500 p-4 rounded`,
  info: `font-bold`
}

const Account = ({ auth, handleSignIn, handleSignOut }) => {
    const [user, loading] = useAuthState(auth);


  return (
    <div className='text-center p-4'>
      {loading ? 
      <div>
        <p className='italic'>Fetching user data ...</p>
      </div>
      : user ?
      <div>
        <div className='m-4'>
          <p>Your Name: <span className={style.info}>{user.displayName}</span></p>
          <p>Your Email: <span className={style.info}>{user.email}</span></p>
          <p>Your Posts: <span className={style.info}>0</span></p>
        </div>
        <button onClick={handleSignOut} className={style.button}>Sign Out</button>
      </div>
      :
      <div>
        <button onClick={handleSignIn} className={style.button}>Sign in with <FontAwesomeIcon icon={faGoogle} /></button>
      </div>
      }
    </div>
  )
}

export default Account