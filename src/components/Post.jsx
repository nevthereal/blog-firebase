import React from 'react'

const Post = () => {
  
  const style = {
    info: `font-bold`,
    subText: `text-slate-600`
  }
  
  return (
    <div className='bg-slate-200 p-4 my-4 rounded-xl'>
      <h1 className='text-3xl font-bold'>Hello World!</h1>
      <p>This is just a little test, if this works, I am very happy!</p>
      <p className={style.subText}>Created by: <span className={style.info}>Neville Brem</span></p>
      <p className={style.subText}>Created at: <span className={style.info}>11 Jun 19:51</span></p>
    </div>
  )
}

export default Post