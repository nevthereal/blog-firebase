import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Rules = () => {

  return (
    <div className="flex flex-col items-center mx-4 my-10">
        <p className='my-2'><FontAwesomeIcon icon={faArrowLeft} /> <a href="/create" className="text-blue-500 hover:underline">Create a post</a></p>
    <h1 className="text-2xl font-bold mb-4">Blog Rules</h1>
    <ul className="list-disc pl-6 mb-4">
        <li>No Racism/Sexism</li>
        <li>Stay nice</li>
        <li>Self-Promoting is allowed for non-commercial products (YouTube, Website).</li>
        <li>Pornography or any form of violence is not allowed</li>
        <li>No Spamming</li>
        <li>Don't share your personal information</li>
    </ul>
</div>

  )
}

export default Rules