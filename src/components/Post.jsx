import React from 'react'
import Logo from '../assets/favicon.png'

const Post = () => {
  
  const style = {
    info: `font-bold`,
    subText: `text-slate-600`,
    heading: `text-3xl font-bold`
  }
  
  return (
    <div className='bg-slate-200 p-4 my-4 rounded-xl border border-slate-300 shadow-lg'>
      <h1 className={style.heading}>Hello World!</h1>
      <div className='flex gap-1'>
        <img src={Logo} alt="" className='h-8' /><p className='text-slate-700 text-xl my-auto'>Neville Brem</p>
      </div>
      <p>This is just a little test, if this works, I am very happy!</p>
      <p className={style.subText}>Created at: <span className={style.info}>11 Jun 19:51</span></p>
    </div>
  )
}

export default Post