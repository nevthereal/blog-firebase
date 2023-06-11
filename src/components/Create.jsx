import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const Create = ({ auth }) => {
  const [user, loading] = useAuthState(auth)

  return (
    <div className='p-4'>
      {loading ? <div className='italic'>Fetching user data ...</div> : !user ? <div>Please <a href="/account" className='font-bold'>log in</a> to create a post</div> : 
      <div>
        <p>Create Post:</p>
      </div>}
    </div>
  )

}

export default Create