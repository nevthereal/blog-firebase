import React from 'react'

const style = {
  info: `font-bold`,
  subText: `text-slate-600`,
  heading: `text-3xl font-bold`
}

const Post = ({ title, pfp, author, content, time }) => {
  
  return (
    <div className='bg-slate-200 p-4 my-4 rounded-xl border border-slate-300 shadow-lg'>
      <h1 className={style.heading}>{title}</h1>
      <div className='flex gap-2'>
        <img src={pfp} alt="" className='h-7 rounded-full' /><p className='text-slate-700 text-xl my-auto'>{author}</p>
      </div>
      <p>{content}</p>
      <p className={style.subText}>Created at: <span className={style.info}>{time}</span></p>
    </div>
  )
}

export default Post