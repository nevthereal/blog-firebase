import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const style = {
    heading: `text-2xl font-bold`,
    input: `text-xl w-full p-2 rounded-xl`,
    subHeading: `font-bold mt-4 text-lg`,
    tA: `text-lg resize-none w-full p-2 rounded-xl`,
    button: `rounded-xl bg-slate-400 p-2 font-bold mt-2 text-2xl`
}

const Create = ({ auth }) => {
  const [user, loading] = useAuthState(auth)


  return (
    <div className='p-4 flex justify-center'>
      {loading ? <div className='italic'>Checking if user is signed in ...</div> : !user ? <div>Please <a href="/account" className='font-bold'>log in</a> to create a post</div> : 
      <div className='text-left bg-slate-300 m-6 p-4 rounded-2xl'>
        <h1 className={style.heading}>Create Post:</h1>
        <form onSubmit={createPost}>
          <p className={style.subHeading}>Title:</p>
          <input type="text" className={style.input} />
          <p className={style.subHeading}>Post:</p>
          <textarea className={style.tA} rows={20} cols={80} />
          <button className={style.button}>Post!</button>
        </form>
      </div>}
    </div>
  )

}

export default Create