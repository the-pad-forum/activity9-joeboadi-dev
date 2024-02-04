import React, { useState, useEffect, FC } from 'react';
<<<<<<< HEAD
// import styles from './Posts.module.css';
=======
import styles from './Posts.module.css';
>>>>>>> edb3ec25efaa62384ab611bc1d57d83f6f676715

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data as Post[]));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="grid grid-flow-row gap-6 place-content-center mb-7">
<<<<<<< HEAD
          <div className='ring-2 ring-current border-base-content text-base-content bg-base-200 border-b-2 p-4'>
=======
          <div className='ring-2 ring-current border-black border-b-2 p-4'>
>>>>>>> edb3ec25efaa62384ab611bc1d57d83f6f676715
            <h3  className='text-xl'>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;