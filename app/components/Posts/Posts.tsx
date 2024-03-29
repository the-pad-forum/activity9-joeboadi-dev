import React, { useState, useEffect, FC } from 'react';
import styles from './Posts.module.css';

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
            <div className='ring-2 ring-current border-base-content text-base-content bg-base-200 border-b-2 p-4'>
              <div className='ring-2 ring-current border-black border-b-2 p-4'>
                <h3  className='text-xl'>{post.title}</h3>
                <p>{post.body}</p>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts;