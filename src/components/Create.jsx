import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const style = {
    heading: `text-2xl font-bold`,
    input: `text-xl w-full p-2 rounded-xl`,
    subHeading: `font-bold mt-4 text-lg`,
    tA: `text-lg resize-none w-full p-2 rounded-xl`,
    button: `rounded-xl bg-slate-400 p-2 font-bold mt-2 text-2xl`
}

const Create = ({ auth }) => {
  const [user, loading] = useAuthState(auth)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  let navigate = useNavigate()

  const createPost = async (e) => {
    const confirmCreate = window.confirm("Are you sure you want to create this post? You won't be able to edit the post afterwards.")
    if(confirmCreate) {
      try {
        e.preventDefault(e)
        await addDoc(collection(db, 'posts'), {
          title,
          content,
          author: user.displayName,
          pfp: user.photoURL,
          time: serverTimestamp(),
          author_email: user.email})
      } catch (error) {
        alert("Post couldn't be deleted")
      }
    };
    navigate("/")
  }

  return (
    <div className='my-10 mx-4 flex justify-center'>
      {loading ? <div className='italic'>Checking if user is signed in ...</div> : !user ? <div>Please <a href="/account" className='font-bold'>log in</a> to create a post</div> : 
      <div className='text-left bg-slate-200 p-4 rounded-xl w-full sm:max-w-[60%] border border-slate-300 shadow-lg'>
        <h1 className={style.heading}>Create Post:</h1>
        <form onSubmit={createPost}>
          <p className={style.subHeading}>Title:</p>
          <input required type="text" className={style.input} onChange={(e) => {setTitle(e.target.value)}} />
          <p className={style.subHeading}>Content (HTML):</p>
          <textarea required className={style.tA} rows={10} onChange={(e) => {setContent(e.target.value)}} />
          <div className='flex gap-3'><input type="checkbox" required /><p>I have read the <a href="/rules">Rules</a></p></div>
          <button className={style.button}>Post!</button>
        </form>
      </div>}
    </div>
  )

}

export default Create