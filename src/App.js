import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';
import Button from './Button';


export default function App() {
  const [theme, setTheme] = useState('dark')


  const [posts, setPost] = useState([
    {id: Math.random(), name: 'maria#01', lastName: 'lastname#01', likes: 10, read: false},
    {id: Math.random(), name: 'maria#02', lastName: 'lastname#02', likes: 20, read: true},
    {id: Math.random(), name: 'maria#03', lastName: 'lastname#03', likes: 30, read: false},
    {id: Math.random(), name: 'maria#03', lastName: 'lastname#03', likes: 30, read: true},
  ]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState == 'dark' 
    ? 'light' 
    : 'dark')
  }

  function handleRefresh() {
      setTimeout(() => {
        setPost((prevState) => [
          ...prevState,
          {
            id: Math.random(), 
            name: `maria#01${posts.length + 1}`, 
            lastName: `lastname#01${posts.length + 1}`, 
            likes: posts.length + 1
          }
        ])
      }, 1500);
  }

  function handleRemove(postId) {
    setPost((prevState) => (
      prevState.filter(post => post.id !== postId)
    ))
  }
  return (

    <>
        <Header
        theme={theme}
          onToggleTheme={handleToggleTheme}
        >

          <Button theme={theme} onClick={handleRefresh}>Refresh</Button>
        </Header>
       

        {posts.map(post => (
          <Post 
          key={post.id}
            likes={post.likes}
            onRemove={handleRemove}
            post={post}
            theme={theme}
          
          />
        ))}
    </>

  )
}