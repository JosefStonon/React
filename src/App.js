import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';
import Button from './Button';

import { ThemeProvider } from './ThemeContext';

export default function App() {

  const [posts, setPost] = useState([
    {id: Math.random(), name: 'name#01', lastName: 'last#01', likes: 10, read: true , removed: true},
    {id: Math.random(), name: 'name#02', lastName: 'last#02', likes: 20, read: false , removed: false},
    {id: Math.random(), name: 'name#03', lastName: 'last#03', likes: 30, read: false , removed: false},
    {id: Math.random(), name: 'name#04', lastName: 'last#04', likes: 40, read: false , removed: false},
  ]);

  function handlerReflash() {
    setTimeout(() => {
      setPost((prevState) => [
        ...prevState,
        {
          id: Math.random(), 
          name: `name#01${posts.length + 1 }`, 
          lastName: `last#01${posts.length + 1}`, 
          likes: 10, 
          read: false,
          removed

        }
      ])
    })


  }

  function handleDelete(DelId) {
    setPost((prevState) => prevState.map(
        post => (
          post.id === DelId
          ? {...post, removed: true}
          : post
      ))
    )
  }


  return (

    <ThemeProvider>
      <Header>
        <Button
          onClick={handlerReflash}
        >
          ReFlash
        </Button>
        

      </Header>
    
      

      {posts.map(post => (
          <Post 
            key={post.name}
            onRemove={handleDelete}
              post={post}
          />
      ))}
    </ThemeProvider>
  )


}