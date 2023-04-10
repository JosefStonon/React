import React, { useState, createContext } from 'react';

import Post from './Post';
import Blog from './Blog';
import { ThemeProvider } from './ThemeContext';


export default function App() {


  const [posts, setPost] = useState([
    {id: Math.random(), name: 'name#01', lastName: 'lastName#01', likes: 10},
    {id: Math.random(), name: 'name#02', lastName: 'lastName#02', likes: 20},
    {id: Math.random(), name: 'name#03', lastName: 'lastName#03', likes: 30},
  ]);

  

  function handleRefresh() {
      setTimeout(() => {
        setPost((prevState) => [
          ...prevState,
          {
            id: Math.random(), 
            name: `name#01${prevState.length + 1}`, 
            lastName: `lastName01${prevState.length + 1}`, 
            likes: `${prevState.length + 1}`
          }
        ])
      }, 1000);
  };

  function handleRemovePost(postId) {
    setPost((prevState) => (
      prevState.filter(post => post.id !== postId)
    ))
  }

  return (
    <ThemeProvider>
      <Post
        
      >
        <button onClick={handleRefresh}>Refresh</button>
      </Post>

      {posts.map(post => (
          <Blog 
          key={post.id}
            likes={post.likes}
            onRemove={handleRemovePost}
            post={{
              id: post.id,
              name: post.name,
              lastName: post.lastName
            }}


          />
      ))}
    </ThemeProvider>


  )
}