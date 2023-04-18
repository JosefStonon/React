import React, { useState } from 'react';

import Header from '../components/headers/Header';
import Post from '../components/posts/Post';
import Button from '../components/Button';

import { ThemeProvider } from '../context/ThemeContext';
import { Title } from './styles';

export default function App() {

  const [posts, setPost] = useState([
    {id: Math.random(), name: 'name#01', lastName: 'last#01', likes: 10, read: true , removed: false},
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


        }
      ])
    })
  }

  function handleDelete(DelId) {
    setPost((prevState) => prevState.map(
        post => (
          post.id === DelId
          ? { ...post, removed: true }
          : post
      )
    ));
  }


  return (

    <ThemeProvider>
      <Header>
        
          <Button
            onClick={handlerReflash}
          >
          <Title as="h2">ReFlash</Title>
          </Button>


        
        

      </Header>
    
      

      {posts.map(post => (
          <Post 

            key={post.id}
            onRemove={handleDelete}
              post={post}
          />
      ))}
    </ThemeProvider>
  )


}