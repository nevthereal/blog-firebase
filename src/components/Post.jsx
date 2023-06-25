import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';

const Post = ({ title, pfp, author, content, time, email, id, auth }) => {
  const [user, loading] = useAuthState(auth);

  const deletePost = async (postId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post? This action is irreversible.");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'posts', postId));
      } catch (error) {
        alert("Post couldn't be deleted")
      }
    }
  };
  

  return (
    <div className="bg-slate-200 p-4 my-4 rounded-xl border border-slate-300 shadow-lg flex justify-between">
      <div>
        <p className="text-sm mt-2 text-gray-600">{time}</p>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="flex items-center mb-4">
          <img src={pfp} alt="" className="h-7 rounded-full mr-2" />
          <p className="text-slate-700 text-lg">
            {author} {email === 'neville.brem@gmail.com' ? <span>(admin)</span> : null}
          </p>
        </div>
        <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
      {!loading && user && user.email === email ?  (
        <button onClick={() => deletePost(id)}>
          <FontAwesomeIcon icon={faTrashAlt} className="text-2xl text-slate-700" />
        </button>
      ) : null}
    </div>
  );
};

export default Post;