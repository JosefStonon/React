import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";
import Button from "./Button";

import { ThemeProvider } from "./ThemeContext";


export default function App() {

  const [posts, setPost] = useState([
    {id: Math.random(), name: 'name#02', lastName: 'last#02', likes: 20, read: false},
    {id: Math.random(), name: 'name#03', lastName: 'last#03', likes: 30, read: true},
    {id: Math.random(), name: 'name#04', lastName: 'last#04', likes: 40, read: false},
    {id: Math.random(), name: 'name#05', lastName: 'last#05', likes: 50, read: false},
  ]);

  function handleToogleReflash() {
    setTimeout(() => {
      setPost((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          name: `name#02${posts.length + 1 }`, 
          lastName: `last#02${posts.length + 1 }`, 
          likes: 20, 
          read: false
        }
      ])

  }, 1500)
  }

  function handleRemove(delId) {
    setPost((prevState) => (
      prevState.filter(post => post.id !== delId)
    ))
  }


  return (
    <ThemeProvider>
      <Header>
        <Button onClick={handleToogleReflash}>Refresh</Button>
      </Header>
        


      {posts.map(post => (
        <Post 
          key= {post.id}
          onRemove={handleRemove}
          post={post}
        />
      ))}
    </ThemeProvider>  
  )
}