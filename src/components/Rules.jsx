import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Rules = () => {
  return (
    <div class="flex flex-col items-center">
        <p class="flex items-center mb-4"><FontAwesomeIcon icon={faArrowLeft} /><a href="/create" class="text-blue-500 hover:underline"> Create a post</a></p>
    <h1 class="text-2xl font-bold mb-4">Blog Rules</h1>
    <ul class="list-disc pl-6 mb-4">
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