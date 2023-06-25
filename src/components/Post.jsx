import React from 'react'

const Post = ({ title, pfp, author, content, time, email }) => {

  return (
  <div className="bg-slate-200 p-4 my-4 rounded-xl border border-slate-300 shadow-lg">
    <p className="text-sm mt-2 text-gray-600">{time}</p>
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <div className="flex items-center mb-4">
      <img src={pfp} alt="" className="h-7 rounded-full mr-2" />
      <p className="text-slate-700 text-lg">{author} {email == "neville.brem@gmail.com" ? <span>(admin)</span> : <></>}</p>
    </div>
      <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: content }}></p>
      
  </div>
  )
}

export default Post